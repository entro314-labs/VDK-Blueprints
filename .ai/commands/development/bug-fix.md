---
id: "bug-fix"
name: "Bug Fix Workflow"
description: "Systematic bug fixing workflow with issue tracking, branch management, and pull request creation"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/bug-fix"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["memory-leak", "authentication-error", "performance-issue", "ui-bug"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "package.json", "go.mod", "Cargo.toml"]
  bashCommands:
    supports: true
    commands: ["git", "gh", "npm", "cargo", "go", "mvn"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["github", "git"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(git:*,gh:*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/bug-fix memory-leak"
    description: "Investigate and fix a memory leak issue with proper tracking and testing"
    context: "Production service experiencing memory growth over time"
    expectedOutcome: "GitHub issue created, bug identified and fixed, tests added, PR submitted"
  - usage: "/bug-fix authentication-error"
    description: "Debug and resolve authentication system errors"
    context: "Users unable to log in or experiencing session issues"
    expectedOutcome: "Root cause analysis, fix implementation, security validation, documentation update"
  - usage: "/bug-fix performance-issue"
    description: "Investigate and optimize performance bottlenecks"
    context: "Application response times degraded beyond acceptable thresholds"
    expectedOutcome: "Performance profiling, bottleneck identification, optimization implementation, benchmarks"

# === Installation ===
installation:
  dependencies: ["git", "gh"]
  setupSteps:
    - "Configure git repository with proper remotes"
    - "Set up GitHub CLI authentication"
    - "Install language-specific debugging tools"

# === Metadata ===
category: "development"
tags: ["bug-fix", "debugging", "git", "github", "workflow"]
author: "VDK"
lastUpdated: "2025-07-05"
compatibilityNotes: "Works with GitHub repositories and requires gh CLI for issue/PR management"
---

# Bug Fix Workflow

## Purpose

Understand the bug: $ARG

## Before Starting:

- **GITHUB**: create a issue with the a short descriptive title: `gh issue create --title "Issue Title" --body "Issue description"`
- **GIT**: checkout a branch and switch to it. `git checkout -b bugfix/$ARG`

## Fix the Bug

## On Completion:

- **GIT**: commit with a descriptive message.
- **GIT**: push the branch to the remote repository.
- **GITHUB**: create a PR and link the issue: `gh pr create --title "PR Title" --body "PR description" --base main --head bugfix/$ARG`
