"use client";

import { Controller } from "react-hook-form";

import { Switch as PureSwitch, type SwitchProps as PureSwitchProps } from "../../switch";
import { useField } from "../use-field";

export interface SwitchProps extends PureSwitchProps {}

export const Switch = ({ required, ...props }: SwitchProps) => {
  const { name, isRequired } = useField();

  return (
    <Controller
      name={name}
      defaultValue={false}
      render={({ field, fieldState: { invalid, error } }) => (
        <PureSwitch
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          checked={field.value}
          onCheckedChange={field.onChange}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
        />
      )}
    />
  );
};
