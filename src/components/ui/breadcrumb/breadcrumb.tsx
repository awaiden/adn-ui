"use client";

import "./breadcrumb.css";

import type React from "react";

import { cn } from "tailwind-variants";

import { BreadcrumbContext, useBreadcrumbContext } from "./breadcrumb.context";
import { breadcrumbVariants, type BreadcrumbVariants } from "./breadcrumb.variants";

export type BreadcrumbProps = BreadcrumbVariants & React.ComponentProps<"nav">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbRoot = ({ children, className, ...props }: BreadcrumbProps) => {
  const slots = breadcrumbVariants();

  return (
    <BreadcrumbContext.Provider value={{ slots }}>
      <nav aria-label="breadcrumb" className={cn(slots.root(), className)} {...props}>
        {children}
      </nav>
    </BreadcrumbContext.Provider>
  );
};

export type BreadcrumbListProps = React.ComponentProps<"ol">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => {
  const { slots } = useBreadcrumbContext();
  return <ol className={cn(slots.list(), className)} {...props} />;
};

export type BreadcrumbItemProps = React.ComponentProps<"li">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => {
  const { slots } = useBreadcrumbContext();
  return <li className={cn(slots.item(), className)} {...props} />;
};

export type BreadcrumbLinkProps = React.ComponentProps<"a">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbLink = ({ className, ...props }: BreadcrumbLinkProps) => {
  const { slots } = useBreadcrumbContext();
  return <a className={cn(slots.link(), className)} {...props} />;
};

export type BreadcrumbPageProps = React.ComponentProps<"span">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(slots.page(), className)}
      {...props}
    />
  );
};

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(slots.separator(), className)}
      {...props}
    >
      {children ?? "/"}
    </li>
  );
};

export type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/breadcrumb/content.md
 */
export const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(slots.ellipsis(), className)}
      {...props}
    >
      …
    </span>
  );
};
