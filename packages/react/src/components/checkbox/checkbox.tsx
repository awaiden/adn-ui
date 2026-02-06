"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useField } from "../field";
import { checkboxVariants, type CheckboxVariants } from "./checkbox.variants";

export interface CheckboxRootProps extends BaseCheckbox.Root.Props, CheckboxVariants {}

export const CheckboxRoot = (props: CheckboxRootProps) => {
  const context = useFormContext();

  if (context) {
    return <ControlledCheckbox {...props} />;
  }

  return <PureCheckbox {...props} />;
};

export const PureCheckbox = ({ className, ...props }: CheckboxRootProps) => {
  const { root } = checkboxVariants();

  return (
    <BaseCheckbox.Root
      className={cn(root(), className)}
      {...props}
    />
  );
};

export const ControlledCheckbox = ({ ...props }: CheckboxRootProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field }, fieldState: { invalid, error } }) => (
        <PureCheckbox
          id={name}
          {...props}
          {...field}
          checked={Boolean(value)}
          onCheckedChange={onChange}
          required={isRequired || props.required}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        />
      )}
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
