import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbItemProps = React.ComponentProps<"li">;

export const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => {
  const { slots } = useBreadcrumbContext();
  return <li className={cn(slots.item(), className)} {...props} />;
};
