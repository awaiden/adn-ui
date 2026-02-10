import { useId, useMemo } from "react";
import { cn } from "tailwind-variants";

import { Label as PureLabel, type LabelProps as PureLabelProps } from "../label";
import { type FieldContextValue, FieldContext } from "./context";
import { fieldVariants, type FieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldRootProps
  extends React.ComponentProps<"div">, FieldVariants, FieldContextValue {}

export const FieldRoot = ({ className, name, isRequired, error, ...props }: FieldRootProps) => {
  const id = useId();
  const styles = fieldVariants();

  const value = useMemo<FieldContextValue>(
    () => ({
      name: name ?? id,
      isRequired,
      error,
    }),
    [name, id, isRequired, error],
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

export interface FieldDescriptionProps extends React.ComponentProps<"p"> {}

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  const { isRequired } = useField();
  const styles = fieldVariants();

  return (
    <p
      className={cn(styles.description(), className)}
      data-required={isRequired}
      {...props}
    />
  );
};

export interface FieldErrorMessageProps extends React.ComponentProps<"p"> {}

export const FieldErrorMessage = ({ className, children, ...props }: FieldErrorMessageProps) => {
  const { name, isRequired, error } = useField();
  const styles = fieldVariants();

  if (!error) {
    return null;
  }

  return (
    <p
      className={cn(styles.error(), className)}
      aria-describedby={`${name}-error`}
      data-required={isRequired}
      {...props}
    >
      {(children ?? typeof error === "string") ? error : null}
    </p>
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
