import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { selectVariants, type SelectVariants } from "./select.variants";

export interface SelectProps extends React.ComponentProps<"select">, SelectVariants {}
export const Select = ({ ...props }: SelectProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureSelect {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureSelect
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

export const PureSelect = ({ className, ...props }: SelectProps) => {
  const styles = selectVariants();

  return (
    <select
      className={cn(styles, className)}
      {...props}
    />
  );
};
