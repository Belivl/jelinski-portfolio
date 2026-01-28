import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanIKUrl(url: string | undefined): string {
  if (!url) return "";
  const cleaned = url.replace("https://ik.imagekit.io/j3l1n5k1/", "");
  //console.log(cleaned);
  return cleaned.split("?")[0];
}

export function getDevImageUrl(url: string): string {
    if (!import.meta.env.DEV) return url;
    if (!url) return url;

    // If it's already a local path, return as is
    if (url.startsWith("/photography/")) return url;

    let relPath = url;

    // If it's a full URL, attempt to extract the path
    if (url.startsWith("http")) {
        try {
            const urlObj = new URL(url);
            relPath = urlObj.pathname;
            const ikId = "/j3l1n5k1/";
            
            if (relPath.startsWith(ikId)) {
                relPath = relPath.substring(ikId.length);
            } else {
                const yearMatch = relPath.match(/\/(\d{4})\//);
                if (yearMatch) {
                    const yearIndex = relPath.indexOf(yearMatch[0]) + 1;
                    relPath = relPath.substring(yearIndex);
                } else {
                    relPath = relPath.split("/").pop() || "";
                }
            }
        } catch (e) {
            return url;
        }
    }

    // Strip query parameters (e.g., ?updatedAt=...)
    relPath = relPath.split("?")[0];

    // Convert .avif extension to _avif.heif (matching downloaded file format)
    if (relPath.endsWith(".avif")) {
        relPath = relPath.replace(/\.avif$/, "_avif.heif");
    }

    // Ensure path starts with /
    if (!relPath.startsWith("/")) {
        relPath = "/" + relPath;
    }
    
    return decodeURIComponent(relPath);
}
