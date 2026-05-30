import { Form } from "radix-ui";
import { cn } from "tailwind-variants";

import { useFormContext } from "./form.context";

export type FormFieldProps = React.ComponentProps<typeof Form.Field>;

export const FormField = ({ className, ...props }: FormFieldProps) => {
  const { slots } = useFormContext();

  return <Form.Field className={cn(slots.field(), className)} {...props} />;
};
