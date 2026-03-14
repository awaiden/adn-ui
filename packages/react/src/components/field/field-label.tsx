import { useFieldContext } from "./field.context";

export type FieldLabelProps = React.HTMLAttributes<HTMLLabelElement>;

export const FieldLabel = ({ children, className, ...props }: FieldLabelProps) => {
  const { id, slots } = useFieldContext();
  return (
    <label htmlFor={id} className={slots.label({ class: className })} {...props}>
      {children}
    </label>
  );
};
