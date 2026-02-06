import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Checkbox, Field, Form } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
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
          <Field.Root name='terms'>
            <Field.Label className='flex items-center gap-2'>
              <Checkbox></Checkbox>
              <span>I agree to the terms and conditions</span>
            </Field.Label>
            <Field.ErrorMessage />
          </Field.Root>
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
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>Newsletter</span>
            </Field.Label>
          </Field>

          <Field name='updates'>
            <Field.Label className='flex items-center gap-2'>
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>Product Updates</span>
            </Field.Label>
          </Field>

          <Field name='marketing'>
            <Field.Label className='flex items-center gap-2'>
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
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
              <Checkbox.Root disabled>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>Email verified</span>
            </Field.Label>
            <Field.Description>This field is disabled.</Field.Description>
          </Field>
        </Form>
      </Container>
    );
  },
};
