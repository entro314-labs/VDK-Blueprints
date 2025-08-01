---
id: "git-workflow"
name: "Git Workflow Helper"
description: "Manage Git workflows with best practices and common operations including branching strategies and commit conventions"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/git-workflow"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["--strategy gitflow", "--feature auth", "--hotfix", "--release", "--setup-hooks"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", ".git/config", ".gitignore", "package.json"]
  bashCommands:
    supports: true
    commands: ["git", "gh"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["git", "github"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(git:*,gh:*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/git-workflow --feature auth"
    description: "Set up Git workflow for developing authentication feature with proper branching"
    context: "Starting new feature development with collaborative Git workflow"
    expectedOutcome: "Feature branch created, workflow guidance, and commit message templates"
  - usage: "/git-workflow --strategy gitflow"
    description: "Configure Git Flow branching strategy with develop and release branches"
    context: "Setting up structured Git workflow for team collaboration"
    expectedOutcome: "Git Flow initialization, branch structure, and workflow documentation"
  - usage: "/git-workflow --setup-hooks"
    description: "Install Git hooks for linting, testing, and commit message validation"
    context: "Enforcing code quality and commit standards in team repository"
    expectedOutcome: "Pre-commit hooks, commit-msg validation, and automated quality checks"

# === Installation ===
installation:
  dependencies: ["git", "gh (optional)"]
  setupSteps:
    - "Configure git user settings and SSH keys"
    - "Set up repository remotes and branching strategy"
    - "Install optional Git hooks and quality tools"

# === Metadata ===
category: "workflow"
tags: ["git", "version-control", "branching", "collaboration", "workflow"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Works with any Git repository and supports GitHub/GitLab integration"
---

# Git Workflow Helper

## Purpose

Manage Git workflows with best practices and common operations.

This command helps you perform common Git operations following best practices for collaborative development.

## Usage

```
/git-workflow
```

## What this command does

1. **Guides through Git operations** with proper workflow
2. **Suggests best practices** for commits and branches
3. **Helps with conflict resolution** and merging
4. **Provides templates** for commit messages
5. **Manages branching strategies** (Git Flow, GitHub Flow)

## Common Workflows

### Feature Development
```bash
# Create and switch to feature branch
git checkout -b feature/user-authentication

# Work on your feature
# ... make changes ...

# Stage and commit changes
git add .
git commit -m "feat: add user authentication system

- Implement login/logout functionality
- Add password validation
- Create user session management
- Add authentication middleware"

# Push feature branch
git push -u origin feature/user-authentication

# Create pull request (via GitHub/GitLab interface)
```

### Hotfix Workflow
```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/security-patch

# Fix the issue
# ... make changes ...

# Commit the fix
git commit -m "fix: resolve security vulnerability in auth module

- Patch XSS vulnerability in login form
- Update input validation
- Add CSRF protection"

# Push and create urgent PR
git push -u origin hotfix/security-patch
```

### Sync with Remote
```bash
# Update main branch
git checkout main
git pull origin main

# Update feature branch with latest main
git checkout feature/your-feature
git rebase main
# OR
git merge main
```

## Commit Message Conventions

### Conventional Commits Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```bash
# Feature
git commit -m "feat(auth): add OAuth2 integration"

# Bug fix
git commit -m "fix(api): handle null response in user endpoint"

# Documentation
git commit -m "docs: update API documentation for v2.0"

# Breaking change
git commit -m "feat!: change API response format

BREAKING CHANGE: API responses now use 'data' wrapper"
```

## Branch Management

### Git Flow Strategy
```bash
# Main branches
main        # Production-ready code
develop     # Integration branch

# Supporting branches
feature/*   # New features
release/*   # Release preparation
hotfix/*    # Quick fixes to production
```

### GitHub Flow (Simplified)
```bash
# Only main branch + feature branches
main        # Production-ready code
feature/*   # All new work
```

## Conflict Resolution

### When Conflicts Occur
```bash
# Start merge/rebase
git merge feature-branch
# OR
git rebase main

# If conflicts occur, Git will list conflicted files
# Edit each file to resolve conflicts

# Mark conflicts as resolved
git add conflicted-file.js

# Continue the merge/rebase
git merge --continue
# OR
git rebase --continue
```

### Conflict Markers
```javascript
<<<<<<< HEAD
// Your current branch code
const user = getCurrentUser();
=======
// Incoming branch code
const user = getAuthenticatedUser();
>>>>>>> feature-branch
```

## Useful Git Commands

### Status and Information
```bash
git status                    # Check working directory status
git log --oneline            # View commit history
git branch -a                # List all branches
git remote -v                # List remote repositories
```

### Undoing Changes
```bash
git checkout -- file.js     # Discard changes to file
git reset HEAD file.js       # Unstage file
git reset --soft HEAD~1     # Undo last commit (keep changes)
git reset --hard HEAD~1     # Undo last commit (discard changes)
```

### Stashing Work
```bash
git stash                    # Save current work
git stash pop               # Apply and remove latest stash
git stash list              # List all stashes
git stash apply stash@{1}   # Apply specific stash
```

## Best Practices

1. **Commit Often** - Make small, focused commits
2. **Write Clear Messages** - Use conventional commit format
3. **Test Before Committing** - Ensure code works
4. **Pull Before Push** - Keep history clean
5. **Use Branches** - Don't work directly on main
6. **Review Code** - Use pull requests for collaboration
7. **Keep History Clean** - Rebase feature branches when appropriate

## Git Hooks (Optional)

### Pre-commit Hook
```bash
#!/bin/sh
# .git/hooks/pre-commit

# Run linter
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Please fix errors before committing."
  exit 1
fi

# Run tests
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Please fix tests before committing."
  exit 1
fi
```

### Commit Message Hook
```bash
#!/bin/sh
# .git/hooks/commit-msg

# Check commit message format
if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}" "$1"; then
  echo "Invalid commit message format. Use conventional commits."
  exit 1
fi
```