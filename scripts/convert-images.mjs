import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './src/assets/product_images';
const outputDir = './src/assets/product_images_webp';

mkdirSync(outputDir, { recursive: true });

for (const file of readdirSync(inputDir)) {
    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const name = basename(file, ext);
    await sharp(join(inputDir, file))
        .webp({ quality: 75 })
        .toFile(join(outputDir, `${name}.webp`));

    console.log(`✓ ${file} → ${name}.webp`);
}
console.log('Done!');