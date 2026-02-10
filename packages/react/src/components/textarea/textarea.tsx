import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { textareaVariants, type TextareaVariants } from "./textarea.variants";

export interface TextareaProps extends React.ComponentProps<"textarea">, TextareaVariants {}

export const Textarea = ({ ...props }: TextareaProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureTextarea {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureTextarea
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

export const PureTextarea = ({ className, ...props }: TextareaProps) => {
  const styles = textareaVariants();

  return (
    <textarea
      className={cn(styles, className)}
      {...props}
    />
  );
};
