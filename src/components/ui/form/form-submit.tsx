import { Form } from "radix-ui";

export type FormSubmitProps = React.ComponentProps<typeof Form.Submit>;

export const FormSubmit = (props: FormSubmitProps) => {
  return <Form.Submit asChild {...props} />;
};
