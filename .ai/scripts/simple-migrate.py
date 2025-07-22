#!/usr/bin/env python3
"""
Simple migration script for updating rule frontmatter to new schema.
Usage: python simple-migrate.py <rule_file>
"""

import os
import sys
import re
from pathlib import Path

def detect_category_from_path(file_path: str) -> str:
    """Detect rule category from file path."""
    path_parts = Path(file_path).parts
    
    for part in path_parts:
        if part in ['core', 'languages', 'technologies', 'stacks', 'tasks', 'assistants', 'tools']:
            return part
    
    return 'task'  # default

def generate_new_frontmatter(file_path: str, old_content: str) -> str:
    """Generate new frontmatter from file analysis."""
    
    category = detect_category_from_path(file_path)
    file_name = Path(file_path).stem
    
    # Extract some values from old frontmatter
    description_match = re.search(r'description:\s*["\']?([^"\'\n]+)', old_content)
    version_match = re.search(r'version:\s*["\']?([^"\'\n]+)', old_content)
    
    description = description_match.group(1).strip() if description_match else f"Guidelines for {file_name.replace('-', ' ')}"
    version = version_match.group(1).strip().strip('"\'') if version_match else "1.0.0"
    
    # Generate title from filename
    title = file_name.replace('-', ' ').title()
    if category == 'core':
        title = f"AI {title}"
    elif category == 'languages':
        title = f"{title} Language Patterns"
    elif category == 'technologies':
        title = f"{title} Technology Guidelines"
    
    # Generate tags
    tags = [category] + file_name.lower().split('-')[:3]
    tags_str = ', '.join(f'"{tag}"' for tag in set(tags))
    
    # Determine complexity and scope
    content_length = len(old_content)
    complexity = 'simple' if content_length < 2000 else ('medium' if content_length < 5000 else 'complex')
    
    scope_map = {
        'core': 'system',
        'languages': 'project', 
        'technologies': 'project',
        'stacks': 'project',
        'tasks': 'component',
        'assistants': 'system',
        'tools': 'project'
    }
    scope = scope_map.get(category, 'component')
    
    # Platform-specific settings
    tools = '["Read", "Write", "Edit"]'
    if category in ['tasks', 'core']:
        tools = '["Read", "Write", "Edit", "Grep", "Bash"]'
    
    priority = 9 if category == 'core' else (8 if category == 'languages' else 7)
    char_limit = 300 if category == 'core' else 500
    
    # Generate globs based on old frontmatter
    globs_match = re.search(r'globs:\s*\n((?:\s*-\s*[^\n]+\n?)*)', old_content, re.MULTILINE)
    if globs_match:
        globs_content = globs_match.group(1).strip()
        if globs_content:
            # Convert YAML list to simple format
            glob_items = re.findall(r'-\s*["\']?([^"\'\n]+)', globs_content)
            globs = '[' + ', '.join(f'"{g.strip()}"' for g in glob_items) + ']'
        else:
            globs = '["**/*"]'
    else:
        globs = '["**/*"]'
    
    return f'''---
# === Core Identification ===
id: "{file_name}"
title: "{title}"
description: "{description.rstrip('.')}"
version: "{version}"
lastUpdated: "2025-01-22"

# === Categorization ===
category: "{category}"
complexity: "{complexity}"
scope: "{scope}"
audience: "developer"
maturity: "stable"

# === Platform Compatibility ===
platforms:
  claude-code:
    compatible: true
    command: {str(category == 'tasks').lower()}
    memory: true
    namespace: "project"
    allowedTools: {tools}
    mcpIntegration: false
  cursor:
    compatible: true
    activation: "auto-attached"
    globs: {globs}
    priority: "high"
  windsurf:
    compatible: true
    mode: "workspace"
    xmlTag: "{category}-patterns"
    characterLimit: {char_limit}
  github-copilot:
    compatible: true
    priority: {priority}
    reviewType: "code-quality"

# === Dependencies & Relationships ===
requires: []
suggests: []
conflicts: []
supersedes: []

# === Content Structure ===
contentSections:
  - "universal-guidelines"
  - "platform-specific"
  - "examples"
  - "anti-patterns"

# === Community Metadata ===
author: "community"
contributors: ["entro314-labs"]
tags: [{tags_str}]
discussionUrl: ""
---'''

def migrate_file(file_path: str) -> bool:
    """Migrate a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if not content.startswith('---'):
            print(f"Skipping {file_path}: No frontmatter found")
            return False
        
        # Find the end of frontmatter
        parts = content.split('---', 2)
        if len(parts) < 3:
            print(f"Skipping {file_path}: Invalid frontmatter format")
            return False
        
        rule_content = parts[2]
        
        # Generate new frontmatter
        new_frontmatter = generate_new_frontmatter(file_path, content)
        
        # Combine new frontmatter with existing content
        new_content = new_frontmatter + '\n' + rule_content
        
        # Write updated file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Migrated: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error migrating {file_path}: {str(e)}")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python simple-migrate.py <rule_file>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    if not os.path.isfile(file_path):
        print(f"File {file_path} not found")
        sys.exit(1)
    
    if not file_path.endswith('.mdc'):
        print("File must have .mdc extension")
        sys.exit(1)
    
    migrate_file(file_path)

if __name__ == '__main__':
    main()