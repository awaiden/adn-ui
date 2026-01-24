import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Field, Form } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Field.Checkbox> = {
  component: Field.Checkbox,
  title: "Form/Field/Checkbox",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Single: Story = {
  render: () => {
    const form = useForm({ defaultValues: { terms: false } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='terms'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>I agree to the terms and conditions</span>
            </Field.Label>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        newsletter: false,
        updates: false,
        marketing: false,
      },
    });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md space-y-3'
        >
          <div className='mb-2'>
            <h3 className='font-semibold'>Email Preferences</h3>
            <p className='text-sm text-gray-600'>Choose what emails you want to receive</p>
          </div>

          <Field name='newsletter'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>Newsletter</span>
            </Field.Label>
          </Field>

          <Field name='updates'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>Product Updates</span>
            </Field.Label>
          </Field>

          <Field name='marketing'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>Marketing Emails</span>
            </Field.Label>
          </Field>

          <Button
            type='submit'
            className='mt-4'
          >
            Save Preferences
          </Button>
        </Form>
      </Container>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const form = useForm({ defaultValues: { verified: true } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='verified'>
            <Field.Label className='flex cursor-not-allowed items-center gap-2 opacity-50'>
              <Field.Checkbox disabled />
              <span>Email verified</span>
            </Field.Label>
            <Field.HelperText>This field is disabled.</Field.HelperText>
          </Field>
        </Form>
      </Container>
    );
  },
};
