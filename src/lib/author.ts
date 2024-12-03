import { Author } from "@/types/interfaces";
import { client } from "../sanity/lib/client";

export async function getAuthor() {
  const query = `
        *[_type=="author"][0]
    `;

  const author: Author = await client.fetch(query);
  return { author };
}