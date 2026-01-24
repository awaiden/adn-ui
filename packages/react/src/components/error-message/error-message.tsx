"use client";

import { cn } from "tailwind-variants";

import { errorMessageVariants, type ErrorMessageVariants } from "./error-message.variants";

export interface ErrorMessageProps extends React.ComponentProps<"p">, ErrorMessageVariants {}

export const ErrorMessage = ({ className, ...props }: ErrorMessageProps) => {
  return (
    <p
      className={cn(errorMessageVariants(), className)}
      {...props}
    />
  );
};
