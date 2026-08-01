"use client";

import "./radio.css";

import type React from "react";

import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cn } from "tailwind-variants";

import { RadioContext, useRadioContext } from "./radio.context";
import { radioVariants, type RadioVariants } from "./radio.variants";

export type RadioGroupProps = RadioVariants & React.ComponentProps<typeof BaseRadioGroup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const RadioGroup = ({ children, className, size, ...props }: RadioGroupProps) => {
  const slots = radioVariants({ size });

  return (
    <RadioContext.Provider value={{ slots }}>
      <BaseRadioGroup className={cn(slots.group(), className)} {...props}>
        {children}
      </BaseRadioGroup>
    </RadioContext.Provider>
  );
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const RadioGroupRoot = RadioGroup;

export type RadioProps = React.ComponentProps<typeof BaseRadio.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const RadioRoot = ({ className, ...props }: RadioProps) => {
  const { slots } = useRadioContext();
  return <BaseRadio.Root className={cn(slots.root(), className)} {...props} />;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const RadioItem = RadioRoot;

export type RadioIndicatorProps = React.ComponentProps<typeof BaseRadio.Indicator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  const { slots } = useRadioContext();
  return <BaseRadio.Indicator className={cn(slots.indicator(), className)} {...props} />;
};
