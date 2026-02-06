"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useField } from "../field";
import { inputVariants, type InputVariants } from "./input.variants";

export interface InputProps extends React.ComponentProps<"input">, InputVariants {}

export const Input = (props: InputProps) => {
  const context = useFormContext();

  if (context) {
    return <ControlledInput {...props} />;
  }

  return <PureInput {...props} />;
};

const PureInput = ({ className, ...props }: InputProps) => {
  const styles = inputVariants();

  return (
    <input
      className={cn(styles, className)}
      {...props}
    />
  );
};

const ControlledInput = ({ ...props }: InputProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  const finalRequired = isRequired || props.required;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureInput
          id={name}
          {...props}
          {...field}
          required={finalRequired}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        />
      )}
    />
  );
};
