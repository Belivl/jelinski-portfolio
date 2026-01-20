
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTOS_FILE_PATH = path.join(__dirname, '../src/data/photos.ts');
const BLOG_DATA_PATH = path.join(__dirname, '../src/data/blogData.ts');
const PROJECT_DATA_PATH = path.join(__dirname, '../src/data/projectData.ts');
const PUBLIC_DIR = path.join(__dirname, '../public/photos');


if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Helper to parse array from file content
const parseArrayFromFile = (filePath, startMarker, endMarker = '];') => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        let startIndex = content.indexOf(startMarker);
        let markerLength = startMarker.length;
        
        // Try alternate if not found (sometimes type definition varies)
        if (startIndex === -1 && startMarker.includes(':')) {
             const alternate = startMarker.replace(/:.*=/, ' ='); // heuristic
             // Just simple alternate check for now as in original code
             const simpleStart = startMarker.split(':')[0].trim() + ' = [';
             startIndex = content.indexOf(simpleStart);
             markerLength = simpleStart.length;
        }

        if (startIndex === -1) {
            // Fallback for rawBlogPosts specifics if needed or just return empty
             // Try searching for just variable name assignment
             const varName = startMarker.split(':')[0].split('const ')[1]?.trim();
             if (varName) {
                 const regex = new RegExp(`const\\s+${varName}\\s*(?::[^=]+)?=\\s*[{[]`);
                 const match = content.match(regex);
                 if (match) {
                     startIndex = match.index;
                     markerLength = match[0].length;
                 }
             }
        }

        if (startIndex === -1) {
             console.warn(`Could not find start marker: ${startMarker} in ${path.basename(filePath)}`);
             return [];
        }
        
        // Find end - simplistic approach matching original code
        // We need to find the matching closing bracket strictly speaking, but lastIndexOf('];') is risky if multiple arrays.
        // For now, let's assume the array we want is the *variable* we are looking for.
        // But since we use eval, we need valid JS syntax.
        
        // Better approach for multiple arrays in file: find the next '];' after start
        let endIndex = content.indexOf(endMarker, startIndex);
        if (endIndex === -1) throw new Error('Could not find end of array');
        
        // Extract array string
        const arrayString = content.substring(startIndex + markerLength - 1, endIndex + 1);
        
        // Wrap in parentheses to ensure objects are parsed correctly as expressions
        // and remove any trailing semicolon to avoid syntax errors inside parentheses
        // Eval - CAREFUL: This assumes the content is valid JS objects (JSON-like) inside the array.
        // If imports or functions are used inside, eval will fail.
        // mockData.ts and photos.ts seem to only have data objects.
        return eval(`(${arrayString.trim().replace(/;$/, "")})`);
    } catch (e) {
        console.error(`Failed to parse ${path.basename(filePath)}:`, e.message);
        return [];
    }
};

const getPhotoData = () => {
    return parseArrayFromFile(PHOTOS_FILE_PATH, 'export const photoData: Photo[] = [');
};

const getBlogImages = () => {
    // In mockData.ts: const rawBlogPosts: Omit<BlogPost, 'id'>[] = [
    // We try to match: const rawBlogPosts
    const posts = parseArrayFromFile(BLOG_DATA_PATH, 'const rawBlogPosts: Omit<BlogPost, \'id\'>[] = [');
    
    // Extract strings
    const urls = [];
    posts.forEach(post => {
        if (post.coverImage) urls.push({ url: post.coverImage });
        if (post.images && Array.isArray(post.images)) {
             post.images.forEach(img => urls.push({ url: img }));
        }
    });
    return urls;
};

const CATEGORY_COVERS_PATH = path.join(__dirname, '../src/data/categoryCovers.ts');
const PROJECT_TABS_PATH = path.join(__dirname, '../src/data/projectTabs.ts');
const HOME_DATA_PATH = path.join(__dirname, '../src/data/home.ts');
const DESIGN_GALLERY_PATH = path.join(__dirname, '../src/components/galleries/DesignGallery.tsx');
const THREE_D_GALLERY_PATH = path.join(__dirname, '../src/components/galleries/ThreeDGallery.tsx');
const ART_GALLERY_PATH = path.join(__dirname, '../src/components/galleries/ArtGallery.tsx');

const getCategoryCoverImages = () => {
    const covers = parseArrayFromFile(CATEGORY_COVERS_PATH, 'const rawCategoryCovers: Record<string, string> = {', '};');
    
    // It's a record, not an array, but eval might still work if parseArrayFromFile handles it.
    // Let's check parseArrayFromFile... it looks for start marker and end marker.
    // { ... } is valid JS object.
    
    const urls = [];
    if (covers && typeof covers === 'object') {
        Object.values(covers).forEach(url => {
            if (url && (url.startsWith('http') || url.includes('.'))) {
                urls.push({ url });
            }
        });
    }
    return urls;
};

const getProjectTabImages = () => {
    const tabs = parseArrayFromFile(PROJECT_TABS_PATH, 'const rawProjectTabs: ProjectTab[] = [');
    const urls = [];
    if (tabs && Array.isArray(tabs)) {
        tabs.forEach(tab => {
            if (tab.image) urls.push({ url: tab.image });
        });
    }

    const catImages = parseArrayFromFile(PROJECT_TABS_PATH, 'const rawProjectCategoryImages: Record<string, string> = {', '};');
    if (catImages && typeof catImages === 'object') {
        Object.values(catImages).forEach(url => {
            if (url && (url.startsWith('http') || url.includes('.'))) {
                urls.push({ url });
            }
        });
    }
    return urls;
};

