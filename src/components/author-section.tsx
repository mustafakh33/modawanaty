// import React from 'react'

// const AuthorSection  = () => {
//   return (
//     <div>author-section</div>
//   )
// }

// export default AuthorSection ;


import React from "react";
import { Card } from "./ui/card";
import { getAuthor } from "@/lib/author";
import { Avatar, AvatarImage } from "./ui/avatar";
import { urlFor } from "../sanity/lib/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Facebook, Twitter } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { richTextComponents } from "./rich-text-components";

const AuthorSection = async () => {
  const { author } = await getAuthor();

  return (
    <section>
      <Card className="p-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-4 md:gap-6">
        <Avatar>
          <AvatarImage src={urlFor(author.image).url()} />
        </Avatar>
        <h3 className="text-xl md:text-2xl font-semibold">{author.name}</h3>
        <div className="prose dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-headings:text-primary">
          <PortableText value={author.bio} components={richTextComponents} />
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={author.facebook!}
            target="_blank"
            className={buttonVariants({ variant: "secondary", size: "icon" })}
          >
            <Facebook className="size-6 text-muted-foreground" />
          </Link>
          <Link
            href={author.twitter!}
            target="_blank"
            className={buttonVariants({ variant: "secondary", size: "icon" })}
          >
            <Twitter className="size-6 text-muted-foreground" />
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default AuthorSection;