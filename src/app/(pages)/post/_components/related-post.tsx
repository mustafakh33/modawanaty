import { Post } from "@/types/interfaces";
import Link from "next/link";
import { FC } from "react";

interface RelatedPostProps {
  post: Post;
}

const RelatedPost: FC<RelatedPostProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <article className="space-y-1">
        <p className="text-sm py-0.5 px-3 rounded-xl bg-primary text-white w-fit">
          {post.category.title}
        </p>
        <h3 className="text-lg md:text-xl font-semibold">{post.title}</h3>
        <div className="flex items-center font-semibold gap-2">
          <h6 className="text-sm">{post.author.name}</h6>
          <small className="text-muted-foreground">
            - {new Date(post.publishedAt).toLocaleDateString()}
          </small>
        </div>
      </article>
    </Link>
  );
};

export default RelatedPost;