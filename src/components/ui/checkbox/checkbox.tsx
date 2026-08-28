"use client";

import "./checkbox.css";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

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
      {children ?? <Check className="h-full w-full stroke-[3]" />}
    </BaseCheckbox.Indicator>
  );
};
