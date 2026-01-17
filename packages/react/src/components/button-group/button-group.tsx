"use client";

import { cn } from "tailwind-variants";

import { type ButtonGroupVariants, buttonGroupVariants } from "./button-group.variants";

// Root
export interface ButtonGroupProps extends ButtonGroupVariants, React.ComponentProps<"div"> {}

export const ButtonGroup = ({ className, ...props }: ButtonGroupProps) => {
  const styles = buttonGroupVariants();
  return <div className={cn(className, styles)} {...props} />;
};
