const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './assets/images/topics';
const outputDir = './assets/images/topics_optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files to optimize...`);

async function optimizeImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        try {
            await sharp(inputPath)
                .resize(800, null, { withoutEnlargement: true })
                .png({ quality: 80, compressionLevel: 9 })
                .toFile(outputPath);

            const originalSize = fs.statSync(inputPath).size;
            const newSize = fs.statSync(outputPath).size;
            console.log(`${file}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(newSize / 1024)}KB`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }

    console.log('\nOptimization complete! Now replacing original files...');

    // Replace original files
    for (const file of files) {
        const optimizedPath = path.join(outputDir, file);
        const originalPath = path.join(inputDir, file);
        if (fs.existsSync(optimizedPath)) {
            fs.copyFileSync(optimizedPath, originalPath);
        }
    }

    console.log('Done!');
}

optimizeImages();
