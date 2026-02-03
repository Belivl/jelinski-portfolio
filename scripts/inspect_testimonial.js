import { createClient } from "contentful";

const client = createClient({
  space: "9ylk4av8s4xe",
  environment: "master",
  accessToken: "BJLTb4zYBPTlg-aOqbBHPAFRPsr-H84eAiO9rFAKGTE",
});

async function main() {
  try {
    const entries = await client.getEntries({
      content_type: "testimonial", // Guessing the content type ID
      limit: 1,
    });

    if (entries.items.length > 0) {
      console.log("Found testimonial entry:");
      console.log(JSON.stringify(entries.items[0], null, 2));
      
      console.log("\nFields only:");
      console.log(JSON.stringify(entries.items[0].fields, null, 2));
    } else {
      console.log("No testimonial entries found. Trying to list content types...");
       const types = await client.getContentTypes();
       console.log("Available Content Types:");
       types.items.forEach(type => console.log(`- ${type.name} (${type.sys.id})`));
    }
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
}

main();
