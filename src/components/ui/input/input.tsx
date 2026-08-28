"use client";

import "./input.css";
import { Input as BaseInput } from "@base-ui/react/input";
import type React from "react";
import { cn } from "@/lib/cn";

import { inputVariants, type InputVariants } from "./input.variants";

export type InputProps = InputVariants & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export const InputRoot = ({ className, size, variant, ...props }: InputProps) => {
  const slots = inputVariants({ size, variant });

  return <BaseInput className={cn(slots.root(), className)} {...props} />;
};

export const Input = InputRoot;
