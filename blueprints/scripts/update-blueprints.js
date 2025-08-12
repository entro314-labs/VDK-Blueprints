#!/usr/bin/env node

/**
 * Update VDK Blueprints with Enhanced Platform Support
 * Adds new platform configurations while preserving existing ones
 */

const fs = require('fs');
const path = require('path');

// Standard platform configurations for different blueprint types
const PLATFORM_CONFIGS = {
  // Core blueprints - apply to all platforms
  core: {
    'claude-desktop': {
      compatible: true,
      mcpIntegration: true,
      rules: true,
      priority: 9
    },
    'windsurf-next': {
      compatible: true,
      mode: 'workspace',
      xmlTag: 'core-behavior',
      characterLimit: 500,
      priority: 9
    },
    'zed': {
      compatible: true,
      mode: 'project',
      aiFeatures: true,
      performance: 'high'
    },
    'vscode': {
      compatible: true,
      extension: 'ai-context-schema',
      mcpIntegration: true,
      commands: ['aiContext.apply', 'aiContext.validate']
    },
    'webstorm': {
      compatible: true,
      nodeIntegration: true,
      typescript: true,
      mcpIntegration: true,
      inspections: ['JavaScriptPatterns', 'TypeScriptPatterns']
    },
    'generic-ai': {
      compatible: true,
      configPath: '.ai/',
      rulesPath: '.ai/rules/',
      priority: 8
    }
  },

  // Language-specific blueprints
  language: {
    'claude-desktop': {
      compatible: true,
      mcpIntegration: true,
      rules: true,
      priority: 8
    },
    'zed': {
      compatible: true,
      mode: 'project',
      aiFeatures: true,
      performance: 'high'
    },
    'vscode': {
      compatible: true,
      extension: 'language-support',
      mcpIntegration: true
    },
    'generic-ai': {
      compatible: true,
      priority: 7
    }
  },

  // Technology frameworks
  technology: {
    'claude-desktop': {
      compatible: true,
      mcpIntegration: true,
      rules: true,
      priority: 8
    },
    'zed': {
      compatible: true,
      mode: 'project',
      aiFeatures: true,
      performance: 'high'
    },
    'vscode': {
      compatible: true,
      extension: 'framework-support',
      mcpIntegration: true
    },
    'webstorm': {
      compatible: true,
      nodeIntegration: true,
      typescript: true,
      mcpIntegration: true
    },
    'generic-ai': {
      compatible: true,
      priority: 7
    }
  },

  // Task blueprints
  task: {
    'claude-desktop': {
      compatible: true,
      mcpIntegration: true,
      rules: true,
      priority: 7
    },
    'zed': {
      compatible: true,
      mode: 'project',
      aiFeatures: true
    },
    'vscode': {
      compatible: true,
      mcpIntegration: true
    },
    'generic-ai': {
      compatible: true,
      priority: 6
    }
  }
};

function updateBlueprint(filePath, blueprintType = 'core') {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter and content
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!frontmatterMatch) {
      return { success: false, error: 'No valid frontmatter found' };
    }

    const [, frontmatter, markdownContent] = frontmatterMatch;
    
    // Find platforms section
    const platformsMatch = frontmatter.match(/platforms:\s*\n([\s\S]*?)(?=\n[a-zA-Z]|\n#|$)/);
    if (!platformsMatch) {
      return { success: false, error: 'No platforms section found' };
    }

    let platformsSection = platformsMatch[1];
    const newPlatforms = PLATFORM_CONFIGS[blueprintType] || PLATFORM_CONFIGS.core;
    
    // Add new platforms to the existing platforms section
    let updatedPlatforms = platformsSection;
    
    Object.entries(newPlatforms).forEach(([platformName, config]) => {
      // Only add if platform doesn't already exist
      if (!updatedPlatforms.includes(`${platformName}:`)) {
        const configYaml = formatPlatformConfig(platformName, config);
        updatedPlatforms += configYaml;
      }
    });

    // Replace platforms section in frontmatter
    const updatedFrontmatter = frontmatter.replace(
      /platforms:\s*\n[\s\S]*?(?=\n[a-zA-Z]|\n#|$)/,
      `platforms:\n${updatedPlatforms}`
    );

    // Reconstruct the file
    const updatedContent = `---\n${updatedFrontmatter}\n---\n${markdownContent}`;
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function formatPlatformConfig(platformName, config) {
  let result = `  ${platformName}:\n`;
  
  Object.entries(config).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      result += `    ${key}: [${value.map(v => `"${v}"`).join(', ')}]\n`;
    } else if (typeof value === 'string') {
      result += `    ${key}: "${value}"\n`;
    } else {
      result += `    ${key}: ${value}\n`;
    }
  });
  
  return result;
}

function determineBlueprintType(filePath) {
  if (filePath.includes('/core/')) return 'core';
  if (filePath.includes('/languages/')) return 'language';
  if (filePath.includes('/technologies/')) return 'technology';
  if (filePath.includes('/tasks/')) return 'task';
  if (filePath.includes('/stacks/')) return 'technology';
  if (filePath.includes('/assistants/')) return 'core';
  if (filePath.includes('/tools/')) return 'core';
  return 'core';
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node update-blueprints.js <file-pattern>');
    console.log('Example: node update-blueprints.js .ai/rules/core/*.mdc');
    return;
  }

  const pattern = args[0];
  console.log(`🔄 Updating blueprints matching: ${pattern}\n`);
  
  // Simple glob expansion for *.mdc files
  const baseDir = pattern.includes('*') ? pattern.split('*')[0] : path.dirname(pattern);
  const files = [];
  
  try {
    if (pattern.includes('*')) {
      const dirPath = path.resolve(baseDir);
      const dirFiles = fs.readdirSync(dirPath);
      dirFiles.forEach(file => {
        if (file.endsWith('.mdc')) {
          files.push(path.join(dirPath, file));
        }
      });
    } else {
      files.push(path.resolve(pattern));
    }
  } catch (error) {
    console.log(`❌ Error reading directory: ${error.message}`);
    return;
  }

  let updatedCount = 0;
  let errorCount = 0;

  files.forEach(filePath => {
    const relativePath = path.relative(process.cwd(), filePath);
    const blueprintType = determineBlueprintType(filePath);
    
    const result = updateBlueprint(filePath, blueprintType);
    
    if (result.success) {
      updatedCount++;
      console.log(`✅ ${relativePath} - Updated (${blueprintType} type)`);
    } else {
      errorCount++;
      console.log(`❌ ${relativePath} - ${result.error}`);
    }
  });

  console.log(`\n📊 Summary: ${updatedCount} blueprints updated, ${errorCount} errors`);
  
  if (updatedCount > 0) {
    console.log('🎉 Platform configurations added successfully!');
    console.log('📝 Review the changes and commit when ready.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { updateBlueprint, determineBlueprintType };