"use client";

import { cn } from "tailwind-variants";

import { type LinkVariants, linkVariants } from "./link.variants";

export interface LinkProps extends LinkVariants, React.ComponentProps<"a"> {}

export const Link = ({ className, variant, ...props }: LinkProps) => {
  const styles = linkVariants({ variant });

  return <a className={cn(className, styles)} {...props} />;
};
