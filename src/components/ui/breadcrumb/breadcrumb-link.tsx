import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbLinkProps = React.ComponentProps<"a">;

export const BreadcrumbLink = ({ className, ...props }: BreadcrumbLinkProps) => {
  const { slots } = useBreadcrumbContext();
  return <a className={cn(slots.link(), className)} {...props} />;
};
