"use client";

import { cn } from "tailwind-variants";

import { helperTextVariants, type HelperTextVariants } from "./helper-text.variants";

export interface HelperTextProps extends React.ComponentProps<"p">, HelperTextVariants {}

export const HelperText = ({ className, ...props }: HelperTextProps) => {
  return (
    <p
      className={cn(helperTextVariants(), className)}
      {...props}
    />
  );
};
