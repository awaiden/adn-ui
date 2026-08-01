"use client";

import "./fieldset.css";

import type React from "react";

import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import { cn } from "tailwind-variants";

import { FieldsetContext, useFieldsetContext } from "./fieldset.context";
import { fieldsetVariants, type FieldsetVariants } from "./fieldset.variants";

export type FieldsetProps = FieldsetVariants & React.ComponentProps<typeof BaseFieldset.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/fieldset/content.md
 */
export const FieldsetRoot = ({ children, className, variant, ...props }: FieldsetProps) => {
  const slots = fieldsetVariants({ variant });

  return (
    <FieldsetContext.Provider value={{ slots }}>
      <BaseFieldset.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseFieldset.Root>
    </FieldsetContext.Provider>
  );
};

export type FieldsetLegendProps = React.ComponentProps<typeof BaseFieldset.Legend>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/fieldset/content.md
 */
export const FieldsetLegend = ({ className, ...props }: FieldsetLegendProps) => {
  const { slots } = useFieldsetContext();
  return <BaseFieldset.Legend className={cn(slots.legend(), className)} {...props} />;
};
