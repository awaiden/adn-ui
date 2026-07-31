"use client";

import "./checkbox.css";

import type React from "react";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cn } from "tailwind-variants";

import { CheckboxContext, useCheckboxContext } from "./checkbox.context";
import { checkboxVariants, type CheckboxVariants } from "./checkbox.variants";

export type CheckboxProps = CheckboxVariants & React.ComponentProps<typeof BaseCheckbox.Root>;

export const CheckboxRoot = ({ children, className, size, variant, ...props }: CheckboxProps) => {
  const slots = checkboxVariants({ size, variant });

  return (
    <CheckboxContext.Provider value={{ slots }}>
      <BaseCheckbox.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseCheckbox.Root>
    </CheckboxContext.Provider>
  );
};

export type CheckboxIndicatorProps = React.ComponentProps<typeof BaseCheckbox.Indicator>;

export const CheckboxIndicator = ({ children, className, ...props }: CheckboxIndicatorProps) => {
  const { slots } = useCheckboxContext();
  return (
    <BaseCheckbox.Indicator className={cn(slots.indicator(), className)} {...props}>
      {children ?? (
        <svg
          className="h-full w-full stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </BaseCheckbox.Indicator>
  );
};
