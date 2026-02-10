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
    interface FormValues {
      terms: boolean;
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
      defaultValues: {
        terms: false,
      },
    });

    return (
      <Container>
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          className='w-full max-w-md'
        >
          <Field.Root
            name='terms'
            error={errors.terms?.message}
          >
            <Field.Label className='flex items-center gap-2'>
              <Checkbox {...register("terms")}>
                <Checkbox.Indicator />
              </Checkbox>
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
    interface FormValues {
      newsletter: boolean;
      updates: boolean;
      marketing: boolean;
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
      defaultValues: {
        newsletter: true,
        updates: true,
        marketing: false,
      },
    });

    return (
      <Container>
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          className='w-full max-w-md space-y-3'
        >
          <div className='mb-2'>
            <h3 className='font-semibold'>Email Preferences</h3>
            <p className='text-sm text-gray-600'>Choose what emails you want to receive</p>
          </div>

          <Field
            name='newsletter'
            error={errors.newsletter?.message}
          >
            <Field.Label className='flex items-center gap-2'>
              <Checkbox.Root {...register("newsletter")}>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>Newsletter</span>
            </Field.Label>
          </Field>

          <Field
            name='updates'
            error={errors.updates?.message}
          >
            <Field.Label className='flex items-center gap-2'>
              <Checkbox.Root {...register("updates")}>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>Product Updates</span>
            </Field.Label>
          </Field>

          <Field
            name='marketing'
            error={errors.marketing?.message}
          >
            <Field.Label className='flex items-center gap-2'>
              <Checkbox.Root {...register("marketing")}>
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
    interface FormValues {
      verified: boolean;
    }

    const { register, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        verified: true,
      },
    });

    return (
      <Container>
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          className='w-full max-w-md'
        >
          <Field name='verified'>
            <Field.Label className='flex cursor-not-allowed items-center gap-2 opacity-50'>
              <Checkbox.Root
                disabled
                {...register("verified")}
              >
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
