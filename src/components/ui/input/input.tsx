"use client";

import "./input.css";
import { Input as BaseInput } from "@base-ui/react/input";
import type React from "react";
import { cn } from "tailwind-variants";

import { InputContext } from "./input.context";
import { inputVariants, type InputVariants } from "./input.variants";

export type InputProps = InputVariants & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export const InputRoot = ({ className, size, variant, ...props }: InputProps) => {
  const slots = inputVariants({ size, variant });

  return (
    <InputContext.Provider value={{ slots }}>
      <BaseInput className={cn(slots.root(), className)} {...props} />
    </InputContext.Provider>
  );
};

export const Input = InputRoot;
