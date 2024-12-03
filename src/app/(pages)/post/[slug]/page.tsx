import { buttonVariants } from "@/components/ui/button";
import { getPost, getRelatedPosts } from "@/lib/post";
import Link from "next/link";
import React from "react";
import BackButton from "../_components/back-button";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import AuthorSection from "@/components/author-section";
import { PortableText } from "@portabletext/react";
import SectionTitle from "@/components/section-title";
import RelatedPost from "../_components/related-post";
import { richTextComponents } from "@/components/rich-text-components";
import { notFound } from "next/navigation";
import { revalidateTime } from "@/lib/utils";

export const revalidate = revalidateTime;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // fetch data
  const { post } = await getPost(params.slug);

  if (!post) {
    return {
      title: `مقال غير موجود - مدونتي`,
      description: `المقال الذي تبحث عنه غير موجود أو تم تحويله.`,
    };
  }

  return {
    title: `${post.title} - مدونتي`,
    description: `${post.description}`,
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const { post } = await getPost(params.slug);
  const { relatedPosts } = await getRelatedPosts(post?.category._id, post?._id);

  if (!post) {
    return notFound();
  }
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* post content */}
        <section className="md:col-span-2 space-y-8 md:space-y-12">
          <div className="space-y-2 md:space-y-4">
            <BackButton />
            <div className="flex items-center gap-4 text-muted-foreground">
              <p>
                نشر في:{" "}
                {new Date(post.publishedAt).toLocaleDateString("ar-MA", {
                  dateStyle: "long",
                })}
              </p>
              <span>*</span>
              <Link
                href={`/posts?categoryId=${post.category._id}`}
                className={buttonVariants({ variant: "link" })}
              >
                {post.category?.title}
              </Link>
            </div>
            <small>مدة قراءة المقال: {post.readTime} دقائق</small>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-semibold text-3xl md:text-4xl text-primary">
              {post.title}
            </h3>
            <h5 className="text-muted-foreground text-lg">
              {post.description}
            </h5>
          </div>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={1440}
            height={260}
            className="w-[50rem] h-80 rounded-lg"
          />
          <div className="prose dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-headings:text-primary">
            <PortableText value={post.body} components={richTextComponents} />
          </div>
          <AuthorSection />
        </section>
        {/* related posts */}
        {relatedPosts.length ? (
          <section className="flex flex-col gap-6 md:gap-8 py-20">
            <SectionTitle title="ذات صلة" />
            <div className="flex flex-col gap-6 md:gap-8">
              {relatedPosts.map((post) => (
                <RelatedPost key={post._id} post={post} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}