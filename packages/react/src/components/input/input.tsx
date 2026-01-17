"use client";

import { Input as BaseInput } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { type InputVariants, inputVariants } from "./input.variants";

// Root
export interface InputProps extends InputVariants, BaseInput.Props {}

export const Input = ({ className, ...props }: InputProps) => {
  const styles = inputVariants();
  return <BaseInput className={cn(className, styles)} {...props} />;
};
