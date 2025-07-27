---
id: "validate"
name: "Code Validation Suite"
description: "Run comprehensive validation across the codebase including language-specific checks, infrastructure validation, and security scanning"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/validate"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["--lang go", "--security", "--all", "--fix", "--report"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "package.json", "go.mod", "Cargo.toml", "pom.xml", "build.gradle"]
  bashCommands:
    supports: true
    commands: ["mvn", "gradle", "go", "cargo", "deno", "tsc", "kubectl", "helm", "docker", "terraform"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["security-scanner", "linter"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(*)", "Grep", "Glob"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/validate --all"
    description: "Run all validation checks across the entire codebase"
    context: "Pre-commit validation to ensure code quality and security"
    expectedOutcome: "Comprehensive validation report with build status, security findings, and recommendations"
  - usage: "/validate --lang go --security"
    description: "Run Go-specific validation with security scanning"
    context: "Validating Go service before deployment"
    expectedOutcome: "Go compilation check, linting, security audit, and vulnerability scan results"
  - usage: "/validate --fix"
    description: "Run validation and automatically fix issues where possible"
    context: "Automated code cleanup and formatting"
    expectedOutcome: "Validation results with auto-fixed formatting, imports, and minor issues"

# === Installation ===
installation:
  dependencies: ["git", "language-specific tools"]
  setupSteps:
    - "Install language-specific linters and validators"
    - "Configure security scanning tools"
    - "Set up infrastructure validation tools"

# === Metadata ===
category: "quality"
tags: ["validation", "linting", "security", "infrastructure", "testing"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Supports Java, Go, Rust, TypeScript/JavaScript, Kubernetes, Docker, and Terraform validation"
---

# Code Validation Suite

## Purpose

Run comprehensive validation across the codebase:

1. **Language-Specific Validation:**

   **Java:**
   - `mvn clean compile` or `gradle build`
   - `mvn verify` for full validation
   - SpotBugs/PMD static analysis
   - Checkstyle for code conventions

   **Go:**
   - `go build ./...` for compilation
   - `go vet ./...` for suspicious constructs
   - `golangci-lint run` for comprehensive linting
   - `go mod verify` for dependencies

   **Rust:**
   - `cargo check` for fast validation
   - `cargo clippy` for linting
   - `cargo fmt --check` for formatting
   - `cargo audit` for security vulnerabilities

   **TypeScript/JavaScript:**
   - `deno check **/*.ts` or `tsc --noEmit`
   - ESLint/Prettier validation
   - Import resolution checks

2. **Infrastructure Validation:**
   - Kubernetes manifests: `kubectl --dry-run=client`
   - Helm charts: `helm lint`
   - Docker: `docker build --check`
   - Terraform: `terraform validate`

3. **Configuration Files:**
   - JSON/YAML syntax validation
   - Schema validation where applicable
   - Environment-specific config checks
   - Secret/credential scanning

4. **Build System Validation:**
   - Maven: `mvn validate`
   - Gradle: `gradle check`
   - Make: `make -n` for dry run
   - Bazel: `bazel build --nobuild`

5. **Testing Validation:**
   - Unit test compilation
   - Test coverage thresholds
   - Integration test setup
   - Mock/stub availability

6. **Security Validation:**
   - Dependency vulnerability scanning
   - SAST (Static Application Security Testing)
   - License compliance
   - Exposed secrets scan

7. **Documentation Validation:**
   - API documentation generation
   - README completeness
   - Code comment coverage
   - Changelog updates

8. **Generate Validation Report:**
   ```markdown
   # Validation Report

   Generated: [timestamp]
   Project Type: [Java/Go/Rust/K8s/Mixed]

   ## Build Status

   - Compilation: ✓/✗
   - Tests: ✓/✗
   - Linting: ✓/✗

   ## Issues by Severity

   ### Critical (Must Fix)

   - [Issue with file:line]

   ### Warnings (Should Fix)

   - [Issue with file:line]

   ### Info (Consider Fixing)

   - [Issue with file:line]

   ## Recommendations

   - [Specific actions to take]
   ```

Save report to: `/tmp/validation-report-[timestamp].md`

Run appropriate validations based on project type before commits, PRs, or deployments.
