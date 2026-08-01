"use client";

import "./toggle.css";

import type React from "react";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cn } from "tailwind-variants";

import { ToggleContext } from "./toggle.context";
import { toggleVariants, type ToggleVariants } from "./toggle.variants";

export type ToggleProps = ToggleVariants & React.ComponentProps<typeof BaseToggle>;

export const ToggleRoot = ({ children, className, variant, size, ...props }: ToggleProps) => {
  const slots = toggleVariants({ variant, size });

  return (
    <ToggleContext.Provider value={{ slots }}>
      <BaseToggle className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseToggle>
    </ToggleContext.Provider>
  );
};
