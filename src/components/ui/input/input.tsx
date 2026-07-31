"use client";

import "./input.css";

import type React from "react";

import { Input as BaseInput } from "@base-ui/react/input";
import { cn } from "tailwind-variants";

import { InputContext } from "./input.context";
import { inputVariants, type InputVariants } from "./input.variants";

export type InputProps = InputVariants & Omit<React.ComponentProps<typeof BaseInput>, "children">;

export const InputRoot = ({
  className,
  size,
  variant,
  children,
  dangerouslySetInnerHTML,
  ...props
}: InputProps & { children?: React.ReactNode; dangerouslySetInnerHTML?: any }) => {
  const slots = inputVariants({ size, variant });

  const cleanProps = { ...props };
  delete (cleanProps as any).children;
  delete (cleanProps as any).dangerouslySetInnerHTML;

  return (
    <InputContext.Provider value={{ slots }}>
      <BaseInput className={cn(slots.root(), className)} {...cleanProps} />
    </InputContext.Provider>
  );
};

export const Input = InputRoot;
