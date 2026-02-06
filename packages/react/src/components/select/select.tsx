"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useField } from "../field";
import { selectVariants, type SelectVariants } from "./select.variants";

export interface SelectProps extends React.ComponentProps<"select">, SelectVariants {}

export const Select = (props: SelectProps) => {
  const context = useFormContext();

  if (context) {
    return <ControlledSelect {...props} />;
  }

  return <PureSelect {...props} />;
};

export const PureSelect = ({ className, ...props }: SelectProps) => {
  const styles = selectVariants();

  return (
    <select
      className={cn(styles, className)}
      {...props}
    />
  );
};

export const ControlledSelect = ({ ...props }: SelectProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureSelect
          id={name}
          {...props}
          {...field}
          required={isRequired || props.required}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        />
      )}
    />
  );
};
