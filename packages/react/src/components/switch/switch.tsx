"use client";

import { Switch as BaseSwitch } from "@base-ui/react";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useField } from "../field";
import { switchVariants, type SwitchVariants } from "./switch.variants";

export interface SwitchRootProps extends BaseSwitch.Root.Props, SwitchVariants {}

export const SwitchRoot = (props: SwitchRootProps) => {
  const context = useFormContext();

  if (context) {
    return <ControlledSwitchRoot {...props} />;
  }

  return <PureSwitchRoot {...props} />;
};

export const PureSwitchRoot = ({ className, size, ...props }: SwitchRootProps) => {
  const slots = useMemo(() => switchVariants({ size }), [size]);

  return (
    <BaseSwitch.Root
      className={cn(slots.root(), className)}
      {...props}
    />
  );
};

export const ControlledSwitchRoot = (props: SwitchRootProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field }, fieldState: { invalid, error } }) => (
        <PureSwitchRoot
          id={name}
          {...props}
          {...field}
          checked={Boolean(value)}
          onCheckedChange={onChange}
          required={isRequired || props.required}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        />
      )}
    />
  );
};

export interface SwitchThumbProps extends BaseSwitch.Thumb.Props {}

export const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  const slots = switchVariants();

  return (
    <BaseSwitch.Thumb
      className={cn(slots.thumb(), className)}
      {...props}
    />
  );
};
