import "./breadcrumb.css";
import { BreadcrumbContext } from "./breadcrumb.context";
import { breadcrumbVariants, type BreadcrumbVariants } from "./breadcrumb.variants";

export type BreadcrumbRootProps = BreadcrumbVariants & React.ComponentProps<"nav">;

export const BreadcrumbRoot = ({ children, ...props }: BreadcrumbRootProps) => {
  const slots = breadcrumbVariants();

  return (
    <BreadcrumbContext value={{ slots }}>
      <nav aria-label="breadcrumb" {...props}>
        {children}
      </nav>
    </BreadcrumbContext>
  );
};
