"use client";

import {
  CheckboxGroup as PureCheckboxGroup,
  type CheckboxGroupProps as PureCheckboxGroupProps,
} from "../../checkbox-group";

export interface CheckboxGroupProps extends PureCheckboxGroupProps {}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <PureCheckboxGroup {...props} />;
};
