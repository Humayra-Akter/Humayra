import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create Sanity client
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  token: process.env.REACT_APP_SANITY_TOKEN, 
  useCdn: true, 
});

// Builder for images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// DEBUG
console.log("Sanity projectId:", process.env.REACT_APP_SANITY_PROJECT_ID);
console.log("Dataset:", process.env.REACT_APP_SANITY_DATASET);
console.log("Token exists:", !!process.env.REACT_APP_SANITY_TOKEN);
