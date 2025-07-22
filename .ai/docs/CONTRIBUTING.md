# Contributing to VibeKit VDK AI Rules

Welcome to the VibeKit VDK AI Rules project! This guide will help you understand how to contribute rules, commands, and documentation to support multi-platform AI assistant integration.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing Rules](#contributing-rules)
- [Contributing Commands](#contributing-commands)
- [Contributing Documentation](#contributing-documentation)
- [Validation and Testing](#validation-and-testing)
- [Style Guidelines](#style-guidelines)
- [Community Guidelines](#community-guidelines)

## Getting Started

### Prerequisites

- Basic understanding of AI assistants (Claude Code, Cursor, Windsurf, GitHub Copilot)
- Familiarity with Markdown and YAML frontmatter
- Understanding of software development best practices

### Setting Up

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/VibeKit-VDK-AI-rules.git`
3. Create a new branch for your contribution: `git checkout -b feature/your-rule-name`
4. Make your changes following the guidelines below
5. Test your changes using the validation tools
6. Submit a pull request

## Project Structure

```
.ai/
├── rules/                         # Universal patterns (cross-platform)
│   ├── core/                      # Fundamental AI behavior patterns
│   ├── languages/                 # Programming language patterns
│   ├── technologies/              # Framework/tool patterns
│   ├── stacks/                    # Technology combinations
│   ├── tasks/                     # Universal executable tasks
│   ├── assistants/                # AI platform configurations
│   └── tools/                     # Development tools
├── commands/                      # Platform-specific implementations
│   ├── claude-code/               # Claude Code native commands
│   ├── cursor/                    # Cursor-specific implementations
│   ├── windsurf/                  # Windsurf-specific implementations
│   └── github-copilot/            # Copilot-specific implementations
├── schemas/                       # Validation schemas
├── templates/                     # Contribution templates
└── docs/                         # Documentation
```

## Contributing Rules

### Rule Categories

Choose the appropriate category for your rule:

- **Core**: Fundamental AI behavior patterns
- **Language**: Programming language-specific guidelines
- **Technology**: Framework or tool-specific patterns
- **Stack**: Multi-technology combinations
- **Task**: Executable development tasks
- **Assistant**: AI platform-specific configurations
- **Tool**: Development tool integrations

### Creating a New Rule

1. Use the rule template: `cp .ai/templates/rule-template.mdc .ai/rules/[category]/your-rule-name.mdc`
2. Update the frontmatter with accurate metadata
3. Write universal guidelines that apply to all platforms
4. Add platform-specific instructions for each supported platform
5. Include comprehensive code examples
6. Document anti-patterns to avoid
7. Validate your rule using the schema

### Rule Frontmatter Requirements

All rules must include complete frontmatter following this schema:

```yaml
---
# === Core Identification ===
id: "your-rule-id"                    # Unique identifier (kebab-case)
title: "Your Rule Title"              # Human-readable title
description: "Brief description"       # What this rule does
version: "1.0.0"                      # Semantic versioning
lastUpdated: "2025-01-22"             # ISO date format

# === Categorization ===
category: "task"                      # See categories above
subcategory: "component"              # Optional grouping
complexity: "medium"                  # simple, medium, complex
scope: "component"                    # file, component, feature, project, system
audience: "developer"                # developer, architect, team-lead, junior
maturity: "stable"                   # experimental, beta, stable, deprecated

# === Platform Compatibility ===
platforms:                           # Must include all platforms
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
    globs: ["**/*.tsx", "**/*.jsx"]
    priority: "high"
  windsurf:
    compatible: true
    mode: "workspace"
    xmlTag: "your-rule-tag"
    characterLimit: 400
  github-copilot:
    compatible: true
    priority: 8
    reviewType: "code-quality"

# === Additional metadata... ===
---
```

### Content Structure

Every rule must include these sections:

1. **Universal Guidelines**: Platform-agnostic best practices
2. **Platform-Specific Instructions**: Detailed implementation for each platform
3. **Code Examples**: Working examples showing correct and incorrect patterns
4. **Anti-Patterns**: Common mistakes to avoid
5. **Integration Notes**: How the rule works with other patterns

### Writing Guidelines

#### Universal Guidelines
- Use active voice: "Create components using..." not "Components should be created..."
- Be specific: Include exact naming conventions, file patterns, and code structures
- Provide context: Explain why the guideline matters and when to apply it

#### Platform-Specific Instructions
- **Claude Code**: Focus on tool usage and step-by-step processes
- **Cursor**: Describe auto-completion and inline suggestion behavior
- **Windsurf**: Use concise, memory-optimized instructions with XML tags
- **GitHub Copilot**: Focus on code review and validation points

#### Code Examples
- Include complete, working code snippets
- Show both correct (✅) and incorrect (❌) implementations
- Include necessary imports and type definitions
- Explain why certain patterns are problematic

## Contributing Commands

Commands are platform-specific implementations that extend rule functionality.

### Creating a New Command

1. Choose the target platform directory: `.ai/commands/[platform]/`
2. Use the command template: `cp .ai/templates/command-template.md .ai/commands/[platform]/your-command.md`
3. Define clear parameters and examples
4. Document the step-by-step implementation
5. Include error handling and troubleshooting

### Command Categories

- **Workflow**: Multi-step development processes
- **Meta**: Commands about commands or project management
- **Quality**: Code quality and validation commands
- **Security**: Security-focused operations
- **Utility**: General-purpose helper commands

## Contributing Documentation

### Documentation Types

- **User Guides**: How to use rules and commands effectively
- **Integration Guides**: Platform-specific setup and configuration
- **API Documentation**: Schema and validation references
- **Migration Guides**: Upgrading between versions

### Documentation Standards

- Use clear, concise language
- Include practical examples
- Provide troubleshooting information
- Keep documentation up-to-date with code changes

## Validation and Testing

### Schema Validation

Validate your contributions against the schemas:

```bash
# Validate rule frontmatter
jsonschema -i your-rule.yaml .ai/schemas/rule-schema.json

# Validate command metadata
jsonschema -i your-command.yaml .ai/schemas/command-schema.json
```

### Testing Rules

1. Test rule compatibility with each declared platform
2. Verify examples work as documented
3. Check that anti-patterns are properly identified
4. Ensure integration with related rules works correctly

### Quality Checklist

Before submitting your contribution:

- [ ] Frontmatter follows the required schema
- [ ] All platforms are properly declared and configured
- [ ] Universal guidelines are platform-agnostic
- [ ] Platform-specific instructions are accurate
- [ ] Code examples are complete and working
- [ ] Anti-patterns are clearly documented
- [ ] File naming follows kebab-case convention
- [ ] Content is spell-checked and grammatically correct

## Style Guidelines

### File Naming
- Use kebab-case for all file names: `react-component-creation.mdc`
- Be descriptive but concise
- Avoid abbreviations unless widely understood

### Content Formatting
- Use proper Markdown syntax
- Include code syntax highlighting
- Use consistent heading levels
- Format lists and tables properly

### Language Style
- Write in present tense
- Use active voice
- Be direct and actionable
- Avoid jargon unless necessary

## Community Guidelines

### Communication
- Be respectful and constructive in discussions
- Provide helpful feedback on contributions
- Ask questions when unsure about requirements
- Share knowledge and learn from others

### Collaboration
- Review others' contributions thoughtfully
- Provide specific, actionable feedback
- Help newcomers understand the contribution process
- Participate in discussions about rule improvements

### Quality Standards
- Prioritize accuracy over speed
- Test contributions thoroughly
- Document edge cases and limitations
- Consider long-term maintainability

## Getting Help

- **Issues**: Report bugs or request features via GitHub Issues
- **Discussions**: Join community discussions for questions and ideas
- **Documentation**: Check existing docs before asking questions
- **Examples**: Look at existing rules for patterns and inspiration

## Recognition

Contributors are recognized in:
- Rule metadata (`contributors` field)
- Release notes for significant contributions
- Community showcase for innovative rules
- Documentation acknowledgments

Thank you for contributing to VibeKit VDK AI Rules! Your contributions help make AI-assisted development better for everyone.