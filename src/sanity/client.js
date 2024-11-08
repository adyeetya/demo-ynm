import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: "a298w36s",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { client, urlFor };
