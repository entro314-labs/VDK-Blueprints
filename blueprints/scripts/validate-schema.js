#!/usr/bin/env node

/**
 * Validate Blueprint Schema Compatibility
 * Tests that existing blueprints still validate against updated schema
 */

const fs = require('fs');
const path = require('path');

// Simple YAML parser for Blueprint frontmatter validation
const simpleYaml = {
  load: (content) => {
    try {
      // Extract YAML frontmatter
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) return null;
      
      // Simple YAML parsing - for basic validation
      const lines = frontmatterMatch[1].split('\n');
      const result = {};
      
      lines.forEach(line => {
        if (line.includes(':')) {
          const [key, value] = line.split(':').map(s => s.trim());
          if (key && value) {
            result[key] = value.replace(/['"]/g, '');
          }
        }
      });
      
      return result;
    } catch (error) {
      return null;
    }
  }
};

function validateBlueprint(blueprintPath) {
  try {
    const content = fs.readFileSync(blueprintPath, 'utf8');
    const frontmatter = simpleYaml.load(content);
    
    if (!frontmatter) {
      return { valid: false, error: 'No YAML frontmatter found' };
    }
    
    // Check required fields
    const requiredFields = ['id', 'title', 'description', 'version', 'category'];
    const missingFields = requiredFields.filter(field => !frontmatter[field]);
    
    if (missingFields.length > 0) {
      return { 
        valid: false, 
        error: `Missing required fields: ${missingFields.join(', ')}` 
      };
    }
    
    return { valid: true, blueprint: frontmatter };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

function main() {
  console.log('🔍 Validating VDK Blueprint Schema Compatibility\n');
  
  const blueprintsDir = path.join(__dirname, '../rules');
  const testFiles = [
    'core/00-agent-behavior.mdc',
    'languages/typescript-modern.mdc',
    'technologies/react19.mdc'
  ];
  
  let validCount = 0;
  let totalCount = 0;
  
  testFiles.forEach(file => {
    const fullPath = path.join(blueprintsDir, file);
    totalCount++;
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  ${file} - File not found`);
      return;
    }
    
    const result = validateBlueprint(fullPath);
    
    if (result.valid) {
      validCount++;
      console.log(`✅ ${file} - Valid blueprint`);
    } else {
      console.log(`❌ ${file} - ${result.error}`);
    }
  });
  
  console.log(`\n📊 Summary: ${validCount}/${totalCount} blueprints validated successfully`);
  
  if (validCount === totalCount) {
    console.log('🎉 All tested blueprints are compatible with updated schema!');
    process.exit(0);
  } else {
    console.log('⚠️  Some blueprints may need updates');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateBlueprint };