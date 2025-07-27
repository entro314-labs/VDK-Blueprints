---
id: "clean"
name: "Technical Debt Cleanup"
description: "Clean up technical debt including dead code, deprecated usage, duplication, and code quality improvements"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/clean"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["--dead-code", "--unused-imports", "--duplicates", "--deprecated", "--all"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "package.json", "go.mod", "Cargo.toml", ".eslintrc", ".gitignore"]
  bashCommands:
    supports: true
    commands: ["git", "find", "grep", "eslint", "go", "cargo", "mvn"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["linter", "formatter"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(*)", "Grep", "Glob", "Edit"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/clean --dead-code"
    description: "Remove dead code, unused functions, and unreachable code paths"
    context: "Preparing codebase for major release by removing accumulated dead code"
    expectedOutcome: "Identified and removed dead code with safety commits and test verification"
  - usage: "/clean --deprecated"
    description: "Update deprecated API usage and migrate to modern patterns"
    context: "Modernizing codebase after framework updates and library migrations"
    expectedOutcome: "All deprecated usage updated with compatibility maintained and tests passing"
  - usage: "/clean --all"
    description: "Comprehensive cleanup including all categories of technical debt"
    context: "Major technical debt cleanup before feature development sprint"
    expectedOutcome: "Complete codebase cleanup with organized commits and detailed cleanup report"

# === Installation ===
installation:
  dependencies: ["git", "language-specific linters"]
  setupSteps:
    - "Install code analysis tools (ESLint, golangci-lint, clippy, etc.)"
    - "Configure linting rules and formatting standards"
    - "Set up pre-commit hooks for code quality"

# === Metadata ===
category: "quality"
tags: ["cleanup", "technical-debt", "refactoring", "code-quality", "maintenance"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Supports JavaScript, TypeScript, Go, Rust, Java, and Python cleanup with automated safety checks"
---

# Technical Debt Cleanup

## Purpose

Clean up technical debt in $ARGUMENTS.

Steps:

1. Identify cleanup targets:
   - Scan for TODO, FIXME, HACK, XXX comments
   - Find commented-out code blocks
   - Locate unused imports and variables
   - Detect unreachable/dead code
   - Identify deprecated API usage
   - Find console.log/print debug statements

2. Code quality improvements:
   - Fix linting errors and warnings
   - Apply consistent code formatting
   - Standardize naming conventions
   - Convert var to let/const (JavaScript)
   - Update to modern syntax (arrow functions, destructuring)
   - Remove unnecessary type assertions

3. Remove dead code:
   - Delete commented-out code older than 3 months
   - Remove unused functions and methods
   - Clean up unreferenced files
   - Delete obsolete configuration
   - Remove feature flags for shipped features
   - Clean up A/B test code for completed experiments

4. Consolidate duplication:
   - Identify duplicate code blocks
   - Extract common functionality to utilities
   - Merge similar functions with parameters
   - Consolidate redundant type definitions
   - Unify error handling patterns

5. Update deprecated usage:
   - Replace deprecated library methods
   - Update to current API versions
   - Migrate from legacy patterns
   - Update outdated documentation references
   - Fix deprecated test patterns

6. File organization:
   - Remove empty files and directories
   - Organize imports (grouped and sorted)
   - Move files to appropriate directories
   - Update incorrect file extensions
   - Fix circular dependencies

7. Documentation cleanup:
   - Remove outdated comments
   - Update incorrect documentation
   - Add missing JSDoc/docstrings
   - Fix broken links in docs
   - Update example code

Safety measures:

- Create git commit before each cleanup type
- Run tests after each change
- Keep refactoring commits separate
- Document why code was removed
- Preserve git history for deleted files

Output:

- Summary of cleaned items by category
- Lines of code removed
- Performance impact (if any)
- Risk assessment for changes
- Follow-up tasks identified
