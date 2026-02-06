import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field, Form, RadioGroup, Radio } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Form/Field/Radio",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Vertical: Story = {
  render: () => {
    const form = useForm({ defaultValues: { plan: "free" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='plan'>
            <Field.Label>Select Plan</Field.Label>
            <RadioGroup
              orientation='vertical'
              className='space-y-2'
              defaultValue='free'
            >
              <Field.Label
                htmlFor='plan-free'
                className='flex items-center gap-2'
              >
                <Radio.Root value='free'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Free - $0/month</span>
              </Field.Label>
              <Field.Label
                htmlFor='plan-pro'
                className='flex items-center gap-2'
              >
                <Radio.Root value='pro'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Pro - $10/month</span>
              </Field.Label>
              <Field.Label
                htmlFor='plan-enterprise'
                className='flex items-center gap-2'
              >
                <Radio.Root value='enterprise'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Enterprise - $50/month</span>
              </Field.Label>
            </RadioGroup>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const form = useForm({ defaultValues: { size: "medium" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='size'>
            <Field.Label>T-Shirt Size</Field.Label>
            <RadioGroup
              orientation='horizontal'
              className='flex gap-4'
            >
              <Field.Label
                htmlFor='size-small'
                className='flex items-center gap-2'
              >
                <Radio.Root value='small'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>S</span>
              </Field.Label>
              <Field.Label
                htmlFor='size-medium'
                className='flex items-center gap-2'
              >
                <Radio.Root value='medium'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>M</span>
              </Field.Label>
              <Field.Label
                htmlFor='size-large'
                className='flex items-center gap-2'
              >
                <Radio.Root value='large'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>L</span>
              </Field.Label>
              <Field.Label
                htmlFor='size-xlarge'
                className='flex items-center gap-2'
              >
                <Radio.Root value='xlarge'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>XL</span>
              </Field.Label>
            </RadioGroup>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const form = useForm({ defaultValues: { shipping: "standard" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='shipping'>
            <Field.Label>Shipping Method</Field.Label>
            <RadioGroup
              orientation='vertical'
              className='space-y-3'
            >
              <Field.Label
                htmlFor='shipping-standard'
                className='flex items-start gap-2'
              >
                <Radio.Root
                  value='standard'
                  className='mt-1'
                >
                  <Radio.Indicator />
                </Radio.Root>
                <div>
                  <div className='font-medium'>Standard Shipping</div>
                  <div className='text-sm text-gray-600'>5-7 business days - Free</div>
                </div>
              </Field.Label>
              <Field.Label
                htmlFor='shipping-express'
                className='flex items-start gap-2'
              >
                <Radio.Root
                  value='express'
                  className='mt-1'
                >
                  <Radio.Indicator />
                </Radio.Root>
                <div>
                  <div className='font-medium'>Express Shipping</div>
                  <div className='text-sm text-gray-600'>2-3 business days - $9.99</div>
                </div>
              </Field.Label>
              <Field.Label
                htmlFor='shipping-overnight'
                className='flex items-start gap-2'
              >
                <Radio.Root
                  value='overnight'
                  className='mt-1'
                >
                  <Radio.Indicator />
                </Radio.Root>
                <div>
                  <div className='font-medium'>Overnight Shipping</div>
                  <div className='text-sm text-gray-600'>Next business day - $24.99</div>
                </div>
              </Field.Label>
            </RadioGroup>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const form = useForm({ defaultValues: { payment: "card" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field name='payment'>
            <Field.Label>Payment Method</Field.Label>
            <RadioGroup
              orientation='vertical'
              className='space-y-2'
            >
              <Field.Label
                htmlFor='payment-card'
                className='flex items-center gap-2'
              >
                <Radio.Root value='card'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Credit Card</span>
              </Field.Label>
              <Field.Label
                htmlFor='payment-paypal'
                className='flex items-center gap-2 opacity-50'
              >
                <Radio.Root
                  value='paypal'
                  disabled
                >
                  <Radio.Indicator />
                </Radio.Root>
                <span>PayPal (Coming Soon)</span>
              </Field.Label>
              <Field.Label
                htmlFor='payment-crypto'
                className='flex items-center gap-2 opacity-50'
              >
                <Radio.Root
                  value='crypto'
                  disabled
                >
                  <Radio.Indicator />
                </Radio.Root>
                <span>Cryptocurrency (Coming Soon)</span>
              </Field.Label>
            </RadioGroup>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};
