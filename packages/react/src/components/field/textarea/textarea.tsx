"use client";

import { Controller, useFormContext } from "react-hook-form";

import { TextArea as PureTextArea, type TextAreaProps as PureTextAreaProps } from "../../textarea";
import { useField } from "../use-field";

export interface TextAreaProps extends PureTextAreaProps {}

export const TextArea = ({ required, ...props }: TextAreaProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, isDirty, isTouched, isValidating, error } }) => (
        <PureTextArea
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
