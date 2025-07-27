---
id: "your-command-id"                 # Unique command identifier (kebab-case, required)
name: "your-command"                  # Command name for execution (1-50 chars, required)
description: "Brief description of what this command does"  # Brief command description (10-200 chars, required)
platform: "claude-code"              # claude-code, cursor, windsurf, github-copilot (required)
type: "workflow"                      # workflow, meta, quality, security, utility (required)
version: "1.0.0"                      # Semantic version number (optional, format: x.y.z)

# === Parameters ===
parameters:
  - name: "target"                    # Parameter name (required)
    type: "string"                    # string, number, boolean, array, object (required)
    required: true                    # Is parameter required (optional)
    description: "Target file or component to process"  # Parameter description (optional)
    default: ""                       # Default value (optional)
  - name: "options"
    type: "object"
    required: false
    description: "Additional configuration options"
    default: {}

# === Dependencies ===
dependencies: []                      # Required Blueprints or commands (optional)
tools: ["Read", "Write", "Edit"]      # Required platform tools (optional)

# === Examples ===
examples:
  - input: "/your-command target=components/Button"  # Example command input (required)
    description: "Process a specific component"      # Example description (required)
    output: "Expected result description"            # Expected output (optional)
  - input: "/your-command target=src/utils options={recursive:true}"
    description: "Process with additional options"
    output: "Expected result description"

# === Metadata ===
tags: ["workflow", "automation"]      # Searchable tags (optional)
author: "community"                   # Command author (optional)
lastUpdated: "2025-07-27"             # Last update date (optional, format: YYYY-MM-DD)
---

# Your Command Name

## Purpose

Clearly explain what this command does and when to use it. Include:
- Primary use case
- Expected outcomes
- Prerequisites or requirements

## Usage

### Basic Syntax
```
/your-command target=<value> [options=<object>]
```

### Parameters

#### target (required)
- **Type**: string
- **Description**: Detailed description of what this parameter does
- **Examples**:
  - `components/Button`
  - `src/utils/helpers.ts`
  - `pages/dashboard`

#### options (optional)
- **Type**: object
- **Description**: Configuration options for customizing behavior
- **Default**: `{}`
- **Available Options**:
  - `recursive` (boolean): Process subdirectories
  - `format` (string): Output format preference
  - `validate` (boolean): Run validation after processing

## Examples

### Example 1: Basic Usage
```
/your-command target=components/UserProfile
```

**Description**: Process the UserProfile component with default settings.

**Expected Outcome**:
- Analyzes the component structure
- Applies standard patterns and conventions
- Updates imports and exports if needed

### Example 2: Advanced Usage
```
/your-command target=src/features options={recursive:true,validate:true}
```

**Description**: Process all components in the features directory recursively with validation.

**Expected Outcome**:
- Processes all nested components
- Applies consistent patterns across all files
- Validates the results and reports any issues

### Example 3: Specific Configuration
```
/your-command target=pages/api options={format:"typescript",validate:false}
```

**Description**: Process API routes with TypeScript formatting, skipping validation.

**Expected Outcome**:
- Converts or ensures TypeScript patterns
- Updates API route structure
- Skips post-processing validation

## Implementation Details

### Step-by-Step Process

1. **Validation Phase**
   - Validate input parameters
   - Check if target exists and is accessible
   - Verify prerequisites are met

2. **Analysis Phase**
   - Read and analyze the target files
   - Identify current patterns and structure
   - Determine required changes

3. **Processing Phase**
   - Apply transformations systematically
   - Maintain consistency with project conventions
   - Handle edge cases and errors gracefully

4. **Validation Phase**
   - Verify changes were applied correctly
   - Run any specified validation rules
   - Report results and any issues

### Error Handling

- **Invalid Target**: Provide clear error message if target doesn't exist
- **Permission Issues**: Handle file access problems gracefully
- **Syntax Errors**: Validate and report configuration issues
- **Partial Failures**: Report which operations succeeded/failed

### Integration Points

- **File System**: Read/write operations on target files
- **Project Configuration**: Respect existing project settings
- **Validation Rules**: Integration with project-specific validation
- **Reporting**: Provide detailed feedback on operations

## Platform-Specific Notes

### Claude Code
- Uses Read/Write/Edit tools for file operations
- Integrates with MCP servers if configured
- Respects memory management settings
- Can be saved as a persistent slash command

### Cursor
- Triggered through command palette or shortcuts
- Integrates with workspace file watching
- Provides real-time feedback during execution
- Can auto-attach to relevant file types

### Windsurf
- Executed through chat interface with `/` prefix
- Memory-optimized for performance
- Supports workspace-wide operations
- Integrates with project context awareness

### GitHub Copilot
- Available as code action or suggestion
- Integrated with existing review workflows
- Provides inline suggestions during editing
- Works with pull request review process

## Troubleshooting

### Common Issues

**Issue**: Command fails with "target not found"
**Solution**: Verify the target path is correct and accessible

**Issue**: Partial processing results
**Solution**: Check file permissions and syntax validation

**Issue**: Unexpected output format
**Solution**: Review options configuration and platform settings

### Debug Mode

Enable verbose output by adding `debug:true` to options:
```
/your-command target=src options={debug:true}
```

This provides detailed logging of each processing step.

## Related Commands

- `/related-command-1` - Complementary functionality
- `/related-command-2` - Similar use case
- `/related-command-3` - Follow-up operations

## Version History

### 1.0.0 (2025-07-27)
- Initial implementation
- Basic target processing
- Standard options support

---

**Note**: This command follows the platform-specific implementation patterns. Ensure you understand the target platform's capabilities and constraints before use.