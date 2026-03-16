import { cn } from "@adn-ui/core";

import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbListProps = React.ComponentProps<"ol">;

export default function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  const { slots } = useBreadcrumbContext();

  return <ol data-slot="breadcrumb-list" className={cn(slots.list(), className)} {...props} />;
}
