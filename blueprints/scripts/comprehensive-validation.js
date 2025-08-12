#!/usr/bin/env node

/**
 * Comprehensive Blueprint Validation
 * Tests all blueprint categories for schema compatibility
 */

const fs = require('fs');
const path = require('path');

function getAllBlueprints() {
  const blueprintsDir = path.join(__dirname, '../rules');
  const categories = ['core', 'languages', 'technologies', 'stacks', 'tasks', 'assistants', 'tools'];
  const blueprints = [];
  
  categories.forEach(category => {
    const categoryPath = path.join(blueprintsDir, category);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.mdc'));
      files.forEach(file => {
        blueprints.push({
          category,
          file,
          path: path.join(categoryPath, file)
        });
      });
    }
  });
  
  return blueprints;
}

function validateBlueprint(blueprintPath) {
  try {
    const content = fs.readFileSync(blueprintPath, 'utf8');
    
    // Extract YAML frontmatter
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      return { valid: false, error: 'No YAML frontmatter found' };
    }

    const frontmatter = frontmatterMatch[1];
    
    // Check required fields
    const requiredFields = ['id:', 'title:', 'description:', 'version:', 'category:', 'platforms:'];
    const missingFields = requiredFields.filter(field => !frontmatter.includes(field));
    
    if (missingFields.length > 0) {
      return { 
        valid: false, 
        error: `Missing required fields: ${missingFields.join(', ').replace(/:/g, '')}` 
      };
    }
    
    // Check if platforms section has content
    const platformsMatch = frontmatter.match(/platforms:\s*\n([\s\S]*?)(?=\n[a-zA-Z]|\n#|$)/);
    if (!platformsMatch || platformsMatch[1].trim().length === 0) {
      return { valid: false, error: 'Empty platforms section' };
    }
    
    // Check for new platform configurations
    const platformsSection = platformsMatch[1];
    const hasNewPlatforms = ['claude-desktop:', 'zed:', 'vscode:', 'generic-ai:']
      .some(platform => platformsSection.includes(platform));
    
    return { 
      valid: true, 
      hasNewPlatforms,
      platformCount: (platformsSection.match(/\w+:/g) || []).length
    };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

function main() {
  console.log('🔍 Comprehensive Blueprint Validation\n');
  
  const blueprints = getAllBlueprints();
  let validCount = 0;
  let totalCount = 0;
  let updatedCount = 0;
  let categoryStats = {};
  
  blueprints.forEach(blueprint => {
    totalCount++;
    
    const result = validateBlueprint(blueprint.path);
    const relativePath = `${blueprint.category}/${blueprint.file}`;
    
    // Track category stats
    if (!categoryStats[blueprint.category]) {
      categoryStats[blueprint.category] = { total: 0, valid: 0, updated: 0 };
    }
    categoryStats[blueprint.category].total++;
    
    if (result.valid) {
      validCount++;
      categoryStats[blueprint.category].valid++;
      
      if (result.hasNewPlatforms) {
        updatedCount++;
        categoryStats[blueprint.category].updated++;
        console.log(`✅ ${relativePath} - Valid (${result.platformCount} platforms, updated)`);
      } else {
        console.log(`✅ ${relativePath} - Valid (${result.platformCount} platforms)`);
      }
    } else {
      console.log(`❌ ${relativePath} - ${result.error}`);
    }
  });
  
  console.log(`\n📊 Overall Summary:`);
  console.log(`   Total blueprints: ${totalCount}`);
  console.log(`   Valid blueprints: ${validCount}`);
  console.log(`   Updated with new platforms: ${updatedCount}`);
  console.log(`   Success rate: ${((validCount/totalCount)*100).toFixed(1)}%`);
  
  console.log(`\n📈 Category Breakdown:`);
  Object.entries(categoryStats).forEach(([category, stats]) => {
    console.log(`   ${category}: ${stats.valid}/${stats.total} valid, ${stats.updated} updated`);
  });
  
  if (validCount === totalCount) {
    console.log('\n🎉 All blueprints are valid and ready for use!');
    if (updatedCount > 0) {
      console.log(`✨ ${updatedCount} blueprints now support expanded platform compatibility`);
    }
    process.exit(0);
  } else {
    console.log(`\n⚠️  ${totalCount - validCount} blueprints need attention`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateBlueprint, getAllBlueprints };