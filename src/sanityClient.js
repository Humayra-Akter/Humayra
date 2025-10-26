import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
});
console.log("Project ID:", process.env.REACT_APP_SANITY_PROJECT_ID);
console.log("Dataset:", process.env.REACT_APP_SANITY_DATASET);
console.log("API Version:", process.env.REACT_APP_SANITY_API_VERSION);

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
