import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldRoot, FieldLabel, FieldErrorMessage, RadioGroup, Radio, Button } from "@adn-ui/react";
import { useForm, Controller } from "react-hook-form";

const meta: Meta = {
  title: "Form/Field/Radio",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

function Container({ children }: React.PropsWithChildren) {
  return <div className='w-full max-w-md rounded-lg border bg-white p-8 shadow-sm'>{children}</div>;
}

// ---------------------------------------------------------------------------
// VERTICAL RADIO GROUP
// ---------------------------------------------------------------------------
export const Vertical: Story = {
  render: () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { plan: "free" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <Controller
            name='plan'
            control={control}
            render={({ field }) => (
              <FieldRoot
                name='plan'
                error={errors.plan?.message}
              >
                <FieldLabel>Select Plan</FieldLabel>
                <RadioGroup
                  orientation='vertical'
                  className='space-y-2'
                  value={field.value} // Değeri RHF'den alıyor
                  onValueChange={field.onChange} // Değişimi RHF'e bildiriyor
                >
                  <div className='flex items-center gap-2'>
                    <Radio.Root
                      value='free'
                      id='plan-free'
                    >
                      <Radio.Indicator />
                    </Radio.Root>
                    <label htmlFor='plan-free'>Free - $0/month</label>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Radio.Root
                      value='pro'
                      id='plan-pro'
                    >
                      <Radio.Indicator />
                    </Radio.Root>
                    <label htmlFor='plan-pro'>Pro - $10/month</label>
                  </div>
                </RadioGroup>
                <FieldErrorMessage />
              </FieldRoot>
            )}
          />
          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// WITH DESCRIPTIONS
// ---------------------------------------------------------------------------
export const WithDescriptions: Story = {
  render: () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { shipping: "standard" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <Controller
            name='shipping'
            control={control}
            render={({ field }) => (
              <FieldRoot
                name='shipping'
                error={errors.shipping?.message}
              >
                <FieldLabel>Shipping Method</FieldLabel>
                <RadioGroup
                  orientation='vertical'
                  className='space-y-3'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className='flex items-start gap-2'>
                    <Radio.Root
                      value='standard'
                      id='s-standard'
                      className='mt-1'
                    >
                      <Radio.Indicator />
                    </Radio.Root>
                    <label htmlFor='s-standard'>
                      <div className='font-medium'>Standard Shipping</div>
                      <div className='text-sm text-gray-500'>5-7 business days - Free</div>
                    </label>
                  </div>

                  <div className='flex items-start gap-2'>
                    <Radio.Root
                      value='express'
                      id='s-express'
                      className='mt-1'
                    >
                      <Radio.Indicator />
                    </Radio.Root>
                    <label htmlFor='s-express'>
                      <div className='font-medium'>Express Shipping</div>
                      <div className='text-sm text-gray-500'>2-3 business days - $9.99</div>
                    </label>
                  </div>
                </RadioGroup>
                <FieldErrorMessage />
              </FieldRoot>
            )}
          />
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// DISABLED
// ---------------------------------------------------------------------------
export const Disabled: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { payment: "card" } });

    return (
      <Container>
        <Controller
          name='payment'
          control={control}
          render={({ field }) => (
            <FieldRoot name='payment'>
              <FieldLabel>Payment Method</FieldLabel>
              <RadioGroup
                orientation='vertical'
                className='space-y-2'
                value={field.value}
                onValueChange={field.onChange}
              >
                <div className='flex items-center gap-2'>
                  <Radio.Root
                    value='card'
                    id='p-card'
                  >
                    <Radio.Indicator />
                  </Radio.Root>
                  <label htmlFor='p-card'>Credit Card</label>
                </div>

                <div className='flex items-center gap-2 text-gray-400 opacity-50'>
                  <Radio.Root
                    value='paypal'
                    id='p-paypal'
                    disabled
                  >
                    <Radio.Indicator />
                  </Radio.Root>
                  <label htmlFor='p-paypal'>PayPal (Coming Soon)</label>
                </div>
              </RadioGroup>
            </FieldRoot>
          )}
        />
      </Container>
    );
  },
};
