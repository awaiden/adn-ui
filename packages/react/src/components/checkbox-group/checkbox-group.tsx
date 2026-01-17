"use client";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { type CheckboxGroupVariants, checkboxGroupVariants } from "./checkbox-group.variants";

export interface CheckboxGroupProps extends CheckboxGroupVariants, BaseCheckboxGroup.Props {}

export const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
  const styles = checkboxGroupVariants();
  return <BaseCheckboxGroup className={cn(className, styles)} {...props} />;
};
