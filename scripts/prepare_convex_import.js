
import fs from 'fs';
import path from 'path';

const photosPath = path.join(process.cwd(), 'src/data/photos.ts');
const fileContent = fs.readFileSync(photosPath, 'utf-8');

// Rough extraction of the array content
// Assuming format: export const photoData: Photo[] = [ ... ];
const match = fileContent.match(/export const photoData: Photo\[\] = (\[[\s\S]*\]);/);

if (!match) {
    console.error("Could not find photoData array in src/data/photos.ts");
    process.exit(1);
}

let arrayString = match[1];

// Remove comments // ...
arrayString = arrayString.replace(/\/\/.*$/gm, '');

// Evaluate the string to get the object
// Note: This requires the content to be valid JS array literal, which it seems to be.
// We might need to handle the interface usage if any, but it looks like plain objects.
let photos;
try {
    // using eval is risky generally but safe here for local one-off migration of own file
    photos = eval(arrayString); 
} catch (e) {
    console.error("Failed to evaluate photo data:", e);
    // fallback: try to fix common issues if eval fails? 
    // e.g. trailing commas are fine in JS eval.
    process.exit(1);
}

console.log(`Found ${photos.length} photos.`);

// Convert to JSONL for Convex
// Convex expects: { "key": "value" } \n { ... }
const jsonlContent = photos.map(p => JSON.stringify(p)).join('\n');

const outputPath = path.join(process.cwd(), 'photos.jsonl');
fs.writeFileSync(outputPath, jsonlContent);

console.log(`Wrote ${photos.length} photos to ${outputPath}`);
console.log(`Now run: npx convex import --table photos ${outputPath}`);
