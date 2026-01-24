"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { cn } from "tailwind-variants";

import { checkboxVariants, type CheckboxVariants } from "./checkbox.variants";

export interface CheckboxProps extends BaseCheckbox.Root.Props, CheckboxVariants {}

export const Checkbox = ({ className, children, ...props }: CheckboxProps) => {
  const { root, indicator } = checkboxVariants();

  return (
    <BaseCheckbox.Root
      {...props}
      className={cn(root(), className)}
    >
      <BaseCheckbox.Indicator className={indicator()}>
        <LucideCheck />
      </BaseCheckbox.Indicator>
      {children}
    </BaseCheckbox.Root>
  );
};
