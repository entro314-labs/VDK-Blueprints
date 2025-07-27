---
id: "deploy"
name: "Kubernetes Deployment Assistant"
description: "Automated deployment of containerized applications to Kubernetes with CI/CD integration and security best practices"
target: "claude-code"
commandType: "custom-slash"
version: "1.0.0"
scope: "project"

# === Claude Code Specific Configuration ===
claudeCode:
  slashCommand: "/deploy"
  arguments:
    supports: true
    placeholder: "$ARGUMENTS"
    examples: ["auth-service --to staging", "--rollback v1.2.3", "--helm --dry-run"]
  fileReferences:
    supports: true
    autoInclude: ["CLAUDE.md", "Dockerfile", "k8s/*.yaml", "Chart.yaml"]
  bashCommands:
    supports: true
    commands: ["kubectl", "helm", "docker", "git", "kustomize"]
  mcpIntegration:
    requiredServers: []
    optionalServers: ["kubernetes", "github"]
  memoryFiles: ["CLAUDE.md"]

# === Permissions ===
permissions:
  allowedTools: ["Read", "Write", "Bash(kubectl:*)", "Bash(helm:*)", "Bash(docker:*)", "Bash(git:*)"]
  requiredApproval: true

# === Examples ===
examples:
  - usage: "/deploy auth-service --to staging"
    description: "Deploy authentication service to staging environment with Kustomize"
    context: "Testing new features before production release"
    expectedOutcome: "Service deployed with health checks, monitoring, and rollback capability"
  - usage: "/deploy web-app --to production --helm --tag v2.1.0"
    description: "Production deployment using Helm with specific version tag"
    context: "Scheduled production release with validated changes"
    expectedOutcome: "Zero-downtime deployment with automated health validation"
  - usage: "/deploy --rollback v1.2.3 --to production"
    description: "Emergency rollback to previous stable version"
    context: "Critical issue detected in current production version"
    expectedOutcome: "Fast rollback with service restoration and incident logging"

# === Installation ===
installation:
  dependencies: ["kubectl", "helm", "docker", "kustomize"]
  setupSteps:
    - "Configure kubectl with target cluster access"
    - "Install Helm 3.x for chart-based deployments"
    - "Set up container registry authentication"
    - "Configure RBAC permissions for deployment"

# === Metadata ===
category: "operations"
tags: ["deployment", "kubernetes", "helm", "kustomize", "ci-cd"]
author: "VDK"
lastUpdated: "2025-01-27"
compatibilityNotes: "Requires Kubernetes 1.20+, Helm 3.x, configured kubectl context"
---

# Kubernetes Deployment Assistant

## Purpose

Automated deployment of containerized applications to Kubernetes clusters with comprehensive CI/CD integration, security best practices, and operational excellence. Handles everything from manifest generation to production rollouts with zero-downtime strategies.

### What it does:

1. **Environment Analysis**: Locates `k8s/`, `infra/`, or `deploy/` directories and identifies existing deployment patterns (Kustomize, Helm)
2. **Manifest Generation/Update**: Creates or updates Kubernetes manifests (Deployment, Service, Ingress, HPA)
3. **Image Tag Management**: Updates image tags to latest version (from `git rev-parse --short HEAD`)
4. **Secret Handling**: Creates templates for Kubernetes secrets with secure population commands
5. **CI/CD Integration**: Generates GitHub Actions workflow steps for continuous deployment

### Supported Patterns:

- **Kustomize**: Uses `kustomization.yaml` files with environment overlays
- **Helm**: Detects `Chart.yaml` and uses Helm templating
- **Raw Manifests**: Creates standard Kubernetes YAML files

### Directory Structure Created:

```
k8s/
├── base/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── kustomization.yaml
├── overlays/
│   ├── staging/
│   │   ├── kustomization.yaml
│   │   └── env-patch.yaml
│   └── production/
│       ├── kustomization.yaml
│       └── env-patch.yaml
└── secrets/
    └── secret-template.yaml
```

### Generated Deployment Features:

- **Health Checks**: Readiness and liveness probes
- **Resource Management**: CPU/memory requests and limits
- **Security**: Non-root user, read-only filesystem, dropped capabilities
- **Observability**: Prometheus metrics annotations
- **Scaling**: Horizontal Pod Autoscaler configuration

### Secret Management:

Creates secure secret templates with commands like:

```bash
kubectl create secret generic app-secrets \
  --from-literal=DATABASE_URL='postgres://...' \
  --from-literal=API_KEY='your-api-key' \
  --dry-run=client -o yaml | kubectl apply -f -
```

### CI/CD Integration:

Generates `.github/workflows/cd.yml` with:

- Automated builds on push to main
- Image building and pushing to registry
- Deployment to staging/production environments
- Rollback capabilities

## Examples

### Deploy to staging:

```
/deploy auth-service --to staging
```

### Deploy with custom image tag:

```
/deploy api-gateway --to production --tag v1.2.3
```

### Deploy with Helm:

```
/deploy web-app --to staging --helm
```

## Prerequisites

- Docker images available in registry
- kubectl configured for target cluster
- Appropriate RBAC permissions for deployment

## Environment Configuration

Supports these standard environments:

- `staging`: Lower resource limits, debug logging
- `production`: Production-ready configuration, monitoring enabled
- `development`: Local cluster, minimal resources

## Integration with Other Commands

- Use after `/containerize` to deploy the containerized application
- Combine with `/observe` for production monitoring
- Use with `/harden` for security-enhanced deployments
