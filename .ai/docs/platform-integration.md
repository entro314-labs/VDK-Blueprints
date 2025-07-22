# Platform Integration Guide

This guide explains how to integrate VibeKit VDK AI Rules with different AI assistant platforms, including setup, configuration, and optimization strategies.

## Table of Contents

- [Overview](#overview)
- [Claude Code Integration](#claude-code-integration)
- [Cursor Integration](#cursor-integration)
- [Windsurf Integration](#windsurf-integration)
- [GitHub Copilot Integration](#github-copilot-integration)
- [Multi-Platform Workflows](#multi-platform-workflows)
- [Troubleshooting](#troubleshooting)

## Overview

VibeKit VDK AI Rules supports four major AI assistant platforms, each with unique capabilities and integration patterns:

| Platform | Strengths | Integration Type | Rule Format |
|----------|-----------|-----------------|-------------|
| Claude Code | Tool integration, file operations | Native commands | MDC with frontmatter |
| Cursor | Real-time assistance, autocomplete | Rule injection | MDC auto-attachment |
| Windsurf | Memory optimization, context awareness | XML-tagged content | Compressed guidelines |
| GitHub Copilot | Code review, suggestions | Guideline priorities | Review-focused rules |

## Claude Code Integration

### Setup

1. **Install Claude Code**: Follow the official installation guide
2. **Configure Memory**: Ensure CLAUDE.md is properly configured
3. **Add Rules Directory**: Point Claude Code to your `.ai/rules/` directory

### Memory Configuration

Add this to your `CLAUDE.md` file:

```markdown
# AI Rules Integration

## Rule Sources
- Local rules: .ai/rules/
- Core behaviors: .ai/rules/core/
- Language-specific: .ai/rules/languages/
- Technology patterns: .ai/rules/technologies/

## Active Rule Categories
- Security practices (always active)
- Code quality guidelines (always active)
- Language-specific rules (auto-activated by file type)
- Technology rules (activated by project dependencies)
```

### Command Integration

#### Creating Slash Commands

Convert rules to slash commands for frequently used patterns:

```markdown
# In .ai/commands/claude-code/workflow/create-component.md
---
command: "/create-component"
description: "Create a new React component with TypeScript"
parameters:
  - name: "componentName"
    type: "string"
    required: true
  - name: "directory"
    type: "string"
    default: "components"
---

Create a TypeScript React component following project patterns:

1. Use Read tool to examine existing component structure
2. Create component directory: {directory}/{componentName}/
3. Generate component file with proper TypeScript interfaces
4. Create index.ts for clean exports
5. Validate against project patterns
```

#### MCP Integration

For advanced tool integration:

```yaml
# In rule frontmatter
platforms:
  claude-code:
    mcpIntegration: true
    allowedTools: ["Read", "Write", "Edit", "mcp__custom_tool"]
```

### Tool Usage Patterns

#### File Operations
```markdown
### Claude Code Implementation
1. **Analysis Phase**
   - Use `Read` tool to examine existing patterns
   - Use `Grep` tool to find similar implementations
   - Use `LS` tool to understand project structure

2. **Implementation Phase**
   - Use `Write` tool for new files
   - Use `Edit` tool for modifications
   - Use `MultiEdit` for batch changes

3. **Validation Phase**
   - Use `Bash` tool to run tests
   - Verify compilation with TypeScript
   - Check linting with project tools
```

### Best Practices

- **Memory Management**: Keep rules concise to fit in context window
- **Tool Selection**: Use appropriate tools for each operation
- **Error Handling**: Always validate operations and handle failures
- **Project Awareness**: Respect existing project patterns and conventions

## Cursor Integration

### Setup

1. **Install Cursor**: Download and install from cursor.sh
2. **Configure Rules**: Add rules to your project's `.cursorrules` file
3. **Enable Auto-attachment**: Configure file pattern matching

### Rule Attachment

#### Auto-attachment Configuration

```yaml
# In rule frontmatter
platforms:
  cursor:
    compatible: true
    activation: "auto-attached"
    globs: ["**/*.tsx", "**/*.jsx", "**/*.ts", "**/*.js"]
    priority: "high"
```

#### Manual Attachment

For specialized rules, use agent-requested activation:

```yaml
platforms:
  cursor:
    activation: "agent-requested"
    priority: "medium"
```

### .cursorrules Integration

Create a consolidated rules file:

```markdown
# .cursorrules

## Core Development Principles
{Universal guidelines from core rules}

## React Development
{Guidelines from React-specific rules when *.tsx files are detected}

## TypeScript Patterns
{Guidelines from TypeScript rules when *.ts files are detected}

## Project-Specific Patterns
{Stack-specific rules based on detected dependencies}
```

### Rule Priority System

Configure rule importance for Cursor's selection algorithm:

```yaml
platforms:
  cursor:
    priority: "high"    # Always included
    priority: "medium"  # Included when space allows
    priority: "low"     # Included only when specifically relevant
```

### Best Practices

- **File Pattern Specificity**: Use precise glob patterns to avoid rule conflicts
- **Content Optimization**: Keep rule content focused and actionable
- **Priority Management**: Set appropriate priorities based on rule importance
- **Testing**: Verify auto-attachment works as expected

## Windsurf Integration

### Setup

1. **Install Windsurf**: Follow official installation instructions
2. **Configure Workspace**: Set up workspace-level rule integration
3. **Optimize Memory**: Configure character limits for performance

### Memory Optimization

Windsurf requires memory-optimized rule content:

```yaml
platforms:
  windsurf:
    compatible: true
    mode: "workspace"
    xmlTag: "react-patterns"
    characterLimit: 300
```

### XML Tag Format

Use XML tags to structure content for Windsurf:

```markdown
### Windsurf
<react-patterns>
- Use functional components with TypeScript interfaces
- Export components as named exports for tree-shaking
- Place components in dedicated directories with index files
- Follow project naming conventions consistently
</react-patterns>
```

### Character Limit Guidelines

| Rule Complexity | Character Limit | Content Strategy |
|----------------|----------------|------------------|
| Simple | 200-300 | Key principles only |
| Medium | 300-500 | Principles + examples |
| Complex | 500-800 | Structured guidelines |

### Content Compression Techniques

#### Bullet Point Optimization
```markdown
❌ Verbose:
- Create React components using functional component syntax instead of class components
- Always include proper TypeScript interface definitions for component props
- Use named exports rather than default exports to enable better tree-shaking

✅ Compressed:
- Use functional components with TypeScript interfaces
- Export as named exports for tree-shaking
- Follow established project patterns
```

#### Reference Patterns
```markdown
<component-creation>
- Functional syntax: const Component = () => {}
- TypeScript props: interface Props { title: string }
- Named exports: export { Component }
- Directory structure: components/Component/index.ts
</component-creation>
```

### Best Practices

- **Tag Naming**: Use descriptive, unique XML tag names
- **Content Density**: Maximize information density within character limits
- **Essential Focus**: Include only the most critical guidelines
- **Workspace Scope**: Configure for workspace-wide or project-specific application

## GitHub Copilot Integration

### Setup

1. **Install GitHub Copilot**: Enable in your IDE
2. **Configure Priorities**: Set rule importance levels
3. **Enable Review Mode**: Configure code review integration

### Priority System

Configure rule selection priority (1-10 scale):

```yaml
platforms:
  github-copilot:
    compatible: true
    priority: 9          # Critical security rules
    priority: 7          # Important code quality rules
    priority: 5          # Standard conventions
    priority: 3          # Style preferences
```

### Review Type Configuration

Categorize rules by review focus:

```yaml
platforms:
  github-copilot:
    reviewType: "security"      # Security-focused validation
    reviewType: "performance"   # Performance optimization
    reviewType: "code-quality"  # General code quality
    reviewType: "style"         # Code style and formatting
```

### Code Review Integration

#### Inline Suggestions
Configure rules to provide inline code suggestions:

```markdown
### GitHub Copilot
Focus on these aspects during code review:

- **Type Safety**: Ensure proper TypeScript interface definitions
- **Naming Conventions**: Verify consistent component and variable naming
- **Performance**: Check for unnecessary re-renders and memory leaks
- **Security**: Validate input sanitization and error handling
```

#### Pull Request Review
Configure automated review comments:

```markdown
### GitHub Copilot Review Points

#### Required Checks
- [ ] Component follows naming conventions
- [ ] Props are properly typed with TypeScript
- [ ] Exports use named export pattern
- [ ] Directory structure matches project standards

#### Suggestions
- Consider using useCallback for event handlers
- Add error boundaries for complex components
- Include proper ARIA attributes for accessibility
```

### Best Practices

- **Priority Alignment**: Set priorities based on team standards and project criticality
- **Review Focus**: Align review types with development workflow phases
- **Actionable Feedback**: Provide specific, actionable guidance
- **Integration Testing**: Verify review suggestions work with existing tools

## Multi-Platform Workflows

### Unified Development Experience

#### Rule Synchronization
Maintain consistency across platforms:

```yaml
# Unified rule configuration
platforms:
  claude-code:
    compatible: true
    memory: true
  cursor:
    compatible: true
    activation: "auto-attached"
  windsurf:
    compatible: true
    characterLimit: 400
  github-copilot:
    compatible: true
    priority: 8
```

#### Cross-Platform Testing
Test rules across all declared platforms:

1. **Claude Code**: Test tool interactions and command execution
2. **Cursor**: Verify auto-completion and suggestions
3. **Windsurf**: Check memory optimization and XML rendering
4. **GitHub Copilot**: Validate review feedback and priorities

### Team Collaboration

#### Shared Configuration
Create team-wide configuration files:

```bash
# Project structure for team sharing
.ai/
├── team-config/
│   ├── claude-memory.md      # Shared Claude Code memory
│   ├── cursor-rules.md       # Team Cursor rules
│   ├── windsurf-workspace.md # Windsurf workspace config
│   └── copilot-guidelines.md # Copilot review guidelines
```

#### Platform Migration
Guide for migrating between platforms:

1. **Export Current Rules**: Document active rules and configurations
2. **Map Capabilities**: Identify equivalent features on target platform
3. **Adapt Content**: Modify rule content for target platform constraints
4. **Test Integration**: Verify functionality on new platform
5. **Train Team**: Provide training on new platform usage

## Troubleshooting

### Common Issues

#### Rule Not Loading
**Problem**: Rule doesn't appear in AI assistant

**Solutions**:
- Verify frontmatter compatibility settings
- Check file path and naming conventions
- Validate YAML frontmatter syntax
- Confirm platform-specific configuration

#### Memory Limits Exceeded
**Problem**: Rule content too large for platform

**Solutions**:
- Compress content using techniques from Windsurf section
- Split complex rules into smaller, focused rules
- Use external references for detailed examples
- Optimize character usage in platform-specific sections

#### Platform Conflicts
**Problem**: Rule behaves differently across platforms

**Solutions**:
- Review platform-specific instructions for consistency
- Test rule behavior on each platform individually
- Adjust content for platform capabilities and constraints
- Document known platform differences

#### Performance Issues
**Problem**: Rule loading impacts AI assistant performance

**Solutions**:
- Optimize rule priorities and activation patterns
- Reduce active rule count through better targeting
- Use lazy loading for large rule sets
- Monitor platform resource usage

### Debugging Strategies

#### Rule Validation
```bash
# Validate rule frontmatter
jsonschema -i rule.yaml .ai/schemas/rule-schema.json

# Check file naming conventions
find .ai/rules -name "*.mdc" | grep -v "^[a-z0-9-]*\.mdc$"

# Verify platform compatibility
grep -r "compatible: false" .ai/rules/
```

#### Platform Testing
```bash
# Test Claude Code integration
claude-code --validate-memory .ai/rules/

# Test Cursor rule attachment
cursor --validate-rules .cursorrules

# Check Windsurf character limits
wc -c .ai/rules/**/*.mdc | awk '$1 > 800 {print $2 " exceeds limit"}'
```

### Support Resources

- **Documentation**: Comprehensive guides in `.ai/docs/`
- **Community**: GitHub Discussions for questions and feedback
- **Examples**: Reference implementations in existing rules
- **Schemas**: Validation schemas for rule structure verification

Remember: Platform integration is an iterative process. Start with basic integration and refine based on usage patterns and feedback.