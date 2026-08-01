"use client";

import "./switch.css";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type React from "react";
import { cn } from "tailwind-variants";

import { SwitchContext, useSwitchContext } from "./switch.context";
import { switchVariants, type SwitchVariants } from "./switch.variants";

export type SwitchProps = SwitchVariants & React.ComponentProps<typeof BaseSwitch.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/switch/content.md
 */
export const SwitchRoot = ({ children, className, size, ...props }: SwitchProps) => {
  const slots = switchVariants({ size });

  return (
    <SwitchContext.Provider value={{ slots }}>
      <BaseSwitch.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseSwitch.Root>
    </SwitchContext.Provider>
  );
};

export type SwitchThumbProps = React.ComponentProps<typeof BaseSwitch.Thumb>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/switch/content.md
 */
export const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  const { slots } = useSwitchContext();
  return <BaseSwitch.Thumb className={cn(slots.thumb(), className)} {...props} />;
};
