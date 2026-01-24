"use client";

import { useFormContext } from "react-hook-form";

import {
  ErrorMessage as PureErrorMessage,
  type ErrorMessageProps as PureErrorMessageProps,
} from "../../error-message";
import { useField } from "../use-field";

export interface ErrorMessageProps extends PureErrorMessageProps {}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { name, isRequired } = useField();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <PureErrorMessage
      aria-describedby={`${name}-error`}
      data-required={isRequired}
      {...props}
    >
      {errors[name] && (errors[name]?.message as React.ReactNode)}
    </PureErrorMessage>
  );
};
