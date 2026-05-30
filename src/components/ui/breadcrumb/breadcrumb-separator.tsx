import { ChevronRight } from "lucide-react";
import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <li
      aria-hidden="true"
      className={cn(slots.separator(), className)}
      role="presentation"
      {...props}
    >
      {children ?? <ChevronRight className="size-3.5" />}
    </li>
  );
};
