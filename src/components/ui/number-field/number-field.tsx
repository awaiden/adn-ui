"use client";

import "./number-field.css";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Minus, Plus } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { NumberFieldContext, useNumberFieldContext } from "./number-field.context";
import { numberFieldVariants, type NumberFieldVariants } from "./number-field.variants";

export type NumberFieldProps = NumberFieldVariants &
  React.ComponentProps<typeof BaseNumberField.Root>;

export const NumberFieldRoot = ({ children, className, size, ...props }: NumberFieldProps) => {
  const slots = numberFieldVariants({ size });

  return (
    <NumberFieldContext.Provider value={{ slots }}>
      <BaseNumberField.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseNumberField.Root>
    </NumberFieldContext.Provider>
  );
};

export type NumberFieldGroupProps = React.ComponentProps<typeof BaseNumberField.Group>;

export const NumberFieldGroup = ({ className, ...props }: NumberFieldGroupProps) => {
  const { slots } = useNumberFieldContext();
  return <BaseNumberField.Group className={cn(slots.group(), className)} {...props} />;
};

export type NumberFieldInputProps = React.ComponentProps<typeof BaseNumberField.Input>;

export const NumberFieldInput = ({
  className,
  children: _children,
  dangerouslySetInnerHTML: _dangerouslySetInnerHTML,
  ...props
}: NumberFieldInputProps & { children?: React.ReactNode; dangerouslySetInnerHTML?: any }) => {
  const { slots } = useNumberFieldContext();
  return <BaseNumberField.Input className={cn(slots.input(), className)} {...props} />;
};

export type NumberFieldDecrementProps = React.ComponentProps<typeof BaseNumberField.Decrement>;

export const NumberFieldDecrement = ({
  children,
  className,
  ...props
}: NumberFieldDecrementProps) => {
  const { slots } = useNumberFieldContext();
  return (
    <BaseNumberField.Decrement className={cn(slots.decrement(), className)} {...props}>
      {children ?? <Minus className="h-3.5 w-3.5" />}
    </BaseNumberField.Decrement>
  );
};

export type NumberFieldIncrementProps = React.ComponentProps<typeof BaseNumberField.Increment>;

export const NumberFieldIncrement = ({
  children,
  className,
  ...props
}: NumberFieldIncrementProps) => {
  const { slots } = useNumberFieldContext();
  return (
    <BaseNumberField.Increment className={cn(slots.increment(), className)} {...props}>
      {children ?? <Plus className="h-3.5 w-3.5" />}
    </BaseNumberField.Increment>
  );
};

export type NumberFieldScrubAreaProps = React.ComponentProps<typeof BaseNumberField.ScrubArea>;

export const NumberFieldScrubArea = ({ className, ...props }: NumberFieldScrubAreaProps) => {
  const { slots } = useNumberFieldContext();
  return <BaseNumberField.ScrubArea className={cn(slots.scrubArea(), className)} {...props} />;
};

export type NumberFieldScrubAreaCursorProps = React.ComponentProps<
  typeof BaseNumberField.ScrubAreaCursor
>;

export const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  const { slots } = useNumberFieldContext();
  return (
    <BaseNumberField.ScrubAreaCursor
      className={cn(slots.scrubAreaCursor(), className)}
      {...props}
    />
  );
};
