"use client";

import "./field.css";

import type React from "react";

import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "tailwind-variants";

import { FieldContext, useFieldContext } from "./field.context";
import { fieldVariants, type FieldVariants } from "./field.variants";

export type FieldProps = FieldVariants & React.ComponentProps<typeof BaseField.Root>;

export const FieldRoot = ({ children, className, size, ...props }: FieldProps) => {
  const slots = fieldVariants({ size });

  return (
    <FieldContext.Provider value={{ slots }}>
      <BaseField.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseField.Root>
    </FieldContext.Provider>
  );
};

export type FieldLabelProps = React.ComponentProps<typeof BaseField.Label>;

export const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  const { slots } = useFieldContext();
  return <BaseField.Label className={cn(slots.label(), className)} {...props} />;
};

export type FieldControlProps = React.ComponentProps<typeof BaseField.Control>;

export const FieldControl = ({ className, ...props }: FieldControlProps) => {
  const { slots } = useFieldContext();
  return <BaseField.Control className={cn(slots.control(), className)} {...props} />;
};

export type FieldErrorProps = React.ComponentProps<typeof BaseField.Error>;

export const FieldError = ({ className, ...props }: FieldErrorProps) => {
  const { slots } = useFieldContext();
  return <BaseField.Error className={cn(slots.error(), className)} {...props} />;
};

export type FieldDescriptionProps = React.ComponentProps<typeof BaseField.Description>;

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  const { slots } = useFieldContext();
  return <BaseField.Description className={cn(slots.description(), className)} {...props} />;
};

export type FieldItemProps = React.ComponentProps<typeof BaseField.Item>;

export const FieldItem = ({ className, ...props }: FieldItemProps) => {
  const { slots } = useFieldContext();
  return <BaseField.Item className={cn(slots.item(), className)} {...props} />;
};

export type FieldValidityProps = React.ComponentProps<typeof BaseField.Validity>;

export const FieldValidity = (props: FieldValidityProps) => {
  return <BaseField.Validity {...props} />;
};
