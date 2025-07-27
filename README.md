# VDK Blueprints

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue.svg)](https://github.com/your-org/VDK-Blueprints)
[![Blueprints](https://img.shields.io/badge/Blueprints-109-green.svg)](#Blueprint-categories)
[![Platforms](https://img.shields.io/badge/Platforms-4-orange.svg)](#supported-platforms)

> **Transform generic AI coding assistants into project-aware experts**

The VDK Blueprints repository is the centralized knowledge base for structured AI development patterns, providing 109+ curated Blueprints that work across multiple AI assistant platforms to deliver consistent, project-specific guidance.

## 🚀 Quick Start

### For Developers
```bash
# Clone the repository
git clone https://github.com/your-org/VDK-Blueprints.git

# Navigate to Blueprints directory
cd VDK-Blueprints/.ai/rules

# Use with your AI assistant (see Platform Integration)
```

### For AI Assistants
- **Claude Code**: Add `.ai/rules/` to your memory configuration
- **Cursor**: Import rules to `.cursorrules` file
- **Windsurf**: Load rules in workspace configuration
- **GitHub Copilot**: Configure rules in review settings

[📖 **Detailed Setup Guide**](.ai/docs/platform-integration.md)

## 🎯 What This Repository Provides

### 🧠 Intelligent Blueprint System
- **109+ curated Blueprints** covering languages, frameworks, stacks, and tasks
- **Multi-platform compatibility** with Claude Code, Cursor, Windsurf, GitHub Copilot
- **Project-aware guidance** that understands your specific technology stack
- **Community-driven** with contribution workflows and templates

### 🏗️ Ecosystem Integration
This repository is part of the **VDK three-tier architecture**:

```
┌─────────────────┐    ┌───────────────────┐    ┌─────────────────┐
│   VDK CLI       │◄──►│  Blueprints Repository │◄──►│   VDK Hub       │
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

- **[VDK CLI](https://github.com/your-org/VDK-CLI)**: Local analysis and Blueprint generation engine
- **VDK Blueprints** (this repo): Centralized knowledge base and templates
- **[VDK Hub](https://vdk.tools)**: Web platform for collaboration and management

## 📂 Repository Structure

```
.ai/
├── rules/                         # 109 Universal AI Blueprints
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

## 🎯 Blueprint Categories

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

- **Cross-Platform Compatibility**: Blueprints work consistently across all platforms
- **Platform-Specific Optimization**: Tailored instructions for each AI assistant
- **Automatic Blueprint Loading**: Seamless integration with minimal setup
- **Priority Management**: Smart Blueprint activation based on context

## 📖 Documentation

### 📚 User Guides
- **[Platform Integration Guide](.ai/docs/platform-integration.md)** - Setup and configuration for each AI platform
- **[Migration Guide](.ai/docs/migration-guide.md)** - Upgrading from legacy versions

### 👨‍💻 Developer Guides
- **[Contributing Guide](.ai/docs/CONTRIBUTING.md)** - How to contribute Blueprints and improvements
- **[Blueprint Writing Guide](.ai/docs/Blueprint-writing-guide.md)** - Comprehensive guide to writing effective Blueprints

### 🔧 Technical References
- **[Schema Documentation](.ai/schemas/)** - Blueprint validation schemas and specifications
- **[Template Library](.ai/templates/)** - Standardized templates for contributions

## 🚀 Getting Started

### 1. Choose Your Integration Method

#### Option A: Direct Integration (Recommended)
```bash
# Clone repository
git clone https://github.com/your-org/VDK-Blueprints.git

# Add to your AI assistant
# - Claude Code: Add .ai/rules/ to CLAUDE.md
# - Cursor: Import to .cursorrules
# - Windsurf: Load in workspace
# - GitHub Copilot: Configure in settings
```

#### Option B: Via VDK CLI (Advanced)
```bash
# Install CLI (coming soon)
npm install -g @vdk-cli

# Generate project-specific Blueprints
vdk analyze --project-path ./my-project

# Deploy to AI assistants
vdk deploy --platforms claude-code,cursor
```

#### Option C: Via VDK Hub (Team Management)
Visit **[vdk.tools](https://vdk.tools)** for:
- Web-based Blueprint generation
- Team collaboration features
- Custom Blueprint management
- Analytics and insights

### 2. Platform-Specific Setup

<details>
<summary><strong>Claude Code Setup</strong></summary>

Add to your `CLAUDE.md` file:
```markdown
# AI Blueprints Integration

Active Blueprints from VDK Blueprints repository:
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
# VDK Blueprints - Cursor Integration

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
2. **Create a feature branch**: `git checkout -b feature/new-Blueprint`
3. **Use our templates**: Copy from `.ai/templates/`
4. **Follow our standards**: See [Blueprint Writing Guide](.ai/docs/Blueprint-writing-guide.md)
5. **Submit a pull request**

### 📝 Contribution Types

| Type | Description | Template |
|------|-------------|----------|
| **New Blueprint** | Add support for new technology/pattern | [Blueprint Template](.ai/templates/Blueprint-template.mdc) |
| **Command** | Platform-specific implementation | [Command Template](.ai/templates/command-template.md) |
| **Documentation** | Improve guides and examples | [Contributing Guide](.ai/docs/CONTRIBUTING.md) |
| **Bug Fix** | Fix existing Blueprint issues | Standard PR process |

### 🏆 Recognition

Contributors are recognized through:
- Blueprint metadata attribution
- Community showcase features
- Release note acknowledgments
- GitHub contribution graphs

## 📊 Project Statistics

| Metric | Count | Status |
|--------|-------|--------|
| **Total Blueprints** | 109 | ✅ Active |
| **Supported Platforms** | 4 | ✅ Production |
| **Documentation Pages** | 750+ | ✅ Complete |
| **Schema Validation** | 100% | ✅ Passing |
| **Community Contributors** | Growing | 🚀 Join us! |

## 🗺️ Roadmap

### 🎯 Current Focus (Q1 2025)
- [x] **Multi-platform Blueprint refactoring** - Complete ✅
- [x] **Enhanced documentation** - Complete ✅
- [ ] **Community onboarding** - In Progress 🔄
- [ ] **CLI integration** - Planning 📋

### 🚀 Coming Soon (Q2 2025)
- [ ] **Advanced Blueprint generation** - AI-assisted Blueprint creation
- [ ] **Platform expansion** - Support for new AI assistants
- [ ] **Enterprise features** - Team management and analytics
- [ ] **Performance optimization** - Blueprint loading and execution improvements

### 🌟 Future Vision (Q3-Q4 2025)
- [ ] **Intelligent Blueprint adaptation** - Context-aware Blueprint selection
- [ ] **Cross-project learning** - Blueprint recommendations based on similar projects
- [ ] **Integration marketplace** - Third-party Blueprint packages
- [ ] **Advanced analytics** - Usage insights and optimization recommendations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

| Project | Description | Repository |
|---------|-------------|------------|
| **VDK CLI** | Local analysis and Blueprint generation engine | [GitHub](https://github.com/your-org/VDK-CLI) |
| **VDK Hub** | Web platform for collaboration and management | [Website](https://vdk.tools) |
| **Community Blueprints** | Community-contributed Blueprint packages | [GitHub](https://github.com/your-org/VDK-Community-Blueprints) |

## 🆘 Support

### 📞 Getting Help

- **Documentation**: Start with our [comprehensive guides](.ai/docs/)
- **GitHub Issues**: [Report bugs or request features](https://github.com/your-org/VDK-Blueprints/issues)
- **GitHub Discussions**: [Community Q&A and ideas](https://github.com/your-org/VDK-Blueprints/discussions)
- **Discord Community**: [Join our Discord](https://discord.gg/vibekit) for real-time help

### 🐛 Reporting Issues

When reporting issues, please include:
- AI assistant platform and version
- Blueprint category and specific file
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
- **Contributors**: Everyone who has contributed Blueprints, documentation, and feedback
- **AI Assistant Teams**: Claude, Cursor, Windsurf, and GitHub Copilot teams for platform support
- **Open Source Community**: For inspiration and collaboration
- **Early Adopters**: For testing and feedback during development

---

<div align="center">

**[🚀 Get Started](.ai/docs/platform-integration.md)** •
**[📚 Documentation](.ai/docs/)** •
**[🤝 Contribute](.ai/docs/CONTRIBUTING.md)** •
**[💬 Community](https://github.com/your-org/VDK-Blueprints/discussions)**

**Made with ❤️ by the VDK team and community**

</div>