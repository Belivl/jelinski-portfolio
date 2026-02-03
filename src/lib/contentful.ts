import { createClient, type Entry } from "contentful";
import type { BlogPost } from "@/data/blogData";

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "",
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || "",
});

// A loose interface matching the actual resolved data from Contentful
interface ContentfulFields {
  id: string;
  title: string;
  category?: string;
  date: string;
  // Based on inspection: coverImage is an array of objects with a 'url' property
  coverImage?: Array<{
    url?: string;
  }>;
  coverImageTop?: boolean;
  // Based on inspection: the field is called 'imagePaths', not 'images'
  imagePaths?: Array<{
    url?: string;
  }>;
  location?: {
    lat: number;
    lon: number;
  };
  city?: string;
  // Based on inspection: these appear to be booleans (checkboxes?) in Contentful
  region?: boolean | "tricity" | "outside";
  country?: boolean | "poland" | "outside";
}

export const sanitizeEntry = (entry: Entry<any>): BlogPost => {
  const fields = entry.fields as unknown as ContentfulFields;
  
  // Extract images from 'imagePaths'
  const images = fields.imagePaths?.map((img) => img.url || "").filter(Boolean) || [];

  // Extract cover image (first item in array)
  const coverImage = fields.coverImage?.[0]?.url || "";

  const location = fields.location ? {
    lat: fields.location.lat,
    lng: fields.location.lon,
  } : undefined;

  // Map boolean/string fields to the expected specific string types
  // Assuming true = "tricity"/"poland" based on context, or fallback to "outside"
  const region = fields.region === true || fields.region === "tricity" ? "tricity" : "outside";
  const country = fields.country === true || fields.country === "poland" ? "poland" : "outside";
  const city = fields.city || "Gdansk";

  return {
    id: fields.id || entry.sys.id, // Fallback to sys.id if custom id is missing
    title: fields.title || "Untitled",
    category: fields.category,
    date: fields.date || new Date().toISOString(),
    coverImage: coverImage,
    coverImageCrop: fields.coverImageTop ? "top" : "center",
    images: images,
    location: location,
    city: city,
    region: region,
    country: country
  };
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      order: ["-fields.date"],
    });

    return entries.items.map(sanitizeEntry);
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
    return [];
  }
};

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.id": id,
      limit: 1,
    });

    if (entries.items.length > 0) {
      return sanitizeEntry(entries.items[0]);
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog post with id ${id}:`, error);
    return null;
  }
};

// Testimonial Interface matching the component's expectation
export interface TestimonialItem {
  id: number;
  noteColor: string;
  pinColor: string;
  link?: string;
  featured?: boolean;
  name?: string;
  role?: string;
  text?: string;
  name_pl?: string;
  role_pl?: string;
  text_pl?: string;
}

// Contentful Testimonial Fields Interface
interface ContentfulTestimonialFields {
  id: number;
  name: string;
  role: string;
  text: string;
  link?: string;
  featured?: boolean;
  noteColor?: string;
  pinColor?: string;
}

export const sanitizeTestimonial = (entry: Entry<any>): TestimonialItem => {
  const fields = entry.fields as unknown as ContentfulTestimonialFields;

  return {
    id: fields.id,
    name: fields.name,
    role: fields.role,
    text: fields.text,
    link: fields.link,
    featured: fields.featured !== false,
    noteColor: fields.noteColor || "#F8E9F3",
    pinColor: fields.pinColor || "#D95082",
  };
};

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "testimonial",
      order: ["fields.id"],
    });

    return entries.items.map(sanitizeTestimonial);
  } catch (error) {
    console.error("Error fetching testimonials from Contentful:", error);
    return [];
  }
};

