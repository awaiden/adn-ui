import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Checkbox,
  Field,
  Form,
  Input,
  RadioGroup,
  Radio,
  Select,
  Textarea,
} from "@adn-ui/react";
import { LucideUser } from "lucide-react";
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

export const FieldInput: Story = {
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
            <Input
              type='email'
              placeholder='Enter your email'
            />
            <Field.Description>We'll never share your email with anyone else.</Field.Description>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const WithGroup: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "",
        domain: "example.com",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
          className='w-full max-w-md'
        >
          <Field.Root
            name='username'
            isRequired
          >
            <Field.Label>Username</Field.Label>
            <Field.Group>
              <Field.Prefix className='text-muted-foreground'>
                <LucideUser />
              </Field.Prefix>
              <Input />
              <Field.Suffix>@</Field.Suffix>
            </Field.Group>
            <Field.ErrorMessage />
          </Field.Root>
        </Form>
      </Container>
    );
  },
};

export const FieldTextArea: Story = {
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
            <Textarea
              placeholder='Enter your message'
              rows={4}
            />
            <Field.Description>Maximum 500 characters.</Field.Description>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const FieldSelect: Story = {
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
            <Select>
              <option value=''>Select a country</option>
              <option value='us'>United States</option>
              <option value='uk'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='tr'>Turkey</option>
            </Select>
            <Field.Description>Choose your country of residence.</Field.Description>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const FieldCheckbox: Story = {
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
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
              <span>I agree to the terms and conditions</span>
            </Field.Label>
            <Field.Description>You must agree to continue.</Field.Description>
            <Field.ErrorMessage />
          </Field>
        </Form>
      </Container>
    );
  },
};

export const FieldRadio: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        plan: "",
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
            <Field.Label>Choose a plan</Field.Label>
            <RadioGroup>
              <Field.Label className='flex items-center gap-2'>
                <Radio.Root value='basic'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Basic Plan</span>
              </Field.Label>

              <Field.Label className='flex items-center gap-2'>
                <Radio.Root value='pro'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Pro Plan</span>
              </Field.Label>

              <Field.Label className='flex items-center gap-2'>
                <Radio.Root value='enterprise'>
                  <Radio.Indicator />
                </Radio.Root>
                <span>Enterprise Plan</span>
              </Field.Label>
            </RadioGroup>
            <Field.Description>Select the plan that best suits your needs.</Field.Description>
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
              <Input />
              <Field.ErrorMessage />
            </Field>

            <Field name='lastName'>
              <Field.Label>Last Name</Field.Label>
              <Input />
              <Field.ErrorMessage />
            </Field>
          </div>

          <Field name='email'>
            <Field.Label>Email</Field.Label>
            <Input
              type='email'
              placeholder='john.doe@example.com'
            />
            <Field.ErrorMessage />
          </Field>

          <Field name='phone'>
            <Field.Label>Phone Number</Field.Label>
            <Input
              type='tel'
              placeholder='+1 (555) 000-0000'
            />
            <Field.Description>Include country code.</Field.Description>
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
