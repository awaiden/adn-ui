import "./input.css";

import { cn } from "tailwind-variants";

import { inputVariants, type InputVariants } from "./input.variants";

export type InputProps = InputVariants & React.ComponentProps<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(inputVariants(), className)} {...props} />;
};
