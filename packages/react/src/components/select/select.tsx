"use client";

import { cn } from "tailwind-variants";

import { selectVariants, type SelectVariants } from "./select.variants";

export interface SelectProps extends React.ComponentProps<"select">, SelectVariants {}

export const Select = ({ className, ...props }: SelectProps) => {
  return (
    <select
      className={cn(selectVariants(), className)}
      {...props}
    />
  );
};
