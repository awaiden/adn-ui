"use client";

import { cn } from "tailwind-variants";

import { inputVariants, type InputVariants } from "./input.variants";

export interface InputProps extends React.ComponentProps<"input">, InputVariants {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(inputVariants(), className)}
      {...props}
    />
  );
};
