"use client";

import { cn } from "tailwind-variants";

import { textareaVariants, type TextareaVariants } from "./textarea.variants";

export interface TextAreaProps extends React.ComponentProps<"textarea">, TextareaVariants {}

export const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(textareaVariants(), className)}
      {...props}
    />
  );
};
