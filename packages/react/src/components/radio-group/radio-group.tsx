import { RadioGroup as BaseRadioGroup } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { radioGroupVariants, type RadioGroupVariants } from "./radio-group.variants";

export interface RadioGroupProps extends RadioGroupVariants, BaseRadioGroup.Props {
  orientation?: "horizontal" | "vertical";
}

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureRadioGroup {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureRadioGroup
      id={props.id ?? name}
      name={props.name ?? name}
      aria-invalid={Boolean(error)}
      aria-describedby={`${name}-error`}
      data-invalid={Boolean(error)}
      data-required={isRequired}
      required={props.required ?? isRequired}
      {...props}
    />
  );
};

export const PureRadioGroup = ({
  className,
  orientation = "vertical",
  ...props
}: RadioGroupProps) => {
  const styles = radioGroupVariants({ orientation });

  return (
    <BaseRadioGroup
      data-orientation={orientation}
      className={cn(styles, className)}
      {...props}
    />
  );
};
