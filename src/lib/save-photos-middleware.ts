import path from "path";
import fs from "fs";
import type { Plugin } from "vite";

export const savePhotosMiddleware = (): Plugin => {
  return {
    name: "save-photos-middleware",
    configureServer(server) {
      server.middlewares.use("/api/save-photos", (req, res, next) => {
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const photos = JSON.parse(body);
              const fileContent = `export interface Photo {
    id?: string;
    url: string;
    title?: string;
    category: 'landscape' | 'portrait' | 'event' | 'black-and-white' | 'animal' | 'architecture' | 'client' | 'cars' | 'street' | 'various' | 'travel';
    camera: string;
    tags: string[];
    date?: string;
    place?: string;
}

export const photoData: Photo[] = ${JSON.stringify(photos, null, 4)};

// Helper to ensure all photos have IDs
export const getPhotos = (): Photo[] => {
    return photoData.map((photo, index) => ({
        ...photo,
        id: photo.id || \`photo-\${index}-\${photo.url.split('/').pop()?.split('.')[0] || 'unknown'}\`
    }));
};
`;
              // Use process.cwd() to resolve path relevant to project root
              const filePath = path.resolve(process.cwd(), "./src/data/photos.ts");
              fs.writeFileSync(filePath, fileContent);
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error("Error saving photos:", error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Failed to save photos" }));
            }
          });
        } else {
          next();
        }
      });

      // Add handler for saving home image positions
      server.middlewares.use("/api/save-home-images", (req, res, next) => {
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const { loadingPhotos, heroPhotos } = JSON.parse(body);

              if (!loadingPhotos || !heroPhotos) {
                 res.statusCode = 400;
                 return res.end(JSON.stringify({ error: "Missing arrays" }));
              }
              
              const filePath = path.resolve(process.cwd(), "./src/data/home.ts");
              let content = fs.readFileSync(filePath, "utf-8");

              const formatArray = (arr: any[]) => {
                return "[\n" + arr.map(p => {
                  if (typeof p === "string") return `  "${p}"`;
                  const props = [];
                  if (p.objectTop !== undefined) props.push(`objectTop: ${p.objectTop}`);
                  if (p.objectPosition) props.push(`objectPosition: "${p.objectPosition}"`);
                  return `    { url: "${p.url}", ${props.join(", ")} }`;
                }).join(",\n") + "\n]";
              };

              // Replace loadingPhotos
              const loadingRegex = /export const loadingPhotos: LoadingPhoto\[\] = \[[\s\S]*?\];/;
              content = content.replace(loadingRegex, `export const loadingPhotos: LoadingPhoto[] = ${formatArray(loadingPhotos)};`);

              // Replace heroPhotos
              const heroRegex = /const heroPhotos = \[[\s\S]*?\];/;
              content = content.replace(heroRegex, `const heroPhotos = ${formatArray(heroPhotos)};`);

              fs.writeFileSync(filePath, content);
              
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error("Error saving positions:", error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Failed to save positions" }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
};
