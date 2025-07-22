# Rule Writing Guide

This comprehensive guide will help you write effective AI rules that work across multiple platforms while maintaining consistency and quality.

## Table of Contents

- [Understanding Rule Structure](#understanding-rule-structure)
- [Writing Universal Guidelines](#writing-universal-guidelines)
- [Platform-Specific Instructions](#platform-specific-instructions)
- [Code Examples and Anti-Patterns](#code-examples-and-anti-patterns)
- [Frontmatter Configuration](#frontmatter-configuration)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)

## Understanding Rule Structure

### Anatomy of a Rule

Every rule consists of four main components:

1. **Frontmatter**: Metadata and configuration
2. **Universal Guidelines**: Platform-agnostic best practices
3. **Platform-Specific Instructions**: Implementation details for each AI assistant
4. **Examples and Integration**: Code samples and usage patterns

### Rule Lifecycle

Rules follow this development lifecycle:

1. **Draft**: Initial concept and basic structure
2. **Review**: Community feedback and refinement
3. **Testing**: Validation across platforms
4. **Stable**: Production-ready and maintained
5. **Deprecated**: Marked for replacement or removal

## Writing Universal Guidelines

Universal guidelines form the core of your rule and should work across all platforms.

### Principles for Universal Guidelines

#### 1. Be Platform-Agnostic
```markdown
✅ Good: "Use descriptive variable names that clearly indicate purpose"
❌ Bad: "Configure Claude Code to suggest descriptive variable names"
```

#### 2. Use Active Voice
```markdown
✅ Good: "Create components using functional syntax"
❌ Bad: "Components should be created using functional syntax"
```

#### 3. Provide Context
```markdown
✅ Good: "Export components as named exports to enable tree-shaking and better IDE support"
❌ Bad: "Use named exports for components"
```

#### 4. Be Specific and Actionable
```markdown
✅ Good: "Place components in dedicated directories: `components/ComponentName/`"
❌ Bad: "Organize components properly"
```

### Structure for Universal Guidelines

```markdown
## Universal Guidelines

### Primary Principle
- State your main rule clearly
- Explain why it matters
- Provide context for when to apply it

### Implementation Details
- Break down the principle into actionable steps
- Include specific patterns and conventions
- Reference industry standards where applicable

### Quality Criteria
- Define what "good" looks like
- Provide measurable criteria
- Include validation approaches
```

### Writing Effective Guidelines

#### Focus on Outcomes
Instead of describing processes, focus on the desired end state:

```markdown
✅ Good: "Components should have single responsibilities and clear interfaces"
❌ Bad: "When creating components, think about separation of concerns"
```

#### Include Rationale
Always explain why a guideline exists:

```markdown
✅ Good: "Use TypeScript interfaces for props to catch type errors early and improve IDE support"
❌ Bad: "Use TypeScript interfaces for props"
```

#### Provide Boundaries
Help users understand when rules apply:

```markdown
✅ Good: "Use useCallback for functions passed to child components that have dependencies"
❌ Bad: "Use useCallback for better performance"
```

## Platform-Specific Instructions

Each platform has unique capabilities and constraints that require tailored instructions.

### Claude Code Instructions

Focus on tool usage and systematic processes:

```markdown
### Claude Code
When implementing this rule with Claude Code:

1. **Analysis Phase**
   - Use `Read` tool to examine existing patterns
   - Use `Grep` tool to find similar implementations
   - Identify project-specific conventions

2. **Implementation Phase**
   - Use `Write` tool for new files
   - Use `Edit` tool for modifications
   - Maintain consistency with discovered patterns

3. **Validation Phase**
   - Verify TypeScript compilation
   - Check import/export consistency
   - Ensure proper file structure
```

### Cursor Instructions

Focus on auto-completion and real-time assistance:

```markdown
### Cursor
Auto-triggers when working with React component files:

- Suggest proper prop typing when incomplete interfaces detected
- Recommend functional component patterns over class components
- Auto-complete common React hooks and patterns
- Validate export patterns match project conventions
```

### Windsurf Instructions

Use concise, memory-optimized format with XML tags:

```markdown
### Windsurf
<component-patterns>
- Create components using established project patterns
- Maintain consistency with existing component architecture
- Follow TypeScript strict mode requirements
- Include proper error boundaries for complex components
</component-patterns>
```

### GitHub Copilot Instructions

Focus on code review and validation:

```markdown
### GitHub Copilot
Focus on these aspects during code review:

- Proper TypeScript prop interface definitions
- Consistent naming conventions across components
- Appropriate use of React hooks and lifecycle patterns
- Export pattern consistency with project structure
```

## Code Examples and Anti-Patterns

### Writing Effective Examples

#### Complete and Functional
Always provide complete, working examples:

```typescript
// ✅ Good: Complete example with imports and types
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

#### Show Context
Include surrounding code that demonstrates integration:

```typescript
// ✅ Good: Shows how component fits in larger context
// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

// pages/HomePage.tsx
import { Button } from '../components/Button';

export const HomePage = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </div>
  );
};
```

### Anti-Pattern Documentation

#### Clear Violations
Show exactly what not to do:

```typescript
// ❌ Bad: Default exports make tree-shaking difficult
export default function Button(props: any) {
  // Missing type definitions
  return <button>{props.children}</button>;
}

// ❌ Bad: Mixing multiple components in one file
export const Button = () => { /* ... */ };
export const Link = () => { /* ... */ };
export const Input = () => { /* ... */ };
```

#### Explain the Problem
Always explain why something is an anti-pattern:

```markdown
### Why This Is Problematic

- **Tree-shaking**: Default exports prevent effective dead-code elimination
- **Type Safety**: `any` types disable TypeScript's benefits
- **Maintainability**: Multiple components per file reduces modularity
- **Testing**: Harder to test and mock individual components
```

#### Provide Alternatives
Show the correct approach alongside the anti-pattern:

```typescript
// ❌ Problematic: Inline event handlers
<Button onClick={() => setCount(count + 1)}>Increment</Button>

// ✅ Better: Named event handlers
const handleIncrement = useCallback(() => {
  setCount(prev => prev + 1);
}, []);

<Button onClick={handleIncrement}>Increment</Button>
```

## Frontmatter Configuration

### Required Fields

Every rule must include these essential fields:

```yaml
---
id: "unique-rule-identifier"           # kebab-case, no spaces
title: "Human Readable Title"          # Clear, descriptive
description: "What this rule does"     # 10-500 characters
version: "1.0.0"                      # Semantic versioning
category: "task"                      # See category list
platforms:                           # All platforms required
  claude-code:
    compatible: true
    # ... other platform config
---
```

### Platform Configuration

#### Claude Code Configuration
```yaml
claude-code:
  compatible: true                    # Can rule work with Claude?
  command: false                      # Can become slash command?
  memory: true                        # Include in memory files?
  namespace: "project"                # Command scope
  allowedTools: ["Read", "Write"]     # Required tools
  mcpIntegration: false              # Uses MCP servers?
```

#### Cursor Configuration
```yaml
cursor:
  compatible: true                    # Can rule work with Cursor?
  activation: "auto-attached"         # How rule activates
  globs: ["**/*.tsx", "**/*.jsx"]    # File patterns
  priority: "high"                   # Rule priority
```

#### Windsurf Configuration
```yaml
windsurf:
  compatible: true                    # Can rule work with Windsurf?
  mode: "workspace"                   # Application scope
  xmlTag: "component-patterns"        # XML tag name
  characterLimit: 400                # Memory optimization
```

#### GitHub Copilot Configuration
```yaml
github-copilot:
  compatible: true                    # Can rule work with Copilot?
  priority: 8                         # 1-10 selection priority
  reviewType: "code-quality"          # Review focus area
```

### Dependencies and Relationships

```yaml
requires: ["typescript-modern"]        # Hard dependencies
suggests: ["testing-library"]          # Recommendations
conflicts: ["class-components"]        # Incompatible rules
supersedes: ["legacy-components"]      # Replaced rules
```

## Best Practices

### 1. Start Simple
Begin with basic guidelines and expand based on feedback:

```markdown
## Version 1.0: Basic guideline
"Use functional components with hooks"

## Version 1.1: Add context
"Use functional components with hooks for better performance and simpler testing"

## Version 1.2: Add specifics
"Use functional components with hooks exclusively. Avoid class components except for error boundaries before React 16.8"
```

### 2. Test Across Platforms
Verify your rule works with each declared platform:

- **Claude Code**: Test with actual tool interactions
- **Cursor**: Verify auto-completion behavior
- **Windsurf**: Check memory optimization
- **GitHub Copilot**: Validate review suggestions

### 3. Gather Feedback
Before marking a rule as stable:

- Share with community for review
- Test in real projects
- Iterate based on feedback
- Document edge cases discovered

### 4. Keep Rules Focused
Each rule should address a single concern:

```markdown
✅ Good: "React Component Creation Patterns"
❌ Bad: "React Best Practices and Testing and Deployment"
```

### 5. Maintain Consistency
Follow established patterns in existing rules:
- Use consistent section headings
- Follow the same example format
- Maintain similar explanation depth
- Use established terminology

## Common Mistakes

### 1. Platform-Specific Universal Guidelines
```markdown
❌ Bad: "Use Claude Code's Read tool to examine files"
✅ Good: "Examine existing files to understand project patterns"
```

### 2. Vague Instructions
```markdown
❌ Bad: "Follow good practices"
✅ Good: "Use descriptive names, single responsibility, and proper error handling"
```

### 3. Missing Context
```markdown
❌ Bad: "Use useCallback"
✅ Good: "Use useCallback for functions passed to child components to prevent unnecessary re-renders"
```

### 4. Incomplete Examples
```markdown
❌ Bad: 
```typescript
const MyComponent = () => {
  // ...
};
```

✅ Good:
```typescript
import React, { useState } from 'react';

interface MyComponentProps {
  title: string;
  onSave: (data: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onSave }) => {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <h1>{title}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => onSave(value)}>Save</button>
    </div>
  );
};
```

### 5. Platform Configuration Errors
```yaml
❌ Bad: Missing required platform configs
platforms:
  claude-code:
    compatible: true
  # Missing cursor, windsurf, github-copilot

✅ Good: Complete platform configuration
platforms:
  claude-code:
    compatible: true
    memory: true
    # ... complete config
  cursor:
    compatible: true
    # ... complete config
  # ... all platforms configured
```

## Validation and Review

Before submitting your rule:

1. **Schema Validation**: Ensure frontmatter follows required schema
2. **Content Review**: Check all sections are complete and accurate
3. **Example Testing**: Verify all code examples work as intended
4. **Platform Testing**: Test rule behavior on declared platforms
5. **Peer Review**: Get feedback from other contributors

Remember: Great rules are refined through iteration and community feedback. Start with a solid foundation and improve based on real-world usage.