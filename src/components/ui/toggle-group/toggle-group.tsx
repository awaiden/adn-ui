"use client";

import "./toggle-group.css";

import type React from "react";

import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cn } from "tailwind-variants";

import { ToggleGroupContext } from "./toggle-group.context";
import { toggleGroupVariants, type ToggleGroupVariants } from "./toggle-group.variants";
import { ToggleRoot } from "../toggle";

export type ToggleGroupProps = ToggleGroupVariants & React.ComponentProps<typeof BaseToggleGroup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toggle-group/content.md
 */
export const ToggleGroupRoot = ({
  children,
  className,
  orientation = "horizontal",
  variant = "default",
  ...props
}: ToggleGroupProps) => {
  const slots = toggleGroupVariants({ orientation, variant });

  return (
    <ToggleGroupContext.Provider value={{ slots }}>
      <BaseToggleGroup className={cn(slots.root(), className)} orientation={orientation} {...props}>
        {children}
      </BaseToggleGroup>
    </ToggleGroupContext.Provider>
  );
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toggle-group/content.md
 */
export const ToggleItem = ToggleRoot;
/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toggle-group/content.md
 */
export const ToggleGroupItem = ToggleRoot;
