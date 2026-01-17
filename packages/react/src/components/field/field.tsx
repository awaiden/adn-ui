"use client";

import { Field as BaseField } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { FieldContext } from "./field.context";
import { type FieldVariants, fieldVariants } from "./field.variants";
import { useField } from "./use-field";

// Root
export interface FieldRootProps extends FieldVariants, BaseField.Root.Props {
  required?: boolean;
}

export const FieldRoot = ({ className, required, ...props }: FieldRootProps) => {
  const slots = useMemo(() => fieldVariants({}), []);

  return (
    <FieldContext value={{ required, slots }}>
      <BaseField.Root className={cn(className, slots.root())} data-required={required} {...props} />
    </FieldContext>
  );
};

// Label
export interface FieldLabelProps extends BaseField.Label.Props {}
export const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  const { slots } = useField();

  return <BaseField.Label className={cn(className, slots.label())} {...props} />;
};

// Control
export interface FieldControlProps extends BaseField.Control.Props {}
export const FieldControl = ({ className, ...props }: FieldControlProps) => {
  const { slots, required } = useField();

  return (
    <BaseField.Control className={cn(className, slots.control())} required={required} {...props} />
  );
};

// Description
export interface FieldDescriptionProps extends BaseField.Description.Props {}
export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  const { slots } = useField();

  return <BaseField.Description className={cn(className, slots.description())} {...props} />;
};

// Error
export interface FieldErrorProps extends BaseField.Error.Props {}
export const FieldError = ({ className, ...props }: FieldErrorProps) => {
  const { slots } = useField();

  return <BaseField.Error className={cn(className, slots.error())} {...props} />;
};
