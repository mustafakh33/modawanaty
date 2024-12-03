import { client } from "@/sanity/lib/client";
import { Category } from "@/types/interfaces";
// import { client } from "../../sanity/lib/client";

export async function getCategories() {
  const query = `
        *[_type=="category"]
    `;

  const categories: Category[] = await client.fetch(query);

  return { categories };
}