"use client";

import { NumberField as BaseNumberField } from "@base-ui/react";
import { LucideChevronsLeftRight, LucideMinus, LucidePlus } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { NumberFieldContext } from "./number-field.context";
import { type NumberFieldVariants, numberFieldVariants } from "./number-field.variants";
import { useNumberField } from "./use-number-field";

export interface NumberFieldProps extends NumberFieldVariants, BaseNumberField.Root.Props {}

export const NumberFieldRoot = ({ className, ...props }: NumberFieldProps) => {
  const slots = useMemo(() => numberFieldVariants(), []);
  return (
    <NumberFieldContext value={{ slots }}>
      <BaseNumberField.Root className={cn(className, slots.root())} {...props} />
    </NumberFieldContext>
  );
};

// ScrubArea
export interface NumberFieldScrubAreaProps extends BaseNumberField.ScrubArea.Props {}
export const NumberFieldScrubArea = ({ className, ...props }: NumberFieldScrubAreaProps) => {
  const { slots } = useNumberField();
  return <BaseNumberField.ScrubArea className={cn(slots.scrubArea(), className)} {...props} />;
};

export interface NumberFieldGroupProps extends BaseNumberField.Group.Props {}
export const NumberFieldGroup = ({ className, ...props }: NumberFieldGroupProps) => {
  const { slots } = useNumberField();
  return <BaseNumberField.Group className={cn(slots.group(), className)} {...props} />;
};

// ScrubAreaCursor
export interface NumberFieldScrubAreaCursorProps extends BaseNumberField.ScrubAreaCursor.Props {}
export const NumberFieldScrubAreaCursor = ({
  className,
  children,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  const { slots } = useNumberField();
  return (
    <BaseNumberField.ScrubAreaCursor className={cn(slots.scrubAreaCursor(), className)} {...props}>
      {children ?? <LucideChevronsLeftRight />}
    </BaseNumberField.ScrubAreaCursor>
  );
};

// Decrement
export interface NumberFieldDecrementProps extends BaseNumberField.Decrement.Props {}
export const NumberFieldDecrement = ({
  className,
  children,
  ...props
}: NumberFieldDecrementProps) => {
  const { slots } = useNumberField();
  return (
    <BaseNumberField.Decrement className={cn(slots.decrement(), className)} {...props}>
      {children ?? <LucideMinus />}
    </BaseNumberField.Decrement>
  );
};

// Input
export interface NumberFieldInputProps extends BaseNumberField.Input.Props {}
export const NumberFieldInput = ({ className, ...props }: NumberFieldInputProps) => {
  const { slots } = useNumberField();
  return <BaseNumberField.Input className={cn(slots.input(), className)} {...props} />;
};

// Increment
export interface NumberFieldIncrementProps extends BaseNumberField.Increment.Props {}
export const NumberFieldIncrement = ({
  className,
  children,
  ...props
}: NumberFieldIncrementProps) => {
  const { slots } = useNumberField();
  return (
    <BaseNumberField.Increment className={cn(slots.increment(), className)} {...props}>
      {children ?? <LucidePlus />}
    </BaseNumberField.Increment>
  );
};
