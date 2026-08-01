"use client";

import "./separator.css";
import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type React from "react";
import { cn } from "tailwind-variants";

import { SeparatorContext } from "./separator.context";
import { separatorVariants, type SeparatorVariants } from "./separator.variants";

export type SeparatorProps = SeparatorVariants & React.ComponentProps<typeof BaseSeparator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/separator/content.md
 */
export const SeparatorRoot = ({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) => {
  const slots = separatorVariants({ orientation });

  return (
    <SeparatorContext.Provider value={{ slots }}>
      <BaseSeparator className={cn(slots.root(), className)} orientation={orientation} {...props} />
    </SeparatorContext.Provider>
  );
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/separator/content.md
 */
export const Separator = SeparatorRoot;
