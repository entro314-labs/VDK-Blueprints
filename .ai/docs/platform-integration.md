# VDK Blueprints Platform Integration Guide

This comprehensive guide explains how to integrate VDK Blueprints with 23+ AI assistant platforms and IDEs, following the AI Context Schema v2.1.0 standard.

## Table of Contents

- [Overview](#overview)
- [AI Assistants](#ai-assistants)
  - [Claude Code](#claude-code)
  - [Claude Desktop](#claude-desktop)
  - [GitHub Copilot](#github-copilot)
  - [Generic AI](#generic-ai)
- [AI-First Editors](#ai-first-editors)
  - [Cursor](#cursor)
  - [Windsurf](#windsurf)
  - [Windsurf Next](#windsurf-next)
- [Code Editors](#code-editors)
  - [VS Code Family](#vs-code-family)
  - [Zed Editor](#zed-editor)
- [JetBrains IDEs](#jetbrains-ides)
- [Multi-Platform Workflows](#multi-platform-workflows)
- [Troubleshooting](#troubleshooting)

## Overview

VDK Blueprints now supports 23+ AI assistant platforms and IDEs, each optimized for specific workflows:

### Platform Categories

| Category | Platforms | Key Features |
|----------|-----------|--------------|
| **AI Assistants** | Claude Code, Claude Desktop, GitHub Copilot, Generic AI | Direct AI interaction, tool integration |
| **AI-First Editors** | Cursor, Windsurf, Windsurf Next | Native AI features, real-time assistance |
| **Code Editors** | VS Code, VS Code Insiders, VSCodium, Zed | Extension-based AI integration |
| **JetBrains IDEs** | WebStorm, IntelliJ, PyCharm, PhpStorm + 6 more | Enterprise IDE AI capabilities |

### AI Context Schema v2.1.0 Compliance

All blueprints now include:
- ✅ **Enhanced metadata**: Version tracking, licensing, repository info
- ✅ **MCP integration**: Model Context Protocol support
- ✅ **Platform-specific configurations**: Optimized for each platform
- ✅ **Relationship management**: Dependencies, suggestions, conflicts

## AI Assistants

### Claude Code

**Best for**: Direct AI interaction with tool access and memory management

#### Setup
1. Install Claude Code from the official website
2. Configure your CLAUDE.md file
3. Add VDK Blueprints to your memory configuration

#### Configuration
Add to your `CLAUDE.md`:

```markdown
# VDK Blueprints Integration

## Active Blueprints
- Core behaviors: Always active for consistent AI behavior
- Language rules: Auto-activated based on project detection
- Technology patterns: Context-aware activation
- Task workflows: On-demand for specific development tasks

## Memory Configuration
Priority: 8/10 for core blueprints, 7/10 for context-specific

## MCP Integration
Enabled for enhanced tool access and workflow automation
```

#### Features
- **Memory Files**: Persistent context across sessions
- **Slash Commands**: Custom commands from blueprint definitions  
- **Tool Integration**: File operations, code analysis, external tools
- **MCP Support**: Enhanced capabilities through protocol servers

### Claude Desktop

**Best for**: Desktop AI workflows with MCP integration

#### Setup
1. Install Claude Desktop application
2. Configure MCP servers if needed
3. Set up rules folder integration

#### Configuration
- **Rules Directory**: `.claude-desktop/rules/`
- **MCP Integration**: Full protocol support
- **Context Priority**: 9/10 for core blueprints

#### Features
- **MCP Native**: Full Model Context Protocol support
- **Rules System**: Organized blueprint loading
- **Desktop Integration**: Native OS integration

### GitHub Copilot

**Best for**: Code review, suggestions, and repository-level guidance

#### Setup
1. Install GitHub Copilot extension
2. Configure repository settings
3. Set up guideline priorities

#### Configuration
Create `.github/copilot/guidelines.json`:

```json
{
  "guidelines": [
    {
      "name": "VDK Core Practices",
      "priority": 9,
      "type": "code-quality",
      "scope": "repository"
    }
  ]
}
```

#### Features
- **Code Review**: Automated review with blueprint standards
- **Priority System**: 1-10 priority for guideline application
- **Repository Scope**: Organization or repo-level configuration

### Generic AI

**Best for**: Universal AI platform compatibility

#### Setup
- **Config Path**: `.ai/`
- **Rules Path**: `.ai/rules/`
- **Priority**: 7/10 default

This platform definition ensures compatibility with any AI system that supports the AI Context Schema.

## AI-First Editors

### Cursor

**Best for**: Real-time AI assistance with intelligent auto-attachment

#### Setup
1. Install Cursor editor
2. Configure rule auto-attachment
3. Set up file pattern matching

#### Configuration
Rules automatically activate based on:
- **File Patterns**: TypeScript files trigger TS rules
- **Project Detection**: Framework detection enables stack rules
- **Priority System**: High/Medium/Low priority levels

#### Features
- **Auto-Attachment**: Rules activate based on file context
- **Real-time Assistance**: Live AI help during coding
- **File Pattern Matching**: Smart rule activation

### Windsurf

**Best for**: Memory-optimized workspace with XML formatting

#### Setup
1. Install Windsurf editor
2. Configure workspace settings
3. Set character limits for optimization

#### Configuration
- **Mode**: Workspace-aware configuration
- **XML Tags**: Structured content formatting
- **Character Limits**: Optimized for performance (up to 6000 chars)

#### Features
- **Workspace Awareness**: Project-context understanding
- **Memory Optimization**: Efficient content loading
- **XML Formatting**: Structured rule presentation

### Windsurf Next

Enhanced version of Windsurf with additional capabilities:
- **Improved Performance**: Better memory management
- **Enhanced XML**: More sophisticated formatting
- **Priority System**: 1-10 priority levels

## Code Editors

### VS Code Family

**Platforms**: VS Code, VS Code Insiders, VSCodium

#### Setup
1. Install the AI Context Schema extension
2. Configure workspace settings
3. Enable MCP integration if available

#### Configuration
Add to `.vscode/settings.json`:

```json
{
  "aiContext.autoActivate": true,
  "aiContext.rulesPath": ".ai/rules/",
  "aiContext.mcpIntegration": true
}
```

#### Features
- **Extension System**: Rich AI extension ecosystem
- **Settings Integration**: Deep editor configuration
- **MCP Support**: Protocol integration where available
- **Multi-Variant**: Supports stable, insiders, and open-source versions

### Zed Editor

**Best for**: High-performance editing with collaborative AI features

#### Setup
1. Install Zed editor
2. Enable AI features
3. Configure project-level settings

#### Configuration
- **Mode**: Project or global configuration
- **AI Features**: Native AI assistance
- **Performance**: High-performance optimization
- **Collaborative**: Real-time collaboration support

#### Features
- **High Performance**: Optimized for speed
- **Collaborative Editing**: Team-based AI assistance
- **Native AI**: Built-in AI capabilities

## JetBrains IDEs

**Supported IDEs**: IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine, CLion, DataGrip, GoLand, Rider, Android Studio

### General Setup
1. Install your preferred JetBrains IDE
2. Enable AI assistant plugins
3. Configure blueprint integration

### IDE-Specific Features

#### WebStorm
- **Node.js Integration**: Automatic Node project detection
- **TypeScript Support**: Enhanced TS development
- **Inspections**: JavaScript and TypeScript code analysis

#### PyCharm
- **Python Interpreter**: Virtual environment support
- **Virtual Env**: Automatic environment detection
- **Python Inspections**: Python-specific code analysis

#### IntelliJ IDEA
- **Multi-Language**: Support for Java, Kotlin, Scala
- **Plugin Ecosystem**: Rich extension support
- **Enterprise Features**: Advanced project management

### Universal JetBrains Configuration
- **MCP Integration**: Available in 2025.1+ versions
- **File Templates**: Blueprint-based code generation
- **Inspections**: AI-powered code quality checks

## Multi-Platform Workflows

### Cross-Platform Development
1. **Consistent Rules**: Same blueprints work across all platforms
2. **Priority Management**: Platform-specific priority optimization
3. **Context Sharing**: Shared project context across tools

### Team Workflows
1. **Standardized Configuration**: Team-wide blueprint adoption
2. **Platform Flexibility**: Team members can use preferred tools
3. **Consistent Guidance**: Same AI behavior across different platforms

### Migration Between Platforms
1. **Zero Lock-in**: Easy switching between AI assistants
2. **Configuration Portability**: Rules work across platforms
3. **Gradual Adoption**: Mix and match platforms as needed

## Troubleshooting

### Common Issues

#### Blueprint Not Loading
- **Check Path**: Verify `.ai/rules/` directory structure
- **Validate Schema**: Ensure blueprint follows AI Context Schema v2.1.0
- **Platform Compatibility**: Confirm platform is marked as compatible

#### Performance Issues
- **Character Limits**: Respect platform-specific limits (Windsurf: 6000 chars)
- **Priority Settings**: Use appropriate priority levels
- **Rule Selection**: Activate only necessary blueprints

#### MCP Integration Problems
- **Server Configuration**: Verify MCP servers are properly configured
- **Compatibility**: Check platform MCP support status
- **Permissions**: Ensure proper MCP permissions

### Platform-Specific Troubleshooting

#### Claude Code
- **Memory Files**: Check CLAUDE.md syntax
- **Tool Permissions**: Verify allowed tools configuration
- **Command Registration**: Ensure slash commands are properly defined

#### Cursor
- **Auto-Attachment**: Verify glob patterns match your files
- **Priority Conflicts**: Check for conflicting rule priorities
- **File Types**: Ensure file type arrays are correctly specified

#### JetBrains IDEs
- **Plugin Version**: Update to latest AI assistant plugins
- **Project Structure**: Verify IDE recognizes project type
- **Inspection Configuration**: Check inspection settings

## Advanced Configuration

### Custom Platform Definitions
For platforms not explicitly supported, use the generic platform fallback:

```yaml
platforms:
  your-custom-platform:
    compatible: true
    notes: "Configuration notes for your platform"
```

### Blueprint Relationship Management
Leverage relationship fields for complex setups:

```yaml
requires: ["typescript-base"]  # Hard dependencies
suggests: ["testing-patterns"] # Recommended additions
conflicts: ["vue-patterns"]    # Incompatible blueprints
supersedes: ["legacy-rules"]   # Replaced blueprints
```

### Schema Version Migration
Track migration progress with schema versioning:

```yaml
schemaVersion: "2.1"  # AI Context Schema v2.1.0 compliant
```

This ensures future compatibility and enables systematic upgrades across your development environment.

## Getting Help

- **Documentation**: Comprehensive guides in `.ai/docs/`
- **Examples**: Sample configurations in `.ai/templates/`
- **Community**: GitHub Discussions for community support
- **Issues**: GitHub Issues for bug reports and feature requests

The VDK Blueprints platform integration system provides unprecedented flexibility while maintaining consistency across your entire AI-powered development workflow.