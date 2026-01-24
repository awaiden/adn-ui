import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { checkboxGroupVariants, type CheckboxGroupVariants } from "./checkbox-group.variants";

export interface CheckboxGroupProps extends BaseCheckboxGroup.Props, CheckboxGroupVariants {
  orientation?: "horizontal" | "vertical";
}

export const CheckboxGroup = ({
  className,
  orientation = "vertical",
  ...props
}: CheckboxGroupProps) => {
  return (
    <BaseCheckboxGroup
      role='group'
      data-orientation={orientation}
      className={cn(checkboxGroupVariants(), className)}
      {...props}
    />
  );
};
