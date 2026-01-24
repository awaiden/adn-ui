"use client";

import {
  HelperText as PureHelperText,
  type HelperTextProps as PureHelperTextProps,
} from "../../helper-text";
import { useField } from "../use-field";

export interface HelperTextProps extends PureHelperTextProps {}

export const HelperText = (props: HelperTextProps) => {
  const { isRequired } = useField();

  return (
    <PureHelperText
      data-required={isRequired}
      {...props}
    />
  );
};
