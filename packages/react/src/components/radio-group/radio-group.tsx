"use client";

import { RadioGroup as BaseRadioGroup } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { radioGroupVariants, type RadioGroupVariants } from "./radio-group.variants";

export interface RadioGroupProps extends RadioGroupVariants, BaseRadioGroup.Props {
  orientation?: "horizontal" | "vertical";
}

export const RadioGroup = ({ className, orientation = "vertical", ...props }: RadioGroupProps) => {
  const styles = radioGroupVariants({ orientation });

  return (
    <BaseRadioGroup
      data-orientation={orientation}
      className={cn(styles, className)}
      {...props}
    />
  );
};
