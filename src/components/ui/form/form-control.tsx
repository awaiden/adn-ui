import { Form } from "radix-ui";

export type FormControlProps = React.ComponentProps<typeof Form.Control>;

export const FormControl = (props: FormControlProps) => {
  return <Form.Control asChild {...props} />;
};
