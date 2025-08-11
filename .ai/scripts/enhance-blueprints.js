#!/usr/bin/env node

/**
 * Enhance VDK Blueprints with AI Context Schema v2.1.0 Features
 * Adds enhanced validation, metadata, and prepares for full AI Context Schema migration
 */

const fs = require('fs');
const path = require('path');

// Enhanced metadata to add based on blueprint analysis
const ENHANCEMENTS = {
  // Schema versioning for migration tracking
  schemaVersion: '2.1',
  
  // Enhanced audience options
  audienceMapping: {
    'developer': 'developer',
    'architect': 'architect', 
    'team-lead': 'team-lead',
    'junior': 'junior'
  },
  
  // Standardized tags based on category
  categoryTags: {
    'core': ['behavior', 'core', 'assistant', 'principles'],
    'language': ['language', 'syntax', 'patterns'],
    'technology': ['framework', 'technology', 'integration'],
    'stack': ['stack', 'architecture', 'full-stack'],
    'task': ['workflow', 'automation', 'task'],
    'assistant': ['platform', 'assistant', 'integration'],
    'tool': ['tooling', 'utilities', 'development']
  },
  
  // License standardization
  defaultLicense: 'MIT',
  
  // Repository URL template
  repositoryUrl: 'https://github.com/entro314-labs/VDK-Blueprints'
};

function enhanceBlueprint(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter and content
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!frontmatterMatch) {
      return { success: false, error: 'No valid frontmatter found' };
    }

    const [, frontmatter, markdownContent] = frontmatterMatch;
    let updatedFrontmatter = frontmatter;
    let changesMade = [];
    
    // Add schema version if not present
    if (!frontmatter.includes('schemaVersion:')) {
      updatedFrontmatter += `\nschemaVersion: "${ENHANCEMENTS.schemaVersion}"\n`;
      changesMade.push('added schemaVersion');
    }
    
    // Add license if not present
    if (!frontmatter.includes('license:')) {
      updatedFrontmatter += `license: "${ENHANCEMENTS.defaultLicense}"\n`;
      changesMade.push('added license');
    }
    
    // Add repository URL if not present
    if (!frontmatter.includes('repositoryUrl:')) {
      updatedFrontmatter += `repositoryUrl: "${ENHANCEMENTS.repositoryUrl}"\n`;
      changesMade.push('added repositoryUrl');
    }
    
    // Enhance tags based on category
    const categoryMatch = frontmatter.match(/category:\s*["']?([^"'\n]+)["']?/);
    if (categoryMatch) {
      const category = categoryMatch[1].trim();
      const suggestedTags = ENHANCEMENTS.categoryTags[category] || [];
      
      if (suggestedTags.length > 0 && !frontmatter.includes('tags:')) {
        const tagsYaml = suggestedTags.map(tag => `"${tag}"`).join(', ');
        updatedFrontmatter += `tags: [${tagsYaml}]\n`;
        changesMade.push(`added ${suggestedTags.length} category-based tags`);
      }
    }
    
    // Only update file if changes were made
    if (changesMade.length === 0) {
      return { success: true, changes: [] };
    }
    
    // Reconstruct the file
    const updatedContent = `---\n${updatedFrontmatter}---\n${markdownContent}`;
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    return { success: true, changes: changesMade };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node enhance-blueprints.js <file-pattern>');
    console.log('Example: node enhance-blueprints.js .ai/rules/core/*.mdc');
    return;
  }

  const pattern = args[0];
  console.log(`🔧 Enhancing blueprints with AI Context Schema v2.1.0 features: ${pattern}\n`);
  
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

  let enhancedCount = 0;
  let unchangedCount = 0;
  let errorCount = 0;
  let totalChanges = 0;

  files.forEach(filePath => {
    const relativePath = path.relative(process.cwd(), filePath);
    
    const result = enhanceBlueprint(filePath);
    
    if (result.success) {
      if (result.changes && result.changes.length > 0) {
        enhancedCount++;
        totalChanges += result.changes.length;
        console.log(`✅ ${relativePath} - Enhanced (${result.changes.join(', ')})`);
      } else {
        unchangedCount++;
        console.log(`⚪ ${relativePath} - Already enhanced`);
      }
    } else {
      errorCount++;
      console.log(`❌ ${relativePath} - ${result.error}`);
    }
  });

  console.log(`\n📊 Enhancement Summary:`);
  console.log(`   Enhanced blueprints: ${enhancedCount}`);
  console.log(`   Already enhanced: ${unchangedCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Total enhancements applied: ${totalChanges}`);
  
  if (enhancedCount > 0) {
    console.log('\n🎉 Blueprints enhanced with AI Context Schema v2.1.0 features!');
    console.log('🚀 Your blueprints are now ready for full AI Context Schema migration');
  }
}

if (require.main === module) {
  main();
}

module.exports = { enhanceBlueprint, ENHANCEMENTS };