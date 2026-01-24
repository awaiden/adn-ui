"use client";

import { Radio as BaseRadio } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { radioVariants, type RadioVariants } from "./radio.variants";

export interface RadioProps extends RadioVariants, BaseRadio.Root.Props {}

export const Radio = ({ className, ...props }: RadioProps) => {
  const slots = radioVariants();

  return (
    <BaseRadio.Root
      className={cn(slots.root(), className)}
      {...props}
    />
  );
};

export interface RadioIndicatorProps extends BaseRadio.Indicator.Props {}

export const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  const slots = radioVariants();

  return (
    <BaseRadio.Indicator
      className={cn(slots.indicator(), className)}
      {...props}
    />
  );
};
