---
id: "commit"
name: "Conventional Commit Generator"
description: "Generate conventional commit messages following conventionalcommits.org specification and create commits automatically"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/commit"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["--analyze", "--type feat", "--scope auth", "--message 'add OAuth support'"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", ".gitmessage", "CHANGELOG.md"]
  bashCommands:
    supports: true
    commands: ["git"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["git"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Bash(git:*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/commit --analyze"
    description: "Analyze staged changes and generate appropriate conventional commit message"
    context: "Automatically creating commit after implementing new feature or bug fix"
    expectedOutcome: "Conventional commit created with proper type, scope, and description based on code changes"
  - usage: "/commit --type feat --scope auth"
    description: "Create feature commit with specified scope for authentication changes"
    context: "Committing new authentication functionality with explicit categorization"
    expectedOutcome: "Commit with format 'feat(auth): [description]' following conventional commit standards"
  - usage: "/commit --breaking"
    description: "Generate commit message with breaking changes footer for API modifications"
    context: "Committing changes that break backwards compatibility"
    expectedOutcome: "Conventional commit with BREAKING CHANGE footer and proper semantic versioning implications"

# === Installation ===
installation:
  dependencies: ["git"]
  setupSteps:
    - "Configure git repository with staging area"
    - "Set up conventional commit templates (optional)"
    - "Install commitizen or similar tools (optional)"

# === Metadata ===
category: "workflow"
tags: ["git", "conventional-commits", "commit-messages", "version-control", "automation"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Works with any git repository and follows conventionalcommits.org v1.0.0 specification"
---

# Conventional Commit Generator

## Purpose

Generate a conventional commit message following https://www.conventionalcommits.org/en/v1.0.0/ specification and create the commit automatically.

Steps:

1. Analyze the current git changes using `git status` and `git diff --staged`
2. Determine the appropriate commit type (feat, fix, docs, style, refactor, test, chore, etc.)
3. Identify the scope if applicable (component, module, or area affected)
4. Write a concise description in imperative mood (50 chars or less)
5. Add a detailed body if the change is complex (wrap at 72 chars)
6. Include breaking change footer if applicable
7. Format as: `type(scope): description`
8. Create the commit with the generated message

Example formats:

- `feat(auth): add OAuth2 login support`
- `fix(api): resolve null pointer in user endpoint`
- `docs: update installation instructions`
- `chore(deps): bump lodash to 4.17.21`

Generate the most appropriate commit message based on the changes and commit automatically.
