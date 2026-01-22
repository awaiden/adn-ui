import { LucideChevronRight } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { BreadcrumbsContext } from "./breadcrumbs.context";
import { type BreadcrumbsVariants, breadcrumbsVariants } from "./breadcrumbs.variants";
import { useBreadcrumbs } from "./use-breadcrumbs";

// Root
export interface BreadcrumbsRootProps extends BreadcrumbsVariants, React.ComponentProps<"nav"> {}

export const BreadcrumbsRoot = ({ className, ...props }: BreadcrumbsRootProps) => {
  const slots = useMemo(() => breadcrumbsVariants(), []);

  return (
    <BreadcrumbsContext value={{ slots }}>
      <nav
        className={cn(className, slots.root())}
        {...props}
      />
    </BreadcrumbsContext>
  );
};

// List
export interface BreadcrumbsListProps extends React.ComponentProps<"ol"> {}

export const BreadcrumbsList = ({ className, ...props }: BreadcrumbsListProps) => {
  const { slots } = useBreadcrumbs();

  return (
    <ol
      className={cn(className, slots.list())}
      {...props}
    />
  );
};

// Item
export interface BreadcrumbsItemProps extends React.ComponentProps<"li"> {}

export const BreadcrumbsItem = ({ className, ...props }: BreadcrumbsItemProps) => {
  const { slots } = useBreadcrumbs();
  return (
    <li
      className={cn(className, slots.item())}
      {...props}
    />
  );
};

// Separator
export interface BreadcrumbsSeparatorProps extends React.ComponentProps<"span"> {}

export const BreadcrumbsSeparator = ({
  className,
  children,
  ...props
}: BreadcrumbsSeparatorProps) => {
  const { slots } = useBreadcrumbs();
  return (
    <span
      className={cn(className, slots.separator())}
      {...props}
    >
      {children ?? <LucideChevronRight />}
    </span>
  );
};
