"use client";

import { Label as PureLabel, type LabelProps as PureLabelProps } from "../../label";
import { useField } from "../use-field";

export interface LabelProps extends PureLabelProps {}

export const Label = ({ children, ...props }: LabelProps) => {
  const { name, isRequired } = useField();

  return (
    <PureLabel
      htmlFor={name}
      data-required={Boolean(isRequired)}
      {...props}
    >
      {children}
    </PureLabel>
  );
};
