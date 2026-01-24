"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Select as PureSelect, type SelectProps as PureSelectProps } from "../../select";
import { useField } from "../use-field";

export interface SelectProps extends PureSelectProps {}

export const Select = ({ required, ...props }: SelectProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, isDirty, isTouched, isValidating, error } }) => (
        <PureSelect
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          data-invalid={Boolean(invalid)}
          data-dirty={Boolean(isDirty)}
          data-touched={Boolean(isTouched)}
          data-validating={Boolean(isValidating)}
          data-error={Boolean(error)}
        />
      )}
    />
  );
};
