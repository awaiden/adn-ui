import { Form } from "radix-ui";
import { cn } from "tailwind-variants";

import { useFormContext } from "./form.context";

export type FormLabelProps = React.ComponentProps<typeof Form.Label>;

export const FormLabel = ({ className, ...props }: FormLabelProps) => {
  const { slots } = useFormContext();

  return <Form.Label className={cn(slots.label(), className)} {...props} />;
};
