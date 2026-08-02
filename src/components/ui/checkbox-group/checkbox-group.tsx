"use client";

import "./checkbox-group.css";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import type React from "react";
import { cn } from "tailwind-variants";

import { CheckboxGroupContext } from "./checkbox-group.context";
import { checkboxGroupVariants, type CheckboxGroupVariants } from "./checkbox-group.variants";

export type CheckboxGroupProps = CheckboxGroupVariants &
  React.ComponentProps<typeof BaseCheckboxGroup>;

export const CheckboxGroupRoot = ({
  children,
  className,
  orientation,
  ...props
}: CheckboxGroupProps) => {
  const slots = checkboxGroupVariants({ orientation });

  return (
    <CheckboxGroupContext.Provider value={{ slots }}>
      <BaseCheckboxGroup className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseCheckboxGroup>
    </CheckboxGroupContext.Provider>
  );
};
