# VibeKit VDK AI Rules

An open-source collection of AI context rules and task definitions.

## Overview

VibeKit VDK Rules is an open-source collection of AI context rules and task definitions designed to make your AI assistant project-aware. This repository provides a comprehensive set of rules, patterns, and guidelines for AI coding assistants.

The rules are designed to be compatible with the VibeKit VDK (Vibe Development Kit), the world's first Vibe Development Kit.

## Structure

The rules are organized in the `.ai/` directory and are structured to be comprehensive and extensible. They cover:

- Core agent behaviors
- Task-specific instructions
- Language and technology best practices
- Assistant-specific configurations
│   ├── Astro-Content-Stack.mdc
│   ├── Ecommerce-Stack.mdc
│   └── ReactNative-Mobile-Stack.mdc
├── technologies/          # Framework/library specific guides
│   ├── MCP-Servers.mdc    # Model Context Protocol guides
│   ├── Sequential-Thinking.mdc
│   ├── Memory-MCP.mdc
│   └── ShadcnUI-Integration.mdc
└── tools/                 # Development tools guides
    ├── File-Operations.mdc
    ├── Code-Search.mdc
    └── Command-Execution.mdc
```

## Key Features

- **Technology Stack Guides**: Complete guides for modern full-stack development combinations
- **Modern TypeScript Patterns**: Best practices for functional programming, type safety and maintainable code
- **MCP Server Integration**: Optimized patterns for working with Model Context Protocol servers
- **Enhanced AI Code Generation**: Specific guidelines to improve AI-generated code quality
- **Tool-Specific Rules**: Best practices for file operations, code search and command execution
- **Cross-Framework Consistency**: Maintain consistent patterns across different frameworks and libraries
- **Consistent AI assistance** across your entire development workflow
- **Task-specific guidance** for different development activities
- **Project-specific context** for more relevant suggestions
- **Error prevention** through common mistake documentation
- **Reduced repetition** of instructions to AI tools

## Installation

### Option 1: Interactive Setup with VDK CLI (Recommended)

The VibeKit VDK CLI provides an interactive setup wizard to configure these rules for your project automatically.

*Note: The VDK CLI is a separate tool that consumes the rules from this repository. The following commands assume you have the VDK CLI installed.*

1. Run the setup wizard from your project's root directory:

```bash
npx @vibekit/vdk-cli init
```

2. Follow the interactive prompts to configure the rules for your project. The wizard will automatically create the appropriate directory structure and copy the relevant rule files.

### Option 2: Manual Installation

1. Clone this repository into your project's rule directory (e.g., `.cursor` for Cursor users):

```bash
git clone https://github.com/idominikosgr/VibeKit-VDK-AI-rules.git .cursor
```

2. Customize the project-specific files:

- Edit `.cursor/rules/01-project-context.mdc` with your project details
- Modify `.cursor/rules/02-common-errors.mdc` with project-specific anti-patterns
- Update `.cursor/rules/03-mcp-configuration.mdc` with your MCP server configuration

## Usage

### For AI Assistant Integration

These rules are designed to be used by AI assistants that can read and apply context from local files. The VibeKit VDK CLI is the primary tool for this, but they can also be used with other assistants.

For example, with Cursor, you can place these rules in the `.cursor` directory at the root of your project.

### For GitHub Copilot Users

While Copilot doesn't directly support loading external rules, you can still benefit by:

1. Keeping the rules visible in your workspace
2. Referencing specific rule files in your prompts

```bash
vdk deploy
```

## Contributing

We welcome contributions to the VDK Rules collection. Please see `CONTRIBUTING.md` for guidelines on how to submit new rules or improve existing ones.

## License

This project is licensed under the MIT License.

---

**Official Repository:** [https://github.com/idominikosgr/VibeKit-VDK-AI-rules](https://github.com/idominikosgr/VibeKit-VDK-AI-rules)

© 2025 VibeKit