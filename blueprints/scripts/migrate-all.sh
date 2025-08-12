#!/bin/bash

# Batch migration script for all remaining .mdc files

echo "Starting batch migration of all .mdc files..."

# Find all .mdc files and migrate them
find .ai/rules -name "*.mdc" -type f | while read -r file; do
    # Check if file already has new format (contains "# === Core Identification ===")
    if grep -q "# === Core Identification ===" "$file"; then
        echo "⏭️  Skipped (already migrated): $file"
    else
        echo "🔄 Migrating: $file"
        python3 .ai/scripts/simple-migrate.py "$file"
    fi
done

echo ""
echo "Migration complete!"
echo ""
echo "Summary:"
find .ai/rules -name "*.mdc" -type f | wc -l | xargs echo "Total .mdc files:"
grep -l "# === Core Identification ===" .ai/rules/**/*.mdc 2>/dev/null | wc -l | xargs echo "Migrated files:"