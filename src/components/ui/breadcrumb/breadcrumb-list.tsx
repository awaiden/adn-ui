import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbListProps = React.ComponentProps<"ol">;

export const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => {
  const { slots } = useBreadcrumbContext();
  return <ol className={cn(slots.list(), className)} {...props} />;
};
