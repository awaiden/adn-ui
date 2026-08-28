"use client";

import "./pagination.css";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { PaginationContext, usePaginationContext } from "./pagination.context";
import { paginationVariants, type PaginationVariants } from "./pagination.variants";

export type PaginationProps = PaginationVariants & React.ComponentProps<"nav">;

export const PaginationRoot = ({ children, className, size, ...props }: PaginationProps) => {
  const slots = paginationVariants({ size });

  return (
    <PaginationContext.Provider value={{ slots }}>
      <nav
        aria-label="pagination"
        className={cn(slots.root(), className)}
        {...props}
      >
        {children}
      </nav>
    </PaginationContext.Provider>
  );
};

export type PaginationContentProps = React.ComponentProps<"ul">;

export const PaginationContent = ({ className, ...props }: PaginationContentProps) => {
  const { slots } = usePaginationContext();
  return <ul className={cn(slots.content(), className)} {...props} />;
};

export type PaginationItemProps = React.ComponentProps<"li">;

export const PaginationItem = ({ className, ...props }: PaginationItemProps) => {
  const { slots } = usePaginationContext();
  return <li className={cn(slots.item(), className)} {...props} />;
};

export type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

export const PaginationLink = ({
  className,
  isActive,
  "aria-current": ariaCurrent,
  ...props
}: PaginationLinkProps) => {
  const { slots } = usePaginationContext();
  return (
    <a
      aria-current={isActive ? (ariaCurrent ?? "page") : undefined}
      className={cn(
        slots.link(),
        isActive && "pagination__link--active",
        className
      )}
      {...props}
    />
  );
};

export type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink>;

export const PaginationPrevious = ({
  className,
  children,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    {children ?? (
      <>
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </>
    )}
  </PaginationLink>
);

export type PaginationNextProps = React.ComponentProps<typeof PaginationLink>;

export const PaginationNext = ({
  className,
  children,
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    {children ?? (
      <>
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </>
    )}
  </PaginationLink>
);

export type PaginationEllipsisProps = React.ComponentProps<"span">;

export const PaginationEllipsis = ({
  className,
  children,
  ...props
}: PaginationEllipsisProps) => {
  const { slots } = usePaginationContext();
  return (
    <span
      aria-hidden="true"
      className={cn(slots.ellipsis(), className)}
      {...props}
    >
      {children ?? <MoreHorizontal className="h-4 w-4" />}
      <span className="sr-only">More pages</span>
    </span>
  );
};
