---
id: "tdd"
name: "Test-Driven Development Setup"
description: "Set up test-driven development workflow with language-specific testing frameworks and TDD best practices"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/tdd"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["--lang go", "--feature auth", "--watch", "--coverage", "--integration"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "package.json", "go.mod", "Cargo.toml", "pom.xml", "build.gradle"]
  bashCommands:
    supports: true
    commands: ["go", "cargo", "mvn", "gradle", "deno", "npm", "git"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["test-runner", "coverage-reporter"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/tdd --lang go --feature auth"
    description: "Set up TDD workflow for Go authentication feature with table-driven tests"
    context: "Implementing user authentication system using test-first approach"
    expectedOutcome: "Test files, skeleton implementation, watch mode, and Red-Green-Refactor cycle setup"
  - usage: "/tdd --lang rust --watch --coverage"
    description: "Configure Rust TDD environment with continuous testing and coverage reporting"
    context: "Building Rust library with comprehensive test coverage tracking"
    expectedOutcome: "Cargo test configuration, watch mode, coverage reports, and TDD workflow"
  - usage: "/tdd --integration --feature api"
    description: "Set up integration tests for API endpoints using TDD methodology"
    context: "Building REST API with test-driven integration testing"
    expectedOutcome: "Integration test suite, mock services, test database, and API testing framework"

# === Installation ===
installation:
  dependencies: ["language-specific test runners", "watch tools", "coverage tools"]
  setupSteps:
    - "Install testing frameworks and assertion libraries"
    - "Configure test runners and watch mode tools"
    - "Set up coverage reporting and CI integration"

# === Metadata ===
category: "quality"
tags: ["tdd", "testing", "test-driven-development", "unit-tests", "coverage"]
author: "VDK"
lastUpdated: "2025-07-05"
compatibilityNotes: "Supports Java (JUnit/TestNG), Go (testing), Rust (cargo test), TypeScript (Deno.test), and JavaScript testing frameworks"
---

# Test-Driven Development Setup

## Purpose

Set up test-driven development workflow for $ARGUMENTS:

1. Analyze requirements and determine the project language/framework
2. Create appropriate test file based on the language:
   - **Java**: Test class with JUnit/TestNG annotations
   - **Go**: `*_test.go` file with testing package
   - **Rust**: Test module with `#[cfg(test)]`
   - **TypeScript/Deno**: `.test.ts` with Deno.test()

3. Write comprehensive tests following language conventions:
   - **Java**: `@Test` methods with descriptive names
   - **Go**: `Test*` functions with table-driven tests
   - **Rust**: `#[test]` functions with assertions
   - **TypeScript**: Deno.test() with clear descriptions

4. Verify tests fail meaningfully (Red phase)
5. Create skeleton implementation that compiles but fails tests
6. Implement minimum code to pass tests (Green phase)
7. Refactor while keeping tests passing (Refactor phase)

## Language-Specific Test Commands:

**Java (Maven/Gradle):**

```bash
# Maven
mvn test -Dtest=SpecificTest#methodName
mvn test -Dtest=SpecificTest

# Gradle
./gradlew test --tests "SpecificTest.methodName"
./gradlew test --continuous  # Watch mode
```

**Go:**

```bash
go test -run TestSpecificFunction
go test -v ./...
# Watch mode with external tool
reflex -r '\.go$' go test -v ./...
```

**Rust:**

```bash
cargo test test_name
cargo test --lib
cargo watch -x test  # With cargo-watch
```

**TypeScript/Deno:**

```bash
deno test --filter "test name"
deno test --watch
```

## Complex Feature Setup:

```bash
# Create parallel worktrees for test/implementation
git worktree add ../$PROJECT-tests-$FEATURE tests-$FEATURE
git worktree add ../$PROJECT-impl-$FEATURE impl-$FEATURE
```

## TDD Best Practices:

- Write tests before implementation
- One assertion per test when possible
- Use descriptive test names that document behavior
- Test edge cases and error conditions
- Mock external dependencies appropriately
- Keep tests fast and independent
- Follow AAA pattern: Arrange, Act, Assert

What language/framework are we using for $ARGUMENTS, and what specific behavior should we test?
