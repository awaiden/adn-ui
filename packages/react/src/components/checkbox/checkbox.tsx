import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { checkboxVariants, type CheckboxVariants } from "./checkbox.variants";

export interface CheckboxRootProps extends BaseCheckbox.Root.Props, CheckboxVariants {}
export const CheckboxRoot = ({ ...props }: CheckboxRootProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureCheckboxRoot {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureCheckboxRoot
      id={props.id ?? name}
      name={props.name ?? name}
      aria-invalid={Boolean(error)}
      aria-describedby={`${name}-error`}
      data-invalid={Boolean(error)}
      data-required={isRequired}
      required={props.required ?? isRequired}
      {...props}
    />
  );
};

export const PureCheckboxRoot = ({ className, ...props }: CheckboxRootProps) => {
  const { root } = checkboxVariants();

  return (
    <BaseCheckbox.Root
      className={cn(root(), className)}
      {...props}
    />
  );
};

export interface CheckboxIndicatorProps extends BaseCheckbox.Indicator.Props {}

export const CheckboxIndicator = ({ className, children, ...props }: CheckboxIndicatorProps) => {
  const { indicator } = checkboxVariants();

  return (
    <BaseCheckbox.Indicator
      className={cn(indicator(), className)}
      {...props}
    >
      {children ?? <LucideCheck />}
    </BaseCheckbox.Indicator>
  );
};
