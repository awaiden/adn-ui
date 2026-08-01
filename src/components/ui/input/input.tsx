"use client";

import "./input.css";
import { Input as BaseInput } from "@base-ui/react/input";
import type React from "react";
import { cn } from "tailwind-variants";

import { InputContext } from "./input.context";
import { inputVariants, type InputVariants } from "./input.variants";

export type InputProps = InputVariants & Omit<React.ComponentProps<typeof BaseInput>, "children">;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/input/content.md
 */
export const InputRoot = ({
  className,
  size,
  variant,
  children: _children,
  dangerouslySetInnerHTML: _dangerouslySetInnerHTML,
  ...props
}: InputProps & { children?: React.ReactNode; dangerouslySetInnerHTML?: any }) => {
  const slots = inputVariants({ size, variant });

  return (
    <InputContext.Provider value={{ slots }}>
      <BaseInput className={cn(slots.root(), className)} {...props} />
    </InputContext.Provider>
  );
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/input/content.md
 */
export const Input = InputRoot;
