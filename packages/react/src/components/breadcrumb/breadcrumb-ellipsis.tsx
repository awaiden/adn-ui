import { cn } from "@adn-ui/core";
import { Ellipsis } from "lucide-react";

import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

export default function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  const { slots } = useBreadcrumbContext();

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(slots.ellipsis(), className)}
      {...props}
    >
      <Ellipsis className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
