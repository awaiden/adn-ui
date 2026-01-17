"use client";

import { Radio as BaseRadio } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { RadioContext } from "./radio.context";
import { type RadioVariants, radioVariants } from "./radio.variants";
import { useRadio } from "./use-radio";

// Root
export interface RadioProps extends RadioVariants, BaseRadio.Root.Props {}

export const RadioRoot = ({ className, ...props }: RadioProps) => {
  const slots = useMemo(() => radioVariants({}), []);

  return (
    <RadioContext value={{ slots }}>
      <BaseRadio.Root className={cn(slots.root(), className)} {...props} />
    </RadioContext>
  );
};

export interface RadioIndicatorProps extends BaseRadio.Indicator.Props {}

export const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  const { slots } = useRadio();

  return <BaseRadio.Indicator className={cn(slots.indicator(), className)} {...props} />;
};
