"use client";

import { Fieldset as BaseFieldset } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { FieldsetContext } from "./fieldset.context";
import { type FieldsetVariants, fieldsetVariants } from "./fieldset.variants";
import { useFieldset } from "./use-fieldset";

// Root
export interface FieldsetProps extends FieldsetVariants, BaseFieldset.Root.Props {}

export const FieldsetRoot = ({ className, ...props }: FieldsetProps) => {
  const slots = useMemo(() => fieldsetVariants(), []);

  return (
    <FieldsetContext value={{ slots }}>
      <BaseFieldset.Root className={cn(className, slots.root())} {...props} />
    </FieldsetContext>
  );
};

// Legend
export interface FieldsetLegendProps extends BaseFieldset.Legend.Props {}

export const FieldsetLegend = ({ className, ...props }: FieldsetLegendProps) => {
  const { slots } = useFieldset();
  return <BaseFieldset.Legend className={cn(slots.legend(), className)} {...props} />;
};

// Exports
