"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Radio as PureRadio } from "~/components/radio";

import { useField } from "../use-field";

export interface RadioProps extends React.ComponentProps<typeof PureRadio> {}

export const Radio = ({ className, value, required, ...props }: RadioProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureRadio
          id={`${name}-${value}`}
          className={className}
          {...props}
          onChange={() => field.onChange(value)}
          onBlur={field.onBlur}
          value={value}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
          required={isRequired || required}
        />
      )}
    />
  );
};