const getProjectImages = () => {
    const projects = parseArrayFromFile(PROJECT_DATA_PATH, 'const rawProjects: Project[] = [');
    
    const urls = [];
    projects.forEach(project => {
         if (project.coverImage) urls.push({ url: project.coverImage });
         if (project.images && Array.isArray(project.images)) {
             project.images.forEach(img => urls.push({ url: img }));
         }
    });
    return urls;
};

const MDX_COMPONENTS_DIR = path.join(__dirname, '../src/content/projects');

const getPostImages = () => {
    const urls = new Set();
    try {
        if (!fs.existsSync(MDX_COMPONENTS_DIR)) return [];
        
        const files = fs.readdirSync(MDX_COMPONENTS_DIR);
        const tsxFiles = files.filter(f => f.endsWith('.tsx'));
        
        const urlRegex = /https:\/\/ik\.imagekit\.io\/[^\s'"`)}]+/g;
        
        tsxFiles.forEach(file => {
            const content = fs.readFileSync(path.join(MDX_COMPONENTS_DIR, file), 'utf-8');
            const matches = content.match(urlRegex);
            if (matches) {
                matches.forEach(url => urls.add(url));
            }
        });
    } catch (e) {
        console.error("Failed to scrape MDX components:", e.message);
    }
    return Array.from(urls).map(url => ({ url }));
};

const getHomeImages = () => {
    const urls = new Set();
    try {
        if (!fs.existsSync(HOME_DATA_PATH)) return [];
        
        const content = fs.readFileSync(HOME_DATA_PATH, 'utf-8');
        // Match both ImageKit
        const urlRegex = /https:\/\/(?:ik\.imagekit\.io)\/[^\s'"`)}]+/g;
        
        const matches = content.match(urlRegex);
        if (matches) {
            matches.forEach(url => urls.add(url));
        }
    } catch (e) {
        console.error("Failed to scrape home.ts:", e.message);
    }
    return Array.from(urls).map(url => ({ url }));
};


const getArtImages = () => {
    const urls = new Set();
    try {
        if (!fs.existsSync(ART_GALLERY_PATH)) return [];
        
        const content = fs.readFileSync(ART_GALLERY_PATH, 'utf-8');
        // Match both ImageKit
        const urlRegex = /https:\/\/(?:ik\.imagekit\.io)\/[^\s'"`)}]+/g;
        
        const matches = content.match(urlRegex);
        if (matches) {
            matches.forEach(url => urls.add(url));
        }
    } catch (e) {
        console.error("Failed to scrape art.ts:", e.message);
    }
    return Array.from(urls).map(url => ({ url }));
};

const getThreeDImages = () => {
    const urls = new Set();
    try {
        if (!fs.existsSync(THREE_D_GALLERY_PATH)) return [];
        
        const content = fs.readFileSync(THREE_D_GALLERY_PATH, 'utf-8');
        // Match both ImageKit
        const urlRegex = /https:\/\/(?:ik\.imagekit\.io)\/[^\s'"`)}]+/g;
        
        const matches = content.match(urlRegex);
        if (matches) {
            matches.forEach(url => urls.add(url));
        }
    } catch (e) {
        console.error("Failed to scrape 3D.ts:", e.message);
    }
    return Array.from(urls).map(url => ({ url }));
};

const getDesignImages = () => {
    const urls = new Set();
    try {
        if (!fs.existsSync(DESIGN_GALLERY_PATH)) return [];
        
        const content = fs.readFileSync(DESIGN_GALLERY_PATH, 'utf-8');
        // Match both ImageKit
        const urlRegex = /https:\/\/(?:ik\.imagekit\.io)\/[^\s'"`)}]+/g;
        
        const matches = content.match(urlRegex);
        if (matches) {
            matches.forEach(url => urls.add(url));
        }
    } catch (e) {
        console.error("Failed to scrape design.ts:", e.message);
    }
    return Array.from(urls).map(url => ({ url }));
};

const threeDImages = getThreeDImages();
const designImages = getDesignImages();
const artImages = getArtImages();
const photoData = getPhotoData();
const blogImages = getBlogImages();
const projectImages = getProjectImages();
const postImages = getPostImages();
const categoryImages = getCategoryCoverImages();
const homeImages = getHomeImages();

const allImages = [...photoData, ...blogImages, ...projectImages, ...postImages, ...categoryImages, ...homeImages, ...artImages, ...threeDImages, ...designImages];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            // console.log(`Skipping: ${dest} (already exists)`);
            resolve();
            return;
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                response.resume();
                reject(new Error(`Failed to download: ${url}, Status: ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Downloaded: ${path.basename(dest)}`);
                    resolve();
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); // Delete partial file
            reject(err);
        });
    });
};

const processPhotos = async () => {
    // console.log(`Starting image download to: ${PUBLIC_DIR}`);
    let count = 0;
    
    for (const photo of allImages) {
        if (!photo.url) continue;

        try {
            const urlObj = new URL(photo.url);
            
            let relativePath = urlObj.pathname;
            const ikId = '/j3l1n5k1/';
            
            if (relativePath.startsWith(ikId)) {
                relativePath = relativePath.substring(ikId.length);
            } else {
                const yearMatch = relativePath.match(/\/(\d{4})\//);
                if (yearMatch) {
                    const yearIndex = relativePath.indexOf(yearMatch[0]) + 1;
                    relativePath = relativePath.substring(yearIndex);
                } else {
                    relativePath = path.basename(relativePath);
                }
            }

            relativePath = decodeURIComponent(relativePath);
            const fullDestPath = path.join(PUBLIC_DIR, relativePath);
            const destDir = path.dirname(fullDestPath);

            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            await downloadFile(photo.url, fullDestPath);
            count++;

        } catch (err) {
            console.error(`Error processing ${photo.url}:`, err.message);
        }
    }
};

if (allImages.length > 0) {
    processPhotos();
} else {
    console.log("No photos found to process.");
}
