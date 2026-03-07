import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOME_DATA_PATH = path.join(__dirname, '../src/data/home.ts');

try {
  // Read request from stdin
  let input = '';
  process.stdin.setEncoding('utf-8');
  
  process.stdin.on('data', chunk => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    if (!input) {
      console.error("No input provided");
      process.exit(1);
    }
    
    // Attempt parse
    const data = JSON.parse(input);
    const { loadingPhotos, heroPhotos } = data;

    if (!loadingPhotos || !heroPhotos) {
      console.error("Missing arrays");
      process.exit(1);
    }

    let content = fs.readFileSync(HOME_DATA_PATH, 'utf-8');
    
    // Replace loadingPhotos
    const loadingRegex = /export const loadingPhotos: LoadingPhoto\[\] = \[[\s\S]*?\];/;
    content = content.replace(loadingRegex, `export const loadingPhotos: LoadingPhoto[] = ${loadingPhotos};`);

    // Replace heroPhotos
    const heroRegex = /const heroPhotos = \[[\s\S]*?\];/;
    content = content.replace(heroRegex, `const heroPhotos = ${heroPhotos};`);

    fs.writeFileSync(HOME_DATA_PATH, content, 'utf-8');
    console.log("Success");
  });
} catch (e) {
  console.error("Error:", e.message);
  process.exit(1);
}
