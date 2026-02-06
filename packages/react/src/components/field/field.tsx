"use client";

import { useId, useMemo } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import { cn } from "tailwind-variants";

import {
  Description as PureDescription,
  type DescriptionProps as PureDescriptionProps,
} from "../description";
import {
  ErrorMessage as PureErrorMessage,
  type ErrorMessageProps as PureErrorMessageProps,
} from "../error-message";
import { Label as PureLabel, type LabelProps as PureLabelProps } from "../label";
import { type FieldValue, FieldContext } from "./context";
import { fieldVariants, type FieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldRootProps extends React.ComponentProps<"div">, FieldVariants {
  name?: string;
  isRequired?: boolean;
}

export const FieldRoot = ({ className, name, isRequired, ...props }: FieldRootProps) => {
  const id = useId();
  const styles = fieldVariants();

  const value = useMemo<FieldValue>(
    () => ({
      name: name ?? id,
      isRequired,
    }),
    [name, id, isRequired],
  );

  return (
    <FieldContext value={value}>
      <div
        className={cn(styles.root(), className)}
        data-required={isRequired}
        {...props}
      />
    </FieldContext>
  );
};

export interface FieldLabelProps extends PureLabelProps {}

export const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {
  const { name, isRequired } = useField();
  const styles = fieldVariants();

  return (
    <PureLabel
      className={cn(styles.label(), className)}
      htmlFor={name}
      data-required={Boolean(isRequired)}
      {...props}
    >
      {children}
    </PureLabel>
  );
};

export interface FieldDescriptionProps extends PureDescriptionProps {}

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  const { isRequired } = useField();
  const styles = fieldVariants();

  return (
    <PureDescription
      className={cn(styles.description(), className)}
      data-required={isRequired}
      {...props}
    />
  );
};

export interface FieldErrorMessageProps extends PureErrorMessageProps {}

export const FieldErrorMessage = ({ className, ...props }: FieldErrorMessageProps) => {
  const { name, isRequired } = useField();
  const styles = fieldVariants();
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name });
  return (
    <PureErrorMessage
      className={cn(styles.error(), className)}
      aria-describedby={`${name}-error`}
      data-required={isRequired}
      {...props}
    >
      {errors[name] && (errors[name].message as React.ReactNode)}
    </PureErrorMessage>
  );
};

export interface FieldGroupProps extends React.ComponentProps<"div"> {}

export const FieldGroup = ({ className, ...props }: FieldGroupProps) => {
  const styles = fieldVariants();

  return (
    <div
      className={cn(styles.group(), className)}
      {...props}
    />
  );
};

export interface FieldPrefixProps extends React.ComponentProps<"div"> {}

export const FieldPrefix = ({ className, ...props }: FieldPrefixProps) => {
  const styles = fieldVariants();

  return (
    <div
      className={cn(styles.prefix(), className)}
      {...props}
    />
  );
};

export interface FieldSuffixProps extends React.ComponentProps<"div"> {}

export const FieldSuffix = ({ className, ...props }: FieldSuffixProps) => {
  const styles = fieldVariants();
  return (
    <div
      className={cn(styles.suffix(), className)}
      {...props}
    />
  );
};
