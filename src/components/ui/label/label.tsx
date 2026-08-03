"use client";

import "./label.css";
import type React from "react";
import { cn } from "tailwind-variants";

import { labelVariants, type LabelVariants } from "./label.variants";

export type LabelProps = LabelVariants & React.LabelHTMLAttributes<HTMLLabelElement>;

export const LabelRoot = ({ className, size, ...props }: LabelProps) => {
  const slots = labelVariants({ size });

  return <label className={cn(slots.root(), className)} {...props} />;
};

export const Label = LabelRoot;
