"use client";

import "./textarea.css";
import type React from "react";
import { cn } from "@/lib/cn";

import { textareaVariants, type TextareaVariants } from "./textarea.variants";

export type TextareaProps = TextareaVariants & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaRoot = ({ className, variant, size, ...props }: TextareaProps) => {
  const slots = textareaVariants({ variant, size });

  return <textarea className={cn(slots.root(), className)} {...props} />;
};
