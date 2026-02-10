import { cn } from "tailwind-variants";

import { type LinkVariants, linkVariants } from "./link.variants";

export interface LinkProps extends LinkVariants, React.ComponentProps<"a"> {}

export const Link = ({ className, variant, children, ...props }: LinkProps) => {
  const styles = linkVariants({ variant });

  return (
    <a
      className={cn(className, styles)}
      {...props}
    >
      {children}
    </a>
  );
};
