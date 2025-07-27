# Migration Guide

This guide helps you migrate from the legacy rules structure to the new multi-platform AI rules system.

## Table of Contents

- [Overview](#overview)
- [Breaking Changes](#breaking-changes)
- [Migration Steps](#migration-steps)
- [Rule Updates](#rule-updates)
- [Platform Compatibility](#platform-compatibility)
- [Testing Migration](#testing-migration)
- [Rollback Strategy](#rollback-strategy)

## Overview

The VDK Blueprints project has been restructured to support multi-platform AI assistant integration while maintaining backward compatibility where possible.

### What's Changed

- **Structure**: Rules moved from `rules/` to `.ai/rules/` with categorized subdirectories
- **Frontmatter**: Enhanced metadata schema with platform compatibility information
- **Content**: Separated universal guidelines from platform-specific instructions
- **Commands**: New platform-specific command system
- **Validation**: JSON schemas for rule and command validation

### Migration Timeline

- **Phase 1**: Structure reorganization (Complete)
- **Phase 2**: Frontmatter enhancement (In Progress)
- **Phase 3**: Content restructuring (Planned)
- **Phase 4**: Legacy cleanup (Planned)

## Breaking Changes

### File Structure Changes

#### Old Structure
```
rules/
├── assistants/
├── languages/
├── stacks/
├── tasks/
├── technologies/
├── tools/
├── 00-core-agent.mdc
├── 01-project-context.mdc
├── 02-common-errors.mdc
└── 03-mcp-configuration.mdc
```

#### New Structure
```
.ai/
├── rules/
│   ├── core/
│   ├── languages/
│   ├── technologies/
│   ├── stacks/
│   ├── tasks/
│   ├── assistants/
│   └── tools/
├── commands/
├── schemas/
├── templates/
└── docs/
```

### File Naming Changes

| Old Name | New Name | Category |
|----------|----------|----------|
| `00-core-agent.mdc` | `core/00-agent-behavior.mdc` | Core |
| `01-project-context.mdc` | `core/01-code-quality.mdc` | Core |
| `02-common-errors.mdc` | `core/03-error-prevention.mdc` | Core |
| `03-mcp-configuration.mdc` | `technologies/MCP-Integration.mdc` | Technology |
| `TypeScript-Modern.mdc` | `typescript-modern.mdc` | Language |
| `NextJS-Enterprise-Stack.mdc` | `nextjs-enterprise.mdc` | Stack |

### Frontmatter Schema Changes

#### Old Format
```yaml
---
title: "Rule Title"
description: "Rule description"
tags: ["tag1", "tag2"]
---
```

#### New Format
```yaml
---
# === Core Identification ===
id: "rule-identifier"
title: "Rule Title"
description: "Rule description"
version: "1.0.0"
lastUpdated: "2025-07-25"

# === Categorization ===
category: "task"
complexity: "medium"
scope: "component"
audience: "developer"
maturity: "stable"

# === Platform Compatibility ===
platforms:
  claude-code:
    compatible: true
    memory: true
  cursor:
    compatible: true
    activation: "auto-attached"
  windsurf:
    compatible: true
    mode: "workspace"
  github-copilot:
    compatible: true
    priority: 8
---
```

## Migration Steps

### Step 1: Backup Current Configuration

```bash
# Create backup of current rules
cp -r rules/ rules-backup/
cp -r .ai/ .ai-backup/ 2>/dev/null || true

# Backup any existing configuration files
cp .cursorrules .cursorrules.backup 2>/dev/null || true
cp CLAUDE.md CLAUDE.md.backup 2>/dev/null || true
```

### Step 2: Update File References

Update any scripts or configuration that reference the old structure:

#### Git Hooks
```bash
# Update pre-commit hooks
sed -i 's|rules/|.ai/rules/|g' .git/hooks/pre-commit

# Update CI/CD pipelines
sed -i 's|rules/\*\*/\*.mdc|.ai/rules/**/*.mdc|g' .github/workflows/*.yml
```

#### Editor Configuration
```bash
# Update VS Code settings
sed -i 's|"rules/"|".ai/rules/"|g' .vscode/settings.json

# Update IDE file watching patterns
sed -i 's|rules/|.ai/rules/|g' .idea/workspace.xml
```

### Step 3: Migrate Custom Rules

If you have custom rules, migrate them to the new structure:

```bash
# Create custom rules in appropriate categories
mkdir -p .ai/rules/custom/

# Move custom rules to new locations
for rule in custom-rules/*.mdc; do
  # Determine appropriate category and move
  echo "Migrating $rule - please categorize manually"
done
```

### Step 4: Update Platform Configurations

#### Claude Code Memory Update
```markdown
# Update CLAUDE.md
## AI Rules Integration

Active rules from .ai/rules/ directory:
- Core behaviors: .ai/rules/core/
- Language patterns: .ai/rules/languages/
- Technology guidelines: .ai/rules/technologies/
- Task workflows: .ai/rules/tasks/

Platform-specific commands: .ai/commands/claude-code/
```

#### Cursor Rules Update
```bash
# Generate new .cursorrules file
cat > .cursorrules << 'EOF'
# VDK Blueprints - Cursor Integration
# Auto-generated from .ai/rules/ - DO NOT EDIT MANUALLY

# Core Development Principles
{Include content from .ai/rules/core/}

# Language-Specific Guidelines
{Include content from .ai/rules/languages/ based on project}

# Technology Patterns
{Include content from .ai/rules/technologies/ based on dependencies}
EOF
```

## Rule Updates

### Updating Individual Rules

Use the migration script to update rule frontmatter:

```bash
# Run the migration script
python scripts/migrate-rule.py .ai/rules/languages/typescript-modern.mdc
```

#### Manual Migration Process

1. **Read the existing rule**:
```bash
# Check current frontmatter
head -20 .ai/rules/languages/typescript-modern.mdc
```

2. **Update frontmatter** using the new schema:
```yaml
---
# === Core Identification ===
id: "typescript-modern"
title: "Modern TypeScript Patterns"
description: "Guidelines for using modern TypeScript features effectively"
version: "1.0.0"
lastUpdated: "2025-07-25"

# === Categorization ===
category: "language"
language: "TypeScript"
complexity: "medium"
scope: "project"
audience: "developer"
maturity: "stable"

# === Platform Compatibility ===
platforms:
  claude-code:
    compatible: true
    command: false
    memory: true
    namespace: "project"
    allowedTools: ["Read", "Write", "Edit"]
    mcpIntegration: false
  cursor:
    compatible: true
    activation: "auto-attached"
    globs: ["**/*.ts", "**/*.tsx"]
    priority: "high"
  windsurf:
    compatible: true
    mode: "workspace"
    xmlTag: "typescript-patterns"
    characterLimit: 500
  github-copilot:
    compatible: true
    priority: 8
    reviewType: "code-quality"
---
```

3. **Restructure content** with platform-specific sections:
```markdown
# Modern TypeScript Patterns

## Universal Guidelines
{Platform-agnostic guidelines}

## Platform-Specific Instructions

### Claude Code
{Claude-specific implementation notes}

### Cursor
{Cursor auto-completion guidance}

### Windsurf
<typescript-patterns>
{Memory-optimized guidelines}
</typescript-patterns>

### GitHub Copilot
{Code review focus areas}
```

### Batch Migration

For multiple rules, use the batch migration script:

```bash
# Migrate all rules in a category
python scripts/batch-migrate.py .ai/rules/languages/

# Migrate with specific platform focus
python scripts/batch-migrate.py .ai/rules/tasks/ --platforms claude-code,cursor

# Dry run to preview changes
python scripts/batch-migrate.py .ai/rules/ --dry-run
```

## Platform Compatibility

### Compatibility Matrix

| Rule Category | Claude Code | Cursor | Windsurf | GitHub Copilot |
|---------------|-------------|--------|----------|----------------|
| Core | ✅ | ✅ | ✅ | ✅ |
| Languages | ✅ | ✅ | ✅ | ✅ |
| Technologies | ✅ | ✅ | ⚠️ | ✅ |
| Stacks | ✅ | ⚠️ | ⚠️ | ✅ |
| Tasks | ✅ | ⚠️ | ❌ | ⚠️ |
| Assistants | ✅ | ❌ | ❌ | ❌ |
| Tools | ✅ | ✅ | ⚠️ | ⚠️ |

**Legend**: ✅ Full support, ⚠️ Partial support, ❌ Not supported

### Platform-Specific Considerations

#### Claude Code
- **Strengths**: Full tool integration, command system, memory management
- **Migration**: Direct 1:1 rule conversion possible
- **Commands**: Convert complex workflows to slash commands

#### Cursor
- **Strengths**: Real-time assistance, file-pattern matching
- **Migration**: Requires content optimization for auto-completion
- **Limitations**: No complex command execution

#### Windsurf
- **Strengths**: Memory optimization, workspace awareness
- **Migration**: Requires significant content compression
- **Limitations**: Character limits require rule simplification

#### GitHub Copilot
- **Strengths**: Code review integration, priority system
- **Migration**: Focus on review and validation aspects
- **Limitations**: No real-time rule application

## Testing Migration

### Validation Scripts

```bash
# Validate rule schema compliance
python scripts/validate-rules.py .ai/rules/

# Check platform compatibility
python scripts/check-compatibility.py .ai/rules/ --platform claude-code

# Verify file naming conventions
python scripts/check-naming.py .ai/rules/
```

### Platform Testing

#### Claude Code Testing
```bash
# Test rule loading in Claude Code
claude-code --validate-memory .ai/rules/

# Test command generation
claude-code --generate-commands .ai/commands/claude-code/
```

#### Cursor Testing
```bash
# Test rule attachment
cursor --validate-rules .cursorrules

# Test auto-completion with new rules
cursor --test-completion typescript-patterns
```

#### Windsurf Testing
```bash
# Test memory optimization
windsurf --validate-memory .ai/rules/ --check-limits

# Test XML tag parsing
windsurf --validate-xml .ai/rules/
```

#### GitHub Copilot Testing
```bash
# Test review integration
gh api repos/:owner/:repo/pulls/:pull_number/reviews --method POST

# Test priority system
copilot --test-priorities .ai/rules/
```

### Manual Testing Checklist

- [ ] All rules load without errors
- [ ] Platform-specific features work as expected
- [ ] Auto-completion and suggestions function correctly
- [ ] Command execution works in supported platforms
- [ ] Memory usage is within platform limits
- [ ] File watching and auto-attachment work
- [ ] Rule priorities are respected
- [ ] Cross-platform consistency is maintained

## Rollback Strategy

### Quick Rollback

If migration fails, quickly restore previous state:

```bash
# Stop all AI assistants
pkill -f "claude-code|cursor|windsurf"

# Restore backups
rm -rf .ai/
mv .ai-backup/ .ai/ 2>/dev/null || true
rm -rf rules/
mv rules-backup/ rules/ 2>/dev/null || true

# Restore configuration files
mv .cursorrules.backup .cursorrules 2>/dev/null || true
mv CLAUDE.md.backup CLAUDE.md 2>/dev/null || true

# Restart AI assistants
echo "Manual restart of AI assistants required"
```

### Partial Rollback

Rollback specific components while keeping others:

```bash
# Rollback only rules structure
rm -rf .ai/rules/
cp -r rules-backup/ .ai/rules/

# Rollback only platform configurations
mv .cursorrules.backup .cursorrules
mv CLAUDE.md.backup CLAUDE.md

# Keep new schemas and templates
# .ai/schemas/ and .ai/templates/ remain intact
```

### Gradual Migration

If full migration is problematic, migrate incrementally:

```bash
# Phase 1: Structure only
mv rules/ .ai/rules/

# Phase 2: Core rules frontmatter
python scripts/migrate-rule.py .ai/rules/core/*.mdc

# Phase 3: One category at a time
python scripts/migrate-rule.py .ai/rules/languages/*.mdc
python scripts/migrate-rule.py .ai/rules/technologies/*.mdc

# Phase 4: Platform-specific optimizations
python scripts/optimize-platform.py .ai/rules/ --platform windsurf
```

## Post-Migration Tasks

### Documentation Updates

- [ ] Update README with new structure
- [ ] Revise contribution guidelines
- [ ] Update integration documentation
- [ ] Create new examples and tutorials

### Team Communication

- [ ] Notify team of structure changes
- [ ] Provide migration training
- [ ] Update development workflows
- [ ] Schedule rule review sessions

### Monitoring

- [ ] Monitor AI assistant performance
- [ ] Track rule usage and effectiveness
- [ ] Collect feedback from team members
- [ ] Plan iterative improvements

### Optimization

- [ ] Fine-tune platform-specific configurations
- [ ] Optimize rule priorities and activation patterns
- [ ] Reduce rule conflicts and overlaps
- [ ] Improve rule discovery and documentation

## Getting Help

If you encounter issues during migration:

1. **Check Documentation**: Review platform-specific integration guides
2. **Validate Configuration**: Use provided validation scripts
3. **Community Support**: Join GitHub Discussions for help
4. **Report Issues**: Create GitHub Issues for bugs or problems
5. **Rollback if Needed**: Use rollback strategy to restore working state

Remember: Migration is an iterative process. Take your time, test thoroughly, and don't hesitate to ask for help when needed.