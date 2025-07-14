VS Code / VS Code Insiders

Global settings: ~/Library/Application Support/Code/User/settings.json
Global keybindings: ~/Library/Application Support/Code/User/keybindings.json
Profile settings: ~/Library/Application Support/Code/User/profiles/<profile ID>/settings.json
Local workspace settings: .vscode/settings.json (in project root)
MCP configuration: .vscode/mcp.json (in project root)

VS Code Insiders uses the same structure but with "Code - Insiders" instead of "Code" in the paths.
Cursor

Global settings: Likely follows VS Code pattern at ~/Library/Application Support/Cursor/User/settings.json
MCP configuration: .cursor/mcp.json (in project root)
Local ignore file: .cursorignore (in project root)
Global MCP configuration: ~/.cursor/mcp.json (from your document)

Windsurf / Windsurf-next (formerly Codeium)

MCP configuration: ~/.codeium/windsurf/mcp_config.json or ~/.codeium/windsurf-next/mcp_config.json
Settings migrated from VS Code/Cursor during setup (optional) (from your documents)

GitHub Copilot

Settings: Managed through VS Code/editor settings
VSCode settings: ~/Library/Application Support/Code/User/settings.json (Copilot settings live within VS Code settings)

Claude Desktop

MCP configuration: ~/Library/Application Support/Claude/claude_desktop_config.json
Logs: ~/Library/Logs/Claude/mcp-server-*.log

Claude Code

Global settings: ~/.claude/settings.json
Local project settings: .claude/settings.json (in project root)
Local project private settings: .claude/settings.local.json (in project root, git-ignored)
Enterprise settings (macOS): /Library/Application Support/ClaudeCode/policies.json

Zed Editor

Settings: ~/.zed/settings.json (on macOS)
Keybindings: ~/.zed/keymap.json (on macOS)
Log file: ~/Library/Logs/Zed/Zed.log
Database: ~/Library/Application Support/Zed/db
Custom themes: ~/.config/zed/themes/

JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.)

Configuration directory: ~/Library/Preferences/IntelliJIdeaXX (where XX is the version number)
System directory: ~/Library/Caches/IntelliJIdeaXX
Plugins directory: ~/Library/Application Support/IntelliJIdeaXX
Logs directory: ~/Library/Logs/IntelliJIdeaXX

For other JetBrains IDEs, replace "IntelliJIdea" with the appropriate product name like "PyCharm", "WebStorm", etc.
JetBrains MCP Configuration
JetBrains IDEs use a plugin-based approach for MCP integration, with settings configured through:

The IDE settings UI at Settings | Tools | AI Assistant | Model Context Protocol (MCP)
When used with Claude Desktop, the MCP configuration is added to Claude's configuration file at ~/Library/Application Support/Claude/claude_desktop_config.json