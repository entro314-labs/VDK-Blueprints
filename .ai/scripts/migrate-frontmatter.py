#!/usr/bin/env python3
"""
Batch migration script for updating rule frontmatter to new schema.
Usage: python migrate-frontmatter.py <rule_file_or_directory>
"""

import os
import sys
import re
import yaml
from pathlib import Path
from typing import Dict, Any, List

def detect_category_from_path(file_path: str) -> str:
    """Detect rule category from file path."""
    path_parts = Path(file_path).parts
    
    for part in path_parts:
        if part in ['core', 'languages', 'technologies', 'stacks', 'tasks', 'assistants', 'tools']:
            return part
    
    return 'task'  # default

def detect_complexity(content: str) -> str:
    """Heuristic to detect rule complexity from content."""
    content_length = len(content)
    
    if content_length < 2000:
        return 'simple'
    elif content_length < 5000:
        return 'medium'
    else:
        return 'complex'

def detect_scope(category: str, content: str) -> str:
    """Detect scope based on category and content."""
    scope_mapping = {
        'core': 'system',
        'languages': 'project',
        'technologies': 'project',
        'stacks': 'project',
        'tasks': 'component',
        'assistants': 'system',
        'tools': 'project'
    }
    return scope_mapping.get(category, 'component')

def extract_globs_from_old_frontmatter(old_frontmatter: Dict[str, Any]) -> List[str]:
    """Extract file globs from old frontmatter."""
    globs = old_frontmatter.get('globs', [])
    if not globs and old_frontmatter.get('alwaysApply'):
        return ['**/*']
    return globs

def generate_platform_config(category: str, old_frontmatter: Dict[str, Any], globs: List[str]) -> Dict[str, Any]:
    """Generate platform compatibility configuration."""
    
    base_tools = ["Read", "Write", "Edit"]
    if category in ['tasks', 'core']:
        base_tools.extend(["Grep", "Bash"])
    
    priority_map = {
        'core': 9,
        'languages': 8,
        'technologies': 7,
        'stacks': 6,
        'tasks': 5,
        'assistants': 4,
        'tools': 5
    }
    
    activation = "always" if old_frontmatter.get('alwaysApply', False) else "auto-attached"
    character_limit = 300 if category == 'core' else (600 if category == 'languages' else 500)
    
    return {
        'claude-code': {
            'compatible': True,
            'command': category == 'tasks',
            'memory': True,
            'namespace': 'project',
            'allowedTools': base_tools,
            'mcpIntegration': False
        },
        'cursor': {
            'compatible': True,
            'activation': activation,
            'globs': globs if globs else ['**/*'],
            'priority': 'high' if category in ['core', 'languages'] else 'medium'
        },
        'windsurf': {
            'compatible': True,
            'mode': 'workspace',
            'xmlTag': f"{category}-patterns",
            'characterLimit': character_limit
        },
        'github-copilot': {
            'compatible': True,
            'priority': priority_map.get(category, 5),
            'reviewType': 'security' if 'security' in old_frontmatter.get('description', '').lower() else 'code-quality'
        }
    }

def convert_frontmatter(file_path: str, old_frontmatter: Dict[str, Any], content: str) -> Dict[str, Any]:
    """Convert old frontmatter to new schema."""
    
    category = detect_category_from_path(file_path)
    file_name = Path(file_path).stem
    
    # Extract basic info
    title = old_frontmatter.get('title', file_name.replace('-', ' ').title())
    description = old_frontmatter.get('description', f"Guidelines for {title}")
    version = old_frontmatter.get('version', '1.0.0')
    
    # Detect additional properties
    complexity = detect_complexity(content)
    scope = detect_scope(category, content)
    globs = extract_globs_from_old_frontmatter(old_frontmatter)
    
    # Generate tags from filename and category
    tags = [category]
    name_parts = file_name.lower().split('-')
    tags.extend(name_parts[:3])  # First 3 parts of filename
    
    # Build compatible suggestions from old compatibleWith
    suggests = []
    compatible_with = old_frontmatter.get('compatibleWith', [])
    for comp in compatible_with:
        suggests.append(comp.lower().replace('-', '-'))
    
    new_frontmatter = {
        '# === Core Identification ===': None,
        'id': file_name,
        'title': title,
        'description': description.rstrip('.'),
        'version': version,
        'lastUpdated': '2025-01-22',
        
        '# === Categorization ===': None,
        'category': category,
        'complexity': complexity,
        'scope': scope,
        'audience': 'developer',
        'maturity': 'stable',
        
        '# === Platform Compatibility ===': None,
        'platforms': generate_platform_config(category, old_frontmatter, globs),
        
        '# === Dependencies & Relationships ===': None,
        'requires': [],
        'suggests': suggests,
        'conflicts': [],
        'supersedes': [],
        
        '# === Content Structure ===': None,
        'contentSections': [
            'universal-guidelines',
            'platform-specific',
            'examples',
            'anti-patterns' if category != 'core' else 'integration-notes'
        ],
        
        '# === Community Metadata ===': None,
        'author': 'community',
        'contributors': ['entro314-labs'],
        'tags': list(set(tags)),  # Remove duplicates
        'discussionUrl': ''
    }
    
    # Add optional fields based on content
    if 'framework' in old_frontmatter:
        new_frontmatter['framework'] = old_frontmatter['framework']
    
    if category == 'languages':
        new_frontmatter['language'] = title.split()[0]  # First word is usually the language
    
    return new_frontmatter

def migrate_rule_file(file_path: str) -> bool:
    """Migrate a single rule file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter and content
        if not content.startswith('---'):
            print(f"Skipping {file_path}: No frontmatter found")
            return False
        
        parts = content.split('---', 2)
        if len(parts) < 3:
            print(f"Skipping {file_path}: Invalid frontmatter format")
            return False
        
        old_frontmatter = yaml.safe_load(parts[1])
        rule_content = parts[2]
        
        # Convert to new schema
        new_frontmatter = convert_frontmatter(file_path, old_frontmatter, content)
        
        # Generate YAML with comments
        yaml_lines = ['---']
        
        for key, value in new_frontmatter.items():
            if key.startswith('# ==='):
                yaml_lines.append(f'\n{key}')
            elif value is None:
                continue
            else:
                yaml_str = yaml.dump({key: value}, default_flow_style=False).rstrip()
                yaml_lines.append(yaml_str)
        
        yaml_lines.append('---')
        
        # Write updated file
        new_content = '\n'.join(yaml_lines) + rule_content
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Migrated: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error migrating {file_path}: {str(e)}")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python migrate-frontmatter.py <rule_file_or_directory>")
        sys.exit(1)
    
    target = sys.argv[1]
    
    if os.path.isfile(target):
        # Single file
        if target.endswith('.mdc'):
            migrate_rule_file(target)
        else:
            print("File must have .mdc extension")
    elif os.path.isdir(target):
        # Directory - find all .mdc files
        mdc_files = list(Path(target).rglob('*.mdc'))
        
        print(f"Found {len(mdc_files)} .mdc files to migrate...")
        
        success_count = 0
        for file_path in mdc_files:
            if migrate_rule_file(str(file_path)):
                success_count += 1
        
        print(f"\nMigration complete: {success_count}/{len(mdc_files)} files migrated successfully")
    else:
        print(f"Target {target} not found")
        sys.exit(1)

if __name__ == '__main__':
    main()