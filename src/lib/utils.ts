import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanIKUrl(url: string | undefined): string {
  if (!url) return "";
  const cleaned = url.replace("https://ik.imagekit.io/j3l1n5k1/", "");
  return cleaned.split("?")[0];
}

export function getDevImageUrl(url: string): string {
    if (!import.meta.env.DEV) return url;
    if (!url) return url;

    // If it's already a local path, return as is
    if (url.startsWith("/photos/")) return url;

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

    // Ensure we don't have a double slash
    const cleanPath = relPath.startsWith("/") ? relPath.substring(1) : relPath;
    return `/photos/${decodeURIComponent(cleanPath)}`;
}
