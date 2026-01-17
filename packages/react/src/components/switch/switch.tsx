"use client";

import { Switch as BaseSwitch } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { SwitchContext } from "./switch.context";
import { type SwitchVariants, switchVariants } from "./switch.variants";
import { useSwitch } from "./use-switch";

// Root
export interface SwitchProps extends SwitchVariants, BaseSwitch.Root.Props {}

export const SwitchRoot = ({ className, size, ...props }: SwitchProps) => {
  const slots = useMemo(() => switchVariants({ size }), [size]);

  return (
    <SwitchContext.Provider value={{ slots }}>
      <BaseSwitch.Root className={cn(className, slots.root())} {...props} />
    </SwitchContext.Provider>
  );
};

// Thumb
export const SwitchThumb = ({ className, ...props }: BaseSwitch.Thumb.Props) => {
  const { slots } = useSwitch();

  return <BaseSwitch.Thumb className={cn(className, slots.thumb())} {...props} />;
};
