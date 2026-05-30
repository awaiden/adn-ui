import "./textarea.css";

import { cn } from "tailwind-variants";

import { textareaVariants, type TextareaVariants } from "./textarea.variants";

export type TextareaProps = React.ComponentProps<"textarea"> & TextareaVariants;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={cn(textareaVariants(), className)} {...props} />;
};
