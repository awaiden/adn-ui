import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field, Form } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Field.TextArea> = {
  component: Field.TextArea,
  title: "Form/Field/TextArea",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Default: Story = {
  render: () => {
    const form = useForm({ defaultValues: { message: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='message'>
            <Field.Label>Message</Field.Label>
            <Field.TextArea placeholder='Enter your message...' />
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const WithRows: Story = {
  render: () => {
    const form = useForm({ defaultValues: { bio: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='bio'>
            <Field.Label>Bio</Field.Label>
            <Field.TextArea
              placeholder='Tell us about yourself...'
              rows={6}
            />
            <Field.HelperText>Maximum 500 characters.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const form = useForm({ defaultValues: { notes: "This is read-only" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='notes'>
            <Field.Label>Notes</Field.Label>
            <Field.TextArea
              disabled
              rows={4}
            />
            <Field.HelperText>This field is disabled.</Field.HelperText>
          </Field>
        </Form>
      </Container>
    );
  },
};

export const WithMaxLength: Story = {
  render: () => {
    const form = useForm({ defaultValues: { comment: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='comment'>
            <Field.Label>Comment</Field.Label>
            <Field.TextArea
              placeholder='Leave a comment...'
              maxLength={200}
              rows={4}
            />
            <Field.HelperText>Maximum 200 characters.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};
