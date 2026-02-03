import { createClient } from "contentful";

const client = createClient({
  space: "9ylk4av8s4xe",
  environment: "master",
  accessToken: "BJLTb4zYBPTlg-aOqbBHPAFRPsr-H84eAiO9rFAKGTE",
});

async function main() {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      limit: 1,
    });

    if (entries.items.length > 0) {
      console.log("Found entry:");
      console.log(JSON.stringify(entries.items[0], null, 2));
      
      // Also log just the fields for easier reading
      console.log("\nFields only:");
      console.log(JSON.stringify(entries.items[0].fields, null, 2));
    } else {
      console.log("No blog posts found.");
    }
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
}

main();
