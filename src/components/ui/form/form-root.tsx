import "./form.css";

import { Form } from "radix-ui";
import { cn } from "tailwind-variants";

import { FormContext } from "./form.context";
import { formVariants } from "./form.variants";

export type FormRootProps = React.ComponentProps<typeof Form.Root>;

export const FormRoot = ({ className, ...props }: FormRootProps) => {
  const slots = formVariants();

  return (
    <FormContext value={{ slots }}>
      <Form.Root className={cn(slots.root(), className)} {...props} />
    </FormContext>
  );
};
