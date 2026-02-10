import { Input as BaseInput } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { inputVariants, type InputVariants } from "./input.variants";

export interface InputProps extends BaseInput.Props, InputVariants {}

export const Input = ({ ...props }: InputProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureInput {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureInput
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

export const PureInput = ({ className, ...props }: InputProps) => {
  const styles = inputVariants();

  return (
    <BaseInput
      className={cn(styles, className)}
      {...props}
    />
  );
};
