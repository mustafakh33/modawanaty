import PostItem from "@/components/post-item";
import SectionTitle from "@/components/section-title";
import { getPosts } from "@/lib/post";
import { Metadata } from "next";
import React from "react";
import CategoriesFilter from "./_components/categories-filter";
import { getCategories } from "@/lib/category";
import { postsPerPage, revalidateTime } from "@/lib/utils";
import QueryPagination from "./_components/query-pagination";

export const revalidate = revalidateTime;

export const metadata: Metadata = {
  title: "مقالات مدونتي: اكتشف مواضيع متنوعة ومفيدة",
  description:
    "استعرض مقالات مدونتي لتجد مصادر إلهام ومعلومات قيمة في مجموعة متنوعة من المواضيع، بما في ذلك السفر والثقافة والتقنية والطعام وغيرها، مما يسهم في إثراء معرفتك وتوسيع آفاقك.",
};

interface PageProps {
  searchParams: { categoryId?: string; page?: string };
}

export default async function page({ searchParams }: PageProps) {
  const { categoryId, page } = searchParams;
  const { posts } = await getPosts(categoryId);
  const { categories } = await getCategories();
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPage = Number(page) || 1;

  const displayedPosts = posts.slice(
    postsPerPage * (currentPage - 1), // 0, 4 , 8 ....
    postsPerPage * currentPage // 4, 8 , 12 ....
  );

  return (
    <div className="space-y-8 md:space-y-12 pt-8">
      <section className="flex items-center justify-between gap-4">
        <SectionTitle title="المقالات" />
        <CategoriesFilter categories={categories} />
      </section>
      <section className="grid lg:grid-cols-2 gap-8">
        {displayedPosts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </section>
      <QueryPagination totalPages={totalPages} />
    </div>
  );
}