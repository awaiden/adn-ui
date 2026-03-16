import { cn } from "@adn-ui/core";

import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbItemProps = React.ComponentProps<"li">;

export default function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  const { slots } = useBreadcrumbContext();

  return <li data-slot="breadcrumb-item" className={cn(slots.item(), className)} {...props} />;
}
