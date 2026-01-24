"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Input as PureInput, type InputProps as PureInputProps } from "../../input";
import { useField } from "../use-field";

export interface InputProps extends PureInputProps {}

export const Input = ({ required, ...props }: InputProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, isDirty, isTouched, isValidating, error } }) => (
        <PureInput
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
