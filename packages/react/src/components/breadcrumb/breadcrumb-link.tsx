import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbLinkProps = React.ComponentProps<"a">;

export default function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  const { slots } = useBreadcrumbContext();

  return <a data-slot="breadcrumb-link" className={cn(slots.link(), className)} {...props} />;
}
