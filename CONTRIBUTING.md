# Contributing to VDK Blueprints

Thank you for your interest in contributing to VDK Blueprints! This project thrives on community contributions and we welcome your help in making AI coding assistants more intelligent and project-aware.

## 🚀 Quick Start

### Prerequisites
- Git installed on your system
- Basic understanding of AI coding assistants (Claude Code, Cursor, Windsurf, or GitHub Copilot)
- Familiarity with Markdown and YAML
- Experience with at least one supported technology stack

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/your-username/VDK-Blueprints.git
cd VDK-Blueprints

# Create a feature branch
git checkout -b feature/your-contribution-name

# Explore the project structure
ls -la .ai/rules/
```

## 📝 Types of Contributions

We welcome several types of contributions:

### 1. New AI Rules/Blueprints
Add support for new technologies, frameworks, or development patterns.

**Examples:**
- New framework support (e.g., Svelte 6, Angular 18)
- Programming language patterns (e.g., Rust, Go)
- Development workflows (e.g., AI-assisted testing, deployment automation)

### 2. Rule Improvements
Enhance existing rules with better patterns, examples, or platform optimizations.

**Examples:**
- Adding code examples to existing rules
- Improving platform compatibility
- Optimizing for memory constraints

### 3. Platform Support
Add or improve support for AI assistant platforms.

**Examples:**
- New AI assistant integration
- Platform-specific optimizations
- Tool integration improvements

### 4. Documentation
Improve guides, examples, and reference materials.

**Examples:**
- Tutorial improvements
- New example projects
- API documentation enhancements

### 5. Bug Fixes
Fix issues with existing rules or documentation.

**Examples:**
- Correcting rule metadata
- Fixing broken examples
- Resolving platform compatibility issues

## 🛠️ Development Workflow

### 1. Before You Start
- Search [existing issues](https://github.com/your-org/VDK-Blueprints/issues) to avoid duplicates
- Check the [roadmap](https://github.com/your-org/VDK-Blueprints/projects) for planned features
- Join our [Discord community](https://discord.gg/vibekit) to discuss your ideas

### 2. Creating New Rules

#### Use the Rule Template
```bash
# Copy the template
cp .ai/templates/rule-template.mdc .ai/rules/technologies/your-technology.mdc

# Edit the metadata and content
# See the development guide for detailed instructions
```

#### Rule Structure
Every rule must include:

```yaml
---
# === Core Identification ===
id: "unique-rule-id"
title: "Human Readable Title"
description: "Brief description of what this rule does"
version: "1.0.0"
lastUpdated: "2025-07-25"

# === Categorization ===
category: "technology"  # core|languages|technologies|stacks|tasks|assistants|tools
complexity: "medium"    # simple|medium|complex
scope: "project"        # system|project|component|file
audience: "developer"   # developer|team-lead|architect
maturity: "stable"      # experimental|beta|stable|deprecated

# === Platform Compatibility ===
platforms:
  claude-code:
    compatible: true
    memory: true
    allowedTools: ["Read", "Write", "Edit"]
  cursor:
    compatible: true
    globs: ["**/*.tsx", "**/*.jsx"]
    priority: "high"
  # ... other platforms

# === Dependencies & Relationships ===
requires: []            # Required rules
suggests: []            # Recommended rules
conflicts: []           # Conflicting rules
---

# Rule Content in Markdown
```

#### Rule Content Guidelines
- **Be Specific**: Provide clear, actionable guidance
- **Include Examples**: Show real code patterns
- **Consider Context**: Explain when to apply the rule
- **Test Thoroughly**: Verify with target AI assistants

### 3. Testing Your Changes

#### Validate Rule Schema
```bash
# Validate single rule (if validation script exists)
./scripts/validate-rule.py .ai/rules/technologies/your-rule.mdc

# Manual validation
# Check YAML frontmatter syntax
# Verify all required fields are present
# Test with AI assistants
```

#### Test with AI Assistants
1. **Claude Code**: Add rule to CLAUDE.md and test behavior
2. **Cursor**: Add to .cursorrules and verify auto-activation
3. **Windsurf**: Test memory optimization
4. **GitHub Copilot**: Verify review integration

### 4. Submitting Your Contribution

#### Commit Guidelines
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Examples
git commit -m "feat: add Vue 3 development patterns rule"
git commit -m "fix: correct TypeScript rule metadata"
git commit -m "docs: improve React integration examples"
git commit -m "refactor: optimize rule for Windsurf memory constraints"
```

#### Pull Request Process
1. **Create descriptive PR title and description**
2. **Use the PR template** (auto-populated)
3. **Link related issues** using keywords (e.g., "Closes #123")
4. **Request review** from maintainers
5. **Address feedback** promptly and professionally

## 📋 Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of the changes and their purpose.

## Type of Change
- [ ] New rule/blueprint
- [ ] Rule enhancement/improvement
- [ ] Platform support addition
- [ ] Documentation update
- [ ] Bug fix
- [ ] Other (please describe)

