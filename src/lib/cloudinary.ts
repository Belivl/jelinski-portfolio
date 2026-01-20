import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "dcmfq9hg5",
  },
});

export function getPublicIdFromUrl(url: string): string | null {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
  if (!match) return null;
  // Remove file extension
  return match[1].replace(/\.[^/.]+$/, "");
}
