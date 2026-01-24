import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Field, Form } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Field> = {
  component: Field,
  title: "Form/Field",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Input: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field
            name='email'
            isRequired
          >
            <Field.Label>Email Address</Field.Label>
            <Field.Input
              type='email'
              placeholder='Enter your email'
            />
            <Field.HelperText>We'll never share your email with anyone else.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const TextArea: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        message: "",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field name='message'>
            <Field.Label>Message</Field.Label>
            <Field.TextArea
              placeholder='Enter your message'
              rows={4}
            />
            <Field.HelperText>Maximum 500 characters.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Select: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        country: "",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field name='country'>
            <Field.Label>Country</Field.Label>
            <Field.Select>
              <option value=''>Select a country</option>
              <option value='us'>United States</option>
              <option value='uk'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='tr'>Turkey</option>
            </Field.Select>
            <Field.HelperText>Choose your country of residence.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Checkbox: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        terms: false,
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field name='terms'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>I agree to the terms and conditions</span>
            </Field.Label>
            <Field.HelperText>You must agree to continue.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const Radio: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        plan: "free",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field name='plan'>
            <Field.Label>Select Plan</Field.Label>
            <Field.RadioGroup
              orientation='vertical'
              className='space-y-2'
            >
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='free' />
                <span>Free Plan - $0/month</span>
              </Field.Label>
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='pro' />
                <span>Pro Plan - $10/month</span>
              </Field.Label>
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='enterprise' />
                <span>Enterprise Plan - $50/month</span>
              </Field.Label>
            </Field.RadioGroup>
            <Field.HelperText>Choose the plan that fits your needs.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const MultipleFields: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md space-y-4'
        >
          <div className='grid grid-cols-2 gap-4'>
            <Field name='firstName'>
              <Field.Label>First Name</Field.Label>
              <Field.Input placeholder='John' />
              <Field.ErrorMessage />
            </Field>

            <Field name='lastName'>
              <Field.Label>Last Name</Field.Label>
              <Field.Input placeholder='Doe' />
              <Field.ErrorMessage />
            </Field>
          </div>

          <Field name='email'>
            <Field.Label>Email</Field.Label>
            <Field.Input
              type='email'
              placeholder='john.doe@example.com'
            />
            <Field.ErrorMessage />
          </Field>

          <Field name='phone'>
            <Field.Label>Phone Number</Field.Label>
            <Field.Input
              type='tel'
              placeholder='+1 (555) 000-0000'
            />
            <Field.HelperText>Include country code.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>

          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  },
};
