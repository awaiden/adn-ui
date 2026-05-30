import { Form } from "radix-ui";
import { cn } from "tailwind-variants";

import { useFormContext } from "./form.context";

export type FormMessageProps = React.ComponentProps<typeof Form.Message>;

export const FormMessage = ({ className, ...props }: FormMessageProps) => {
  const { slots } = useFormContext();

  return <Form.Message className={cn(slots.message(), className)} {...props} />;
};
