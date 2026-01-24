"use client";

import { RadioGroup as PureRadioGroup } from "../../radio-group";

export interface RadioGroupProps extends React.ComponentProps<typeof PureRadioGroup> {}

export const RadioGroup = (props: RadioGroupProps) => {
  return <PureRadioGroup {...props} />;
};
