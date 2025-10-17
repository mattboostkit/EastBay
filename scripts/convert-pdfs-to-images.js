const fs = require('fs').promises;
const path = require('path');
const { pdf } = require('pdf-to-img');
const sharp = require('sharp');

/**
 * Converts PDFs to optimized JPG images
 * Usage: node scripts/convert-pdfs-to-images.js <input-folder> <output-folder>
 */

async function convertPdfToImage(pdfPath, outputFolder) {
  try {
    const fileName = path.basename(pdfPath, '.pdf');
    console.log(`Converting: ${fileName}.pdf`);

    // Convert PDF (first page only)
    const document = await pdf(pdfPath, { scale: 2.0 });

    // Get the first page
    let pageCount = 0;
    for await (const image of document) {
      if (pageCount === 0) { // Only process first page
        const outputPath = path.join(outputFolder, `${fileName}.jpg`);

        // Optimize and convert to JPG using sharp
        await sharp(image)
          .resize(1920, null, { // Max width 1920px, maintain aspect ratio
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({
            quality: 85,
            progressive: true
          })
          .toFile(outputPath);

        console.log(`✓ Converted: ${fileName}.jpg`);
      }
      pageCount++;
      break; // Only process first page
    }

    return true;
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(pdfPath)}:`, error.message);
    return false;
  }
}

async function convertAllPdfs(inputFolder, outputFolder) {
  try {
    // Create output folder if it doesn't exist
    await fs.mkdir(outputFolder, { recursive: true });

    // Read all files from input folder
    const files = await fs.readdir(inputFolder);
    const pdfFiles = files.filter(file =>
      file.toLowerCase().endsWith('.pdf')
    );

    console.log(`\nFound ${pdfFiles.length} PDF files to convert\n`);

    if (pdfFiles.length === 0) {
      console.log('No PDF files found in the input folder.');
      return;
    }

    let successCount = 0;
    let failCount = 0;

    // Process each PDF
    for (let i = 0; i < pdfFiles.length; i++) {
      const pdfFile = pdfFiles[i];
      const inputPath = path.join(inputFolder, pdfFile);

      console.log(`\n[${i + 1}/${pdfFiles.length}] Processing...`);

      const success = await convertPdfToImage(inputPath, outputFolder);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✓ Conversion complete!`);
    console.log(`  Success: ${successCount} files`);
    console.log(`  Failed: ${failCount} files`);
    console.log(`  Output folder: ${outputFolder}`);
    console.log(`${'='.repeat(50)}\n`);

  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`
PDF to Image Converter
======================

Converts all PDF files in a folder to optimized JPG images (first page only).
Images are automatically resized to max 1920px width and optimized for web.

Usage:
  node scripts/convert-pdfs-to-images.js <input-folder> <output-folder>

Example:
  node scripts/convert-pdfs-to-images.js "C:\\Creative Cloud\\_WEBSITES\\East Wear Bay\\Education Resources\\Capsule Entries" "C:\\Dev\\Cascade\\EastBay\\converted-images"

Note: Paths with spaces must be in quotes.
`);
  process.exit(1);
}

const [inputFolder, outputFolder] = args;

console.log(`\nPDF to Image Converter`);
console.log(`======================`);
console.log(`Input:  ${inputFolder}`);
console.log(`Output: ${outputFolder}\n`);

// Check if input folder exists
fs.access(inputFolder)
  .then(() => convertAllPdfs(inputFolder, outputFolder))
  .catch((error) => {
    console.error(`Error: Input folder does not exist or cannot be accessed:`);
    console.error(`  ${inputFolder}`);
    process.exit(1);
  });
