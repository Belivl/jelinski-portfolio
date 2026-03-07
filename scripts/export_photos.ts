
import { photoData } from '../src/data/photos';
import fs from 'fs';
import path from 'path';

console.log(`Loaded ${photoData.length} photos.`);

const jsonl = photoData.map(p => JSON.stringify(p)).join('\n');
const outputPath = path.resolve('photos.jsonl');

fs.writeFileSync(outputPath, jsonl);
console.log(`Wrote to ${outputPath}`);
