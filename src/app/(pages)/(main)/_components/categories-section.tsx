import SectionTitle from "@/components/section-title";
import { Card } from "@/components/ui/card";
import { getCategories } from "@/lib/category";
import Link from "next/link";
import React from "react";

const CategoriesSection = async () => {
  const { categories } = await getCategories();

  return (
    <section>
      <Card className="p-4 md:p-6 space-y-8 md:space-y-10">
        <SectionTitle title="التصنيفات" />
        <div className="flex flex-col gap-4 md:gap-6 divide-y">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/posts?categoryId=${category._id}`}
              className="py-4 first-of-type:pt-0 font-semibold space-y-2"
            >
              <article>
                <h3 className="text-xl">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default CategoriesSection;
