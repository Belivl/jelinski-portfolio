import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDevImageUrl(url: string): string {
    if (!import.meta.env.DEV) return url;
    if (!url || !url.startsWith("http")) return url;

    try {
        const urlObj = new URL(url);
        let relPath = urlObj.pathname;
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
        
        return `/photos/${decodeURIComponent(relPath)}`;
    } catch (e) {
        return url;
    }
}
