import { MoreHorizontal } from "lucide-react";
import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

export const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <span
      aria-hidden="true"
      className={cn(slots.ellipsis(), className)}
      role="presentation"
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
};
