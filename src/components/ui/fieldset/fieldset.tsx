"use client";

import "./fieldset.css";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import type React from "react";
import { cn } from "@/lib/cn";

import { FieldsetContext, useFieldsetContext } from "./fieldset.context";
import { fieldsetVariants, type FieldsetVariants } from "./fieldset.variants";

export type FieldsetProps = FieldsetVariants & React.ComponentProps<typeof BaseFieldset.Root>;

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

export const FieldsetLegend = ({ className, ...props }: FieldsetLegendProps) => {
  const { slots } = useFieldsetContext();
  return <BaseFieldset.Legend className={cn(slots.legend(), className)} {...props} />;
};

export type FieldsetDescriptionProps = React.ComponentProps<"p">;

export const FieldsetDescription = ({ className, ...props }: FieldsetDescriptionProps) => {
  const { slots } = useFieldsetContext();
  return <p className={cn(slots.description(), className)} {...props} />;
};
