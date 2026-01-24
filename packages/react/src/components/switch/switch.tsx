"use client";

import { Switch as BaseSwitch } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { switchVariants, type SwitchVariants } from "./switch.variants";

export interface SwitchProps extends BaseSwitch.Root.Props, SwitchVariants {}

export const SwitchRoot = ({ className, size, ...props }: SwitchProps) => {
  const slots = switchVariants({ size });

  return (
    <BaseSwitch.Root
      className={cn(slots.root(), className)}
      {...props}
    />
  );
};

export interface SwitchThumbProps extends BaseSwitch.Thumb.Props {}

export const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  const slots = switchVariants();

  return (
    <BaseSwitch.Thumb
      className={cn(slots.thumb(), className)}
      {...props}
    />
  );
};
