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
    },
  };
};
