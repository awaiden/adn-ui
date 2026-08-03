"use client";

import "./toggle.css";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type React from "react";
import { cn } from "tailwind-variants";

import { toggleVariants, type ToggleVariants } from "./toggle.variants";

export type ToggleProps = ToggleVariants & React.ComponentProps<typeof BaseToggle>;

export const ToggleRoot = ({ children, className, variant, size, ...props }: ToggleProps) => {
  const slots = toggleVariants({ variant, size });

  return (
    <BaseToggle className={cn(slots.root(), className)} {...props}>
      {children}
    </BaseToggle>
  );
};

export const Toggle = ToggleRoot;

