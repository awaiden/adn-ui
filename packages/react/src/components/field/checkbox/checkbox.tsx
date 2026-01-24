"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Checkbox as PureCheckbox, type CheckboxProps as PureCheckboxProps } from "../../checkbox";
import { useField } from "../use-field";

export interface CheckboxProps extends PureCheckboxProps {}

export const Checkbox = ({ children, required, ...props }: CheckboxProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureCheckbox
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          checked={field.value}
          onCheckedChange={field.onChange}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        >
          {children}
        </PureCheckbox>
      )}
    />
  );
};
