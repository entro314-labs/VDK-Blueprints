# VibeKit VDK AI Rules

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue.svg)](https://github.com/your-org/VibeKit-VDK-AI-rules)
[![Rules](https://img.shields.io/badge/Rules-109-green.svg)](#rule-categories)
[![Platforms](https://img.shields.io/badge/Platforms-4-orange.svg)](#supported-platforms)

> **Transform generic AI coding assistants into project-aware experts**

The VibeKit VDK AI Rules repository is the centralized knowledge base for structured AI development patterns, providing 109+ curated rules that work across multiple AI assistant platforms to deliver consistent, project-specific guidance.

## 🚀 Quick Start

### For Developers
```bash
# Clone the repository
git clone https://github.com/your-org/VibeKit-VDK-AI-rules.git

# Navigate to rules directory
cd VibeKit-VDK-AI-rules/.ai/rules

# Use with your AI assistant (see Platform Integration)
```

### For AI Assistants
- **Claude Code**: Add `.ai/rules/` to your memory configuration
- **Cursor**: Import rules to `.cursorrules` file  
- **Windsurf**: Load rules in workspace configuration
- **GitHub Copilot**: Configure rules in review settings

[📖 **Detailed Setup Guide**](.ai/docs/platform-integration.md)

## 🎯 What This Repository Provides

### 🧠 Intelligent Rule System
- **109+ curated rules** covering languages, frameworks, stacks, and tasks
- **Multi-platform compatibility** with Claude Code, Cursor, Windsurf, GitHub Copilot
- **Project-aware guidance** that understands your specific technology stack
- **Community-driven** with contribution workflows and templates

### 🏗️ Ecosystem Integration
This repository is part of the **VibeKit VDK three-tier architecture**:

```
┌─────────────────┐    ┌───────────────────┐    ┌─────────────────┐
│   VDK CLI       │◄──►│  Rules Repository │◄──►│   VDK Hub       │
│ (Local Engine)  │    │ (Knowledge Base)  │    │ (Web Platform)  │
└─────────────────┘    └───────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌───────────────────┐    ┌─────────────────┐
│   IDE Tools     │    │   Git Workflow    │    │   Team Mgmt     │
│   AI Assistants │    │   Version Control │    │   Analytics     │
│   Local Config  │    │   Community PRs   │    │   Collaboration │
└─────────────────┘    └───────────────────┘    └─────────────────┘
```

- **[VibeKit VDK CLI](https://github.com/your-org/VibeKit-VDK-CLI)**: Local analysis and rule generation engine
- **VibeKit VDK Rules** (this repo): Centralized knowledge base and templates
- **[VibeKit VDK Hub](https://hub.vibekit.dev)**: Web platform for collaboration and management

## 📂 Repository Structure

```
.ai/
├── rules/                         # 109 Universal AI Rules
│   ├── core/                      # 4 Fundamental AI behavior patterns
│   │   ├── 00-agent-behavior.mdc     # AI assistant persona & principles
│   │   ├── 01-code-quality.mdc       # Code quality guidelines
│   │   ├── 02-security-practices.mdc # Security best practices
│   │   └── 03-error-prevention.mdc   # Common error prevention
│   ├── languages/                 # 6 Programming language patterns
│   │   ├── typescript-modern.mdc     # Modern TypeScript patterns
│   │   ├── python3.mdc               # Python 3 best practices
│   │   ├── swift.mdc                 # Swift development guidelines
│   │   └── ...                       # Additional languages
│   ├── technologies/              # 26 Framework/tool patterns
│   │   ├── react19.mdc               # React 19 patterns
│   │   ├── nextjs.mdc                # Next.js guidelines
│   │   ├── supabase.mdc              # Supabase integration
│   │   └── ...                       # 23 more technologies
│   ├── stacks/                    # 6 Technology combinations
│   │   ├── nextjs-supabase.mdc       # Full-stack Next.js + Supabase
│   │   ├── react-native-mobile.mdc   # React Native mobile patterns
│   │   └── ...                       # Additional stacks
│   ├── tasks/                     # 54 Executable development tasks
│   │   ├── AI-Code-Review.mdc        # AI-powered code review
│   │   ├── Security-Audit.mdc        # Security audit workflows
│   │   └── ...                       # 52 more tasks
│   ├── assistants/                # 7 AI platform configurations
│   │   ├── claude.mdc                # Claude-specific optimizations
│   │   ├── cursor.mdc                # Cursor integration patterns
│   │   └── ...                       # 5 more platforms
│   └── tools/                     # 3 Development tools
├── commands/                      # Platform-specific implementations
│   ├── claude-code/               # Claude Code native commands
│   ├── cursor/                    # Cursor-specific implementations
│   ├── windsurf/                  # Windsurf workflows
│   └── github-copilot/            # GitHub Copilot integrations
├── schemas/                       # Validation schemas
├── templates/                     # Contribution templates
├── scripts/                       # Utility scripts
└── docs/                         # 📚 Comprehensive documentation
```

## 🎯 Rule Categories

| Category | Count | Description | Examples |
|----------|--------|-------------|----------|
| **Core** | 4 | Fundamental AI behavior patterns | Agent behavior, code quality, security |
| **Languages** | 6 | Programming language guidelines | TypeScript, Python, Swift, C++20 |
| **Technologies** | 26 | Framework and tool patterns | React 19, Next.js, Supabase, Tailwind |
| **Stacks** | 6 | Multi-technology combinations | Next.js + Supabase, React Native |
| **Tasks** | 54 | Executable development workflows | Code review, security audit, refactoring |
| **Assistants** | 7 | AI platform configurations | Claude, Cursor, Windsurf, Copilot |
| **Tools** | 3 | Development tool integrations | File operations, command execution |

## 🤖 Supported Platforms

### ✅ Production Ready

| Platform | Status | Features | Integration |
|----------|--------|----------|------------|
| **[Claude Code](https://claude.ai/code)** | ✅ Ready | Tool integration, memory management, slash commands | [Setup Guide](.ai/docs/platform-integration.md#claude-code) |
| **[Cursor](https://cursor.sh)** | ✅ Ready | Auto-completion, real-time assistance, file patterns | [Setup Guide](.ai/docs/platform-integration.md#cursor) |
| **[Windsurf](https://windsurf.sh)** | ✅ Ready | Memory optimization, workspace awareness | [Setup Guide](.ai/docs/platform-integration.md#windsurf) |
| **[GitHub Copilot](https://github.com/features/copilot)** | ✅ Ready | Code review, suggestions, priority system | [Setup Guide](.ai/docs/platform-integration.md#github-copilot) |

### 🔄 Platform Integration Features

- **Cross-Platform Compatibility**: Rules work consistently across all platforms
- **Platform-Specific Optimization**: Tailored instructions for each AI assistant
- **Automatic Rule Loading**: Seamless integration with minimal setup
- **Priority Management**: Smart rule activation based on context

## 📖 Documentation

### 📚 User Guides
- **[Platform Integration Guide](.ai/docs/platform-integration.md)** - Setup and configuration for each AI platform
- **[Migration Guide](.ai/docs/migration-guide.md)** - Upgrading from legacy versions

### 👨‍💻 Developer Guides  
- **[Contributing Guide](.ai/docs/CONTRIBUTING.md)** - How to contribute rules and improvements
- **[Rule Writing Guide](.ai/docs/rule-writing-guide.md)** - Comprehensive guide to writing effective rules

### 🔧 Technical References
- **[Schema Documentation](.ai/schemas/)** - Rule validation schemas and specifications
- **[Template Library](.ai/templates/)** - Standardized templates for contributions

## 🚀 Getting Started

### 1. Choose Your Integration Method

#### Option A: Direct Integration (Recommended)
```bash
# Clone repository
git clone https://github.com/your-org/VibeKit-VDK-AI-rules.git

# Add to your AI assistant
# - Claude Code: Add .ai/rules/ to CLAUDE.md
# - Cursor: Import to .cursorrules
# - Windsurf: Load in workspace
# - GitHub Copilot: Configure in settings
```

#### Option B: Via VibeKit VDK CLI (Advanced)
```bash
# Install CLI (coming soon)
npm install -g @vibekit/vdk-cli

# Generate project-specific rules
vdk analyze --project-path ./my-project

# Deploy to AI assistants
vdk deploy --platforms claude-code,cursor
```

#### Option C: Via VibeKit VDK Hub (Team Management)
Visit **[hub.vibekit.dev](https://hub.vibekit.dev)** for:
- Web-based rule generation
- Team collaboration features  
- Custom rule management
- Analytics and insights

### 2. Platform-Specific Setup

<details>
<summary><strong>Claude Code Setup</strong></summary>

Add to your `CLAUDE.md` file:
```markdown
# AI Rules Integration

Active rules from VibeKit VDK Rules repository:
- Core behaviors: .ai/rules/core/
- Language patterns: .ai/rules/languages/
- Technology guidelines: .ai/rules/technologies/
- Task workflows: .ai/rules/tasks/
```
</details>

<details>
<summary><strong>Cursor Setup</strong></summary>

Create or update your `.cursorrules` file:
```markdown
# VibeKit VDK AI Rules - Cursor Integration

## Core Development Principles
{Include content from .ai/rules/core/}

## Language-Specific Guidelines  
{Include content from .ai/rules/languages/ based on project}
```
</details>

<details>
<summary><strong>Windsurf Setup</strong></summary>

In your Windsurf workspace configuration:
```json
{
  "aiRules": {
    "source": ".ai/rules/",
    "categories": ["core", "languages", "technologies"],
    "memoryOptimization": true
  }
}
```
</details>

<details>
<summary><strong>GitHub Copilot Setup</strong></summary>

Configure in your GitHub Copilot settings:
```json
{
  "github.copilot.advanced": {
    "rules": ".ai/rules/",
    "priority": "high",
    "reviewIntegration": true
  }
}
```
</details>

## 🤝 Contributing

We welcome contributions from the community! Here's how to get involved:

### 🎯 Quick Contribution Guide

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-rule`
3. **Use our templates**: Copy from `.ai/templates/`
4. **Follow our standards**: See [Rule Writing Guide](.ai/docs/rule-writing-guide.md)
5. **Submit a pull request**

### 📝 Contribution Types

| Type | Description | Template |
|------|-------------|----------|
| **New Rule** | Add support for new technology/pattern | [Rule Template](.ai/templates/rule-template.mdc) |
| **Command** | Platform-specific implementation | [Command Template](.ai/templates/command-template.md) |
| **Documentation** | Improve guides and examples | [Contributing Guide](.ai/docs/CONTRIBUTING.md) |
| **Bug Fix** | Fix existing rule issues | Standard PR process |

### 🏆 Recognition

Contributors are recognized through:
- Rule metadata attribution
- Community showcase features  
- Release note acknowledgments
- GitHub contribution graphs

## 📊 Project Statistics

| Metric | Count | Status |
|--------|-------|--------|
| **Total Rules** | 109 | ✅ Active |
| **Supported Platforms** | 4 | ✅ Production |
| **Documentation Pages** | 750+ | ✅ Complete |
| **Schema Validation** | 100% | ✅ Passing |
| **Community Contributors** | Growing | 🚀 Join us! |

## 🗺️ Roadmap

### 🎯 Current Focus (Q1 2025)
- [x] **Multi-platform rule refactoring** - Complete ✅
- [x] **Enhanced documentation** - Complete ✅  
- [ ] **Community onboarding** - In Progress 🔄
- [ ] **CLI integration** - Planning 📋

### 🚀 Coming Soon (Q2 2025)
- [ ] **Advanced rule generation** - AI-assisted rule creation
- [ ] **Platform expansion** - Support for new AI assistants
- [ ] **Enterprise features** - Team management and analytics
- [ ] **Performance optimization** - Rule loading and execution improvements

### 🌟 Future Vision (Q3-Q4 2025)
- [ ] **Intelligent rule adaptation** - Context-aware rule selection
- [ ] **Cross-project learning** - Rule recommendations based on similar projects
- [ ] **Integration marketplace** - Third-party rule packages
- [ ] **Advanced analytics** - Usage insights and optimization recommendations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

| Project | Description | Repository |
|---------|-------------|------------|
| **VibeKit VDK CLI** | Local analysis and rule generation engine | [GitHub](https://github.com/your-org/VibeKit-VDK-CLI) |
| **VibeKit VDK Hub** | Web platform for collaboration and management | [Website](https://hub.vibekit.dev) |
| **Community Rules** | Community-contributed rule packages | [GitHub](https://github.com/your-org/VibeKit-Community-Rules) |

## 🆘 Support

### 📞 Getting Help

- **Documentation**: Start with our [comprehensive guides](.ai/docs/)
- **GitHub Issues**: [Report bugs or request features](https://github.com/your-org/VibeKit-VDK-AI-rules/issues)
- **GitHub Discussions**: [Community Q&A and ideas](https://github.com/your-org/VibeKit-VDK-AI-rules/discussions)
- **Discord Community**: [Join our Discord](https://discord.gg/vibekit) for real-time help

### 🐛 Reporting Issues

When reporting issues, please include:
- AI assistant platform and version
- Rule category and specific file
- Expected vs actual behavior
- Steps to reproduce
- Error messages or logs

### 💡 Suggesting Features

We love new ideas! Please:
- Search existing issues first
- Use our feature request template
- Describe the use case and benefit
- Consider contributing the implementation

## 🌟 Acknowledgments

Special thanks to:
- **Contributors**: Everyone who has contributed rules, documentation, and feedback
- **AI Assistant Teams**: Claude, Cursor, Windsurf, and GitHub Copilot teams for platform support
- **Open Source Community**: For inspiration and collaboration
- **Early Adopters**: For testing and feedback during development

---

<div align="center">

**[🚀 Get Started](.ai/docs/platform-integration.md)** • 
**[📚 Documentation](.ai/docs/)** • 
**[🤝 Contribute](.ai/docs/CONTRIBUTING.md)** • 
**[💬 Community](https://github.com/your-org/VibeKit-VDK-AI-rules/discussions)**

**Made with ❤️ by the VibeKit team and community**

</div>