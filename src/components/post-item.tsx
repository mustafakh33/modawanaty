import { Post } from "@/types/interfaces";
import Link from "next/link";
import { FC } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "../sanity/lib/image";
import AuthorAvatar from "./author-avatar";

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <Card className="hover:-translate-y-1 duration-300 flex flex-col md:flex-row items-center">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={640}
          height={320}
          className="w-full aspect-video md:size-80 rounded-t-md md:rounded-te-none md:rounded-s-md shadow-sm"
        />
        <div className="p-2 md:p-4 space-y-4 md:space-y-6">
          <p className="text-sm py-0.5 px-4 bg-secondary w-fit rounded-md">
            {post.category.title}
          </p>
          <h4 className="text-xl font-semibold">{post.title}</h4>
          <p className="text-muted-foreground line-clamp-2">
            {post.description}
          </p>
          <AuthorAvatar
            authorImage={post.author.image}
            authorName={post.author.name}
            publishDate={post.publishedAt}
          />
        </div>
      </Card>
    </Link>
  );
};

export default PostItem;