## Rule Details (if applicable)
- **Category**: technology/language/stack/task/core/assistant/tool
- **Target Technology**: React 19/TypeScript/Next.js/etc.
- **Complexity**: simple/medium/complex
- **Platforms Tested**: Claude Code, Cursor, Windsurf, GitHub Copilot

## Testing Checklist
- [ ] Rule metadata validates against schema
- [ ] Tested with Claude Code
- [ ] Tested with Cursor
- [ ] Tested with Windsurf (if applicable)
- [ ] Tested with GitHub Copilot (if applicable)
- [ ] No conflicts with existing rules
- [ ] Examples compile and work correctly
- [ ] Documentation is clear and helpful

## Breaking Changes
- [ ] This change introduces breaking changes
- [ ] Migration guide included (if applicable)

## Additional Notes
Any additional context, implementation details, or notes for reviewers.
```

## 🎯 Rule Writing Best Practices

### Content Guidelines

#### ✅ Do
- Use clear, concise language
- Provide practical, tested examples
- Include context about when to apply patterns
- Consider multiple skill levels
- Test across target platforms
- Follow established patterns in similar rules

#### ❌ Don't
- Include untested code examples
- Make assumptions about user knowledge
- Conflict with existing rules without justification
- Use platform-specific syntax in universal sections
- Include deprecated patterns without migration guidance

### Metadata Best Practices

#### Platform Compatibility
```yaml
platforms:
  claude-code:
    compatible: true
    memory: true                    # Load into memory
    allowedTools: ["Read", "Write"] # Specific tools
  cursor:
    compatible: true
    globs: ["**/*.tsx"]            # Relevant file patterns
    priority: "high"               # Activation priority
```

#### Dependencies
```yaml
requires: ["typescript-modern"]     # Must have these rules
suggests: ["react19", "tailwind4"]  # Works well with these
conflicts: ["vue3"]                 # Cannot coexist
```

### Code Examples
```typescript
// ✅ Good: Clear, focused example
const UserProfile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return user ? <UserCard user={user} /> : <LoadingSpinner />;
};

// ❌ Avoid: Overly complex or unrealistic examples
const ComplexComponent = ({ data, config, handlers, ...props }) => {
  // 50+ lines of complex logic that doesn't clearly demonstrate the pattern
};
```

## 🔍 Code Review Process

### Review Criteria
- **Correctness**: Rule guidance is accurate and helpful
- **Completeness**: All required metadata is present
- **Clarity**: Examples and descriptions are clear
- **Compatibility**: Works across specified platforms
- **Performance**: Optimized for platform constraints
- **Consistency**: Follows project conventions

### Review Timeline
- **Initial Review**: Within 48 hours
- **Feedback Response**: Please respond within 7 days
- **Final Review**: Within 24 hours of addressing feedback
- **Merge**: Approved PRs are merged promptly

## 📚 Resources

### Documentation
- **[Development Guide](wikidocs/development-guide/)** - Comprehensive contributing guide
- **[API Reference](wikidocs/api-reference/)** - Schema and metadata documentation
- **[Examples](wikidocs/examples/)** - Real-world usage examples
- **[Rules Reference](wikidocs/rules-reference/)** - Complete rule catalog

### Templates
- **[Rule Template](.ai/templates/rule-template.mdc)** - Standard rule structure
- **[Platform Template](.ai/templates/platform-template.json)** - Platform configuration
- **[Command Template](.ai/templates/command-template.md)** - Custom command structure

### Community
- **[GitHub Discussions](https://github.com/your-org/VDK-Blueprints/discussions)** - Ideas and Q&A
- **[Discord Community](https://discord.gg/vibekit)** - Real-time chat
- **[Issue Tracker](https://github.com/your-org/VDK-Blueprints/issues)** - Bug reports and feature requests

## 🏆 Recognition

Contributors are recognized through:
- **Rule Attribution**: Your name in rule metadata
- **Contributors List**: Featured in README.md
- **Release Notes**: Acknowledgment in release announcements
- **Community Showcase**: Featured contributions highlighted
- **GitHub Achievements**: Contribution graphs and achievements

## 📞 Getting Help

### Before Asking for Help
1. Check the [documentation](wikidocs/)
2. Search [existing issues and discussions](https://github.com/your-org/VDK-Blueprints/issues)
3. Review similar rules for patterns
4. Test your changes thoroughly

### Where to Get Help
- **GitHub Discussions**: For general questions and ideas
- **GitHub Issues**: For specific bugs or feature requests
- **Discord**: For real-time community support
- **Email**: [maintainers@vdk.tools](mailto:maintainers@vdk.tools) for private concerns

## 📜 Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards and help create a welcoming environment for all contributors.

## 📄 License

By contributing to VDK Blueprints, you agree that your contributions will be licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Thank you for contributing to VDK Blueprints! Your efforts help make AI coding assistants more intelligent and useful for developers worldwide. 🎉