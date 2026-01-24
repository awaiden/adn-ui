"use client";

import { cn } from "tailwind-variants";

import { labelVariants, type LabelVariants } from "./label.variants";

export interface LabelProps extends React.ComponentProps<"label">, LabelVariants {}

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={cn(labelVariants(), className)}
      {...props}
    >
      {children}
    </label>
  );
};
