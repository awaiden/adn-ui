import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field, Form } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Field.Input> = {
  component: Field.Input,
  title: "Form/Field/Input",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Text: Story = {
  render: () => {
    const form = useForm({ defaultValues: { name: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field
            name='name'
            isRequired
          >
            <Field.Label>Full Name</Field.Label>
            <Field.Input
              type='text'
              placeholder='John Doe'
            />
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Email: Story = {
  render: () => {
    const form = useForm({ defaultValues: { email: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field
            name='email'
            isRequired
          >
            <Field.Label>Email Address</Field.Label>
            <Field.Input
              type='email'
              placeholder='john@example.com'
            />
            <Field.HelperText>We'll never share your email.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Password: Story = {
  render: () => {
    const form = useForm({ defaultValues: { password: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field
            name='password'
            isRequired
          >
            <Field.Label>Password</Field.Label>
            <Field.Input
              type='password'
              placeholder='••••••••'
            />
            <Field.HelperText>Minimum 8 characters.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Number: Story = {
  render: () => {
    const form = useForm({ defaultValues: { age: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='age'>
            <Field.Label>Age</Field.Label>
            <Field.Input
              type='number'
              placeholder='25'
              min='0'
              max='120'
            />
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Tel: Story = {
  render: () => {
    const form = useForm({ defaultValues: { phone: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='phone'>
            <Field.Label>Phone Number</Field.Label>
            <Field.Input
              type='tel'
              placeholder='+1 (555) 000-0000'
            />
            <Field.HelperText>Include country code.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const URL: Story = {
  render: () => {
    const form = useForm({ defaultValues: { website: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='website'>
            <Field.Label>Website</Field.Label>
            <Field.Input
              type='url'
              placeholder='https://example.com'
            />
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Date: Story = {
  render: () => {
    const form = useForm({ defaultValues: { birthdate: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='birthdate'>
            <Field.Label>Birth Date</Field.Label>
            <Field.Input type='date' />
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const form = useForm({ defaultValues: { username: "johndoe" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='username'>
            <Field.Label>Username</Field.Label>
            <Field.Input
              disabled
              placeholder='Cannot edit'
            />
            <Field.HelperText>This field is disabled.</Field.HelperText>
          </Field>
        </Form>
      </Container>
    );
  },
};
