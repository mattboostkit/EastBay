const fs = require('fs').promises;
const path = require('path');

/**
 * Renames images to sequential numbered format
 * Usage: node scripts/rename-capsule-images.js <folder> <prefix>
 */

async function renameImages(folder, prefix = 'Digital Time Capsule') {
  try {
    // Read all files from folder
    const files = await fs.readdir(folder);
    const imageFiles = files
      .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'))
      .sort(); // Sort alphabetically

    console.log(`\nFound ${imageFiles.length} image files\n`);

    if (imageFiles.length === 0) {
      console.log('No image files found in the folder.');
      return;
    }

    let successCount = 0;
    let failCount = 0;

    // Rename each file
    for (let i = 0; i < imageFiles.length; i++) {
      const oldName = imageFiles[i];
      const oldPath = path.join(folder, oldName);

      // Create new name with zero-padded number
      const number = String(i + 1).padStart(3, '0');
      const newName = `${prefix} ${number}.jpg`;
      const newPath = path.join(folder, newName);

      try {
        await fs.rename(oldPath, newPath);
        console.log(`✓ ${oldName} → ${newName}`);
        successCount++;
      } catch (error) {
        console.error(`✗ Failed to rename ${oldName}:`, error.message);
        failCount++;
      }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✓ Renaming complete!`);
    console.log(`  Success: ${successCount} files`);
    console.log(`  Failed: ${failCount} files`);
    console.log(`${'='.repeat(50)}\n`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log(`
Image Renamer
=============

Renames all JPG images in a folder to a sequential numbered format.

Usage:
  node scripts/rename-capsule-images.js <folder> [prefix]

Examples:
  node scripts/rename-capsule-images.js "C:\\Dev\\Cascade\\EastBay\\converted-images"
  node scripts/rename-capsule-images.js "C:\\Dev\\Cascade\\EastBay\\converted-images" "Time Capsule Entry"

Default prefix: "Digital Time Capsule"
Output format: "Digital Time Capsule 001.jpg", "Digital Time Capsule 002.jpg", etc.
`);
  process.exit(1);
}

const [folder, prefix] = args;

console.log(`\nImage Renamer`);
console.log(`=============`);
console.log(`Folder: ${folder}`);
console.log(`Prefix: ${prefix || 'Digital Time Capsule'}\n`);

renameImages(folder, prefix);
