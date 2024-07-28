"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Pagination as ShadCnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Pagination = ({
  length,
  curr,
  setCurr,
}: {
  length: number;
  curr: number;
  setCurr: Dispatch<SetStateAction<number>>;
}) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  let content;
  if (length === 1) {
    content = (
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
    );
  }
  if (length === 2) {
    content = (
      <>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
      </>
    );
  }
  if (length > 2) {
    content = (
      <>
        {curr > 2 && length + 1 > curr && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {curr !== 1 && (
          <PaginationItem>
            <PaginationLink href="#">{curr - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{curr}</PaginationLink>
        </PaginationItem>
        {curr !== length && (
          <PaginationItem>
            <PaginationLink href="#">{curr + 1}</PaginationLink>
          </PaginationItem>
        )}
        {curr < length - 1 && length > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
      </>
    );
  }

  return (
    <ShadCnPagination>
      <PaginationContent>
        {curr !== 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}
        {content}
        {curr !== length && (
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </ShadCnPagination>
  );
};
