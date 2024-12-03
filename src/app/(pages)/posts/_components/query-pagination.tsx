"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";

interface QueryPaginationProps {
  totalPages: number;
}

const QueryPagination: FC<QueryPaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* previous page */}
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(prevPage)} />
          </PaginationItem>
        ) : null}
        {/* pages */}
        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem className="hidden sm:inline-block" key={index}>
              <PaginationLink
                href={createPageUrl(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        {/* next page */}
        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageUrl(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;