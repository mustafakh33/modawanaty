import Image from "next/image";
import { urlFor } from "../sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const richTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource }) => (
      <Image
        src={urlFor(value).url()}
        alt="post image"
        width={720}
        height={440}
        className="rounded-lg max-h-96"
      />
    ),
  },
};