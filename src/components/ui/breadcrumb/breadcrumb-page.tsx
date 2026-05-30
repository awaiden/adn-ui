import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb.context";

export type BreadcrumbPageProps = React.ComponentProps<"span">;

export const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => {
  const { slots } = useBreadcrumbContext();
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn(slots.page(), className)}
      role="link"
      {...props}
    />
  );
};
