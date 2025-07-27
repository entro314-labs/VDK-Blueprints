---
id: "dependencies"
name: "Dependencies Analysis & Management"
description: "Comprehensive dependency analysis, security audit, and management for multi-language projects"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/dependencies"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["audit", "update", "analyze", "cleanup"]
  fileReferences:
    supports: true
    autoInclude: ["package.json", "Cargo.toml", "go.mod", "pom.xml", "requirements.txt"]
  bashCommands:
    supports: true
    commands: ["npm audit", "cargo audit", "go mod graph", "mvn dependency:tree"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["github"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(npm:*)", "Bash(cargo:*)", "Bash(go:*)", "Bash(mvn:*)", "Bash(pip:*)", "WebSearch", "WebFetch"]
  requiredApproval: false

# === Examples ===
examples:
  - usage: "/dependencies audit"
    description: "Perform comprehensive security audit across all package managers"
    context: "Before deployment or monthly security review"
    expectedOutcome: "Detailed security report with vulnerability fixes"
  - usage: "/dependencies update"
    description: "Generate staged update plan with breaking change analysis"
    context: "Quarterly dependency maintenance"
    expectedOutcome: "Categorized update commands with rollback procedures"
  - usage: "/dependencies analyze"
    description: "Full dependency mapping, coupling analysis, and optimization suggestions"
    context: "Architecture review or performance optimization"
    expectedOutcome: "Dependency graph, risk matrix, and optimization roadmap"

# === Installation ===
installation:
  dependencies: []
  setupSteps:
    - "Ensure project has package manager files (package.json, Cargo.toml, etc.)"
    - "Install language-specific audit tools (npm audit, cargo audit, etc.)"

# === Metadata ===
category: "development"
tags: ["dependencies", "security", "maintenance", "optimization"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Supports Node.js, Rust, Go, Java, Python, Deno projects"
---

# Dependencies Analysis & Management

## Purpose

Comprehensive dependency management for multi-language projects covering security auditing, version management, coupling analysis, and optimization strategies. This command replaces the need for separate dependency and security tools by providing unified analysis across all package managers in your project.

## Claude Code Integration

### Slash Command Usage

```
/dependencies [action] [scope]
```

**Available Actions:**
- `audit` - Security vulnerability scanning
- `update` - Version management and updates  
- `analyze` - Dependency mapping and coupling analysis
- `cleanup` - Remove unused and optimize dependencies
- `report` - Generate comprehensive dependency report

### Multi-Language Detection

The command automatically detects and analyzes:

**Package Manager Files**: !`find . -name "package.json" -o -name "Cargo.toml" -o -name "go.mod" -o -name "pom.xml" -o -name "requirements.txt" -o -name "deno.json" | head -10`

**Project Structure**: !`ls -la | grep -E "\.(json|toml|xml|txt|lock)$"`

### Bash Integration

Executes package manager specific commands:
```bash
# Security audits
!npm audit --audit-level=moderate
!cargo audit
!go list -m all | nancy sleuth
!pip-audit

# Dependency trees  
!npm ls --depth=0
!cargo tree
!go mod graph
!mvn dependency:tree
```

## Usage Examples

### Security Audit Workflow
```
/dependencies audit
```

**Process:**
1. **Multi-language Detection**: Scans for all package manager files
2. **Vulnerability Assessment**: Runs security audits for each detected language
3. **Risk Prioritization**: Categories vulnerabilities by severity (Critical → High → Medium → Low)
4. **Fix Generation**: Provides specific update commands for each vulnerability
5. **SBOM Creation**: Generates Software Bill of Materials for compliance

**Expected Output:**
- Executive summary with risk score
- Categorized vulnerability list with CVE details
- Specific fix commands for each language
- Compliance report for audit requirements

### Update Management
```
/dependencies update
```

**Process:**
1. **Version Analysis**: !`npm outdated && cargo outdated && go list -u -m all`
2. **Breaking Change Detection**: Analyzes changelogs and release notes
3. **Staged Update Plan**: Groups updates by risk level
4. **Testing Strategy**: Generates test plan for each update batch
5. **Rollback Procedures**: Creates safe rollback commands

**Expected Output:**
```markdown
## Update Plan

### Phase 1: Security Patches (Low Risk)
- npm update lodash@4.17.21 (Security fix)
- cargo update serde@1.0.152 (Bug fixes)

### Phase 2: Minor Updates (Medium Risk)  
- npm update react@18.2.0 (New features, backward compatible)
- go get -u github.com/gin-gonic/gin@v1.9.1

### Phase 3: Major Updates (High Risk - Requires Testing)
- npm update webpack@5.0.0 (Breaking changes in config)
- cargo update tokio@1.25.0 (Async runtime changes)
```

### Dependency Analysis & Optimization
```
/dependencies analyze
```

**Advanced Analysis:**
1. **Dependency Graph Generation**: Creates visual dependency maps
2. **Coupling Assessment**: Identifies tightly coupled components
3. **Unused Detection**: Finds dependencies never imported
4. **Bundle Size Impact**: Calculates size impact for web projects
5. **Alternative Suggestions**: Recommends lighter alternatives

**Analysis Output:**
```markdown
## Dependency Health Report

### Risk Matrix
| Component | Dependents | Risk Level | Last Updated | Maintainer Status |
|-----------|------------|------------|--------------|-------------------|
| lodash    | 15         | HIGH       | 6 months ago | Active            |
| moment    | 3          | MEDIUM     | 1 year ago   | Maintenance Mode  |

### Optimization Opportunities
- **Replace moment.js → date-fns**: 67% bundle size reduction
- **Remove unused eslint plugins**: 12 packages, 45MB
- **Consolidate utility libraries**: 3 similar packages doing same work
```

### Cleanup & Optimization
```
/dependencies cleanup
```

**Cleanup Process:**
1. **Usage Scanning**: !`rg "import|require|use" -t typescript -t javascript -t rust -t go`
2. **Unused Detection**: Identifies never-imported packages
3. **Duplicate Functionality**: Finds packages with overlapping features
4. **Dev vs Prod**: Ensures dev dependencies aren't in production
5. **Safe Removal**: Generates removal commands with dependency checks

## Step-by-Step Implementation

### Phase 1: Discovery & Inventory
1. **Scan Project Structure**: Detect all package managers and dependency files
2. **Generate Inventory**: Create complete list of direct and transitive dependencies
3. **Baseline Metrics**: Establish current dependency count, size, and health scores

### Phase 2: Security Assessment  
1. **Vulnerability Scanning**: Run language-specific security audits
2. **License Compliance**: Check for license conflicts and copyleft requirements
3. **Maintenance Status**: Assess package maintenance activity and community health
4. **Risk Scoring**: Calculate composite risk scores for each dependency

### Phase 3: Analysis & Optimization
1. **Coupling Analysis**: Map interdependencies and identify tight coupling
2. **Usage Patterns**: Analyze actual import/usage patterns vs. declared dependencies
3. **Performance Impact**: Assess bundle size and runtime performance impact
4. **Alternative Research**: Research lighter or more maintained alternatives

### Phase 4: Action Planning
1. **Update Strategy**: Create phased update plan balancing security and stability
2. **Cleanup Plan**: Identify safe removals and consolidation opportunities  
3. **Testing Requirements**: Define testing strategy for each change
4. **Rollback Procedures**: Prepare safe rollback commands and git strategies

## Integration with Claude Code Features

### Memory Integration
- Automatically updates `CLAUDE.md` with dependency management practices
- Records project-specific dependency policies and exceptions
- Maintains history of major dependency decisions

### Permission Management
Uses scoped permissions for safe execution:
```json
{
  "permissions": {
    "allow": [
      "Read(package.json)", "Read(Cargo.toml)", "Read(go.mod)",
      "Bash(npm audit)", "Bash(cargo audit)", "Bash(go list:*)",
      "WebSearch(domain:npmjs.com)", "WebSearch(domain:crates.io)"
    ]
  }
}
```

### Hook Integration
**Pre-execution hooks:**
- Backup current dependency files
- Verify package manager availability

**Post-execution hooks:**
- Run tests after updates
- Update security documentation
- Commit dependency changes with conventional commit messages

## Error Handling & Recovery

### Common Issues
- **Package manager not found**: Gracefully skip unsupported languages
- **Network timeouts**: Retry with exponential backoff
- **Conflicting versions**: Provide resolution strategies
- **Lock file conflicts**: Generate resolution commands

### Safe Operation
- **Backup Strategy**: Creates snapshots before major changes
- **Rollback Commands**: Provides one-command rollback for each change
- **Dependency Validation**: Verifies dependency integrity after changes
- **Testing Integration**: Suggests testing commands for validation

## Advanced Features

### Multi-Project Analysis
For monorepos or multi-service projects:
```
/dependencies analyze --scope=monorepo
```

### Continuous Monitoring
Integration with CI/CD:
```bash
# Weekly dependency health check
/dependencies audit --format=json --ci-mode
```

### Custom Policies
Respect project-specific dependency policies:
```markdown
# In CLAUDE.md
## Dependency Policies
- Prefer Rust crates with >1M downloads
- Avoid JavaScript packages not updated in 6 months  
- Require security review for new cryptographic dependencies
```

## Related Commands

- `/security` - Deep security analysis beyond dependencies
- `/performance` - Performance impact analysis of dependencies
- `/update` - Execute the generated update plan
- `/audit` - Compliance and governance reporting

The goal is to maintain a healthy, secure, and optimized dependency ecosystem that supports development velocity while minimizing security and maintenance risks.