"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useField } from "../field";
import { textareaVariants, type TextareaVariants } from "./textarea.variants";

export interface TextareaProps extends React.ComponentProps<"textarea">, TextareaVariants {}

export const Textarea = (props: TextareaProps) => {
  const context = useFormContext();

  if (context) {
    return <ControlledTextarea {...props} />;
  }

  return <PureTextarea {...props} />;
};

export const PureTextarea = ({ className, ...props }: TextareaProps) => {
  const styles = textareaVariants();
  return (
    <textarea
      className={cn(styles, className)}
      {...props}
    />
  );
};

export const ControlledTextarea = ({ ...props }: TextareaProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureTextarea
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
