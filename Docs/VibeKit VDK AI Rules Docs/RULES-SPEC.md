# VDK AI Rules Specification

This document outlines the specification for creating and formatting rule files (`.mdc`) for the VibeKit VDK AI Rules project. Adhering to this specification is crucial for ensuring that rules are parsed and applied correctly by the VDK CLI.

## File Format

Each rule is a Markdown file with the `.mdc` extension, containing a YAML frontmatter block followed by the rule content in Markdown.

## YAML Frontmatter

The frontmatter block is a valid YAML section at the top of the file, enclosed by triple-dashed lines (`---`). It contains metadata that defines the rule's behavior and properties.

### Required Fields

- `source`: (string) The origin of the rule. For this project, it should always be `"VDK Rules"`.
- `framework`: (string) The framework this rule is for. For this project, it should always be `"vdk"`.
- `repository`: (string) The URL of the source repository. For this project, it should be `"idominikosgr/VibeKit-VDK-AI-rules"`.
- `cli_version`: (string) The compatible version of the VDK CLI, supporting semantic versioning (e.g., `">=1.0.0"`).
- `description`: (string) A brief, clear description of what the rule does.
- `version`: (string) The version of the rule itself, following semantic versioning (e.g., `"1.0.0"`).
- `lastUpdated`: (string) The date of the last update in `YYYY-MM-DD` format.
- `globs`: (array of strings) A list of glob patterns that determine which files the rule applies to. An empty list `[]` means it can be applied to any file.
- `alwaysApply`: (boolean) If `true`, the rule is applied automatically without explicit user invocation. If `false`, it must be triggered manually.
- `compatibleWith`: (array of strings) A list of other rule names that this rule is compatible with. This helps the AI understand which rules can be used together effectively.

### Example Frontmatter

```yaml
---
source: "VDK Rules"
framework: "vdk"
repository: "idominikosgr/VibeKit-VDK-AI-rules"
cli_version: ">=1.0.0"
description: "A sample rule description."
globs:
  - "**/*.js"
  - "**/*.ts"
alwaysApply: false
version: "1.0.0"
lastUpdated: "2025-07-04"
compatibleWith:
  - "TypeScript-Modern"
  - "ESLint-Config"
---
```

## Rule Content

The content of the rule follows the YAML frontmatter and should be written in standard Markdown. It should provide the logic, guidelines, and instructions for the AI to follow when applying the rule.

- **Clarity and Conciseness**: The rule should be easy to understand and to the point.
- **Examples**: Include code snippets and examples where appropriate to illustrate the rule's application.
- **Structure**: Use Markdown headings, lists, and other formatting elements to structure the content logically.
