import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Checkbox,
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  FieldGroup,
  FieldPrefix,
  FieldSuffix,
  Input,
} from "@adn-ui/react";
import { LucideUser, LucideMail } from "lucide-react";
import { useForm, Controller } from "react-hook-form";

const meta: Meta = {
  title: "Form/Field",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function Container({ children }: React.PropsWithChildren) {
  return <div className='w-full max-w-md rounded-xl border bg-white p-8'>{children}</div>;
}

// ---------------------------------------------------------------------------
// FIELD WITH INPUT (Standard)
// ---------------------------------------------------------------------------
export const FieldInput: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { email: "" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <FieldRoot
            name='email'
            isRequired
            error={errors.email?.message}
          >
            <FieldLabel>Email Address</FieldLabel>
            <Input
              type='email'
              placeholder='Enter your email'
              {...register("email", { required: "Email is required" })}
            />
            <FieldDescription>We'll never share your email.</FieldDescription>
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// WITH GROUP (Prefix & Suffix) - İşte burası senin kütüphanenin parladığı yer!
// ---------------------------------------------------------------------------
export const WithGroup: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { username: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='username'
            isRequired
            error={errors.username?.message}
          >
            <FieldLabel>Username</FieldLabel>
            <FieldGroup>
              <FieldPrefix className='text-muted-foreground'>
                <LucideUser size={16} />
              </FieldPrefix>
              <Input
                placeholder='adn-admin'
                {...register("username", { required: "Username is required" })}
              />
              <FieldSuffix className='text-xs font-bold text-gray-400'>@adn.ui</FieldSuffix>
            </FieldGroup>
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// FIELD WITH CHECKBOX (Radix/Custom)
// ---------------------------------------------------------------------------
export const FieldCheckbox: Story = {
  render: () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { terms: false },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <Controller
            name='terms'
            control={control}
            rules={{ required: "You must accept terms" }}
            render={({ field }) => (
              <FieldRoot
                name='terms'
                error={errors.terms?.message}
              >
                <div className='flex items-center gap-2'>
                  <Checkbox.Root
                    id='terms'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  >
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                  <FieldLabel
                    htmlFor='terms'
                    className='m-0 cursor-pointer'
                  >
                    I agree to the terms and conditions
                  </FieldLabel>
                </div>
                <FieldDescription>You must agree to continue.</FieldDescription>
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
// MULTIPLE FIELDS (Full Layout)
// ---------------------------------------------------------------------------
export const MultipleFields: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { firstName: "", lastName: "", email: "" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <div className='grid grid-cols-2 gap-4'>
            <FieldRoot
              name='firstName'
              error={errors.firstName?.message}
            >
              <FieldLabel>First Name</FieldLabel>
              <Input
                placeholder='John'
                {...register("firstName")}
              />
              <FieldErrorMessage />
            </FieldRoot>

            <FieldRoot
              name='lastName'
              error={errors.lastName?.message}
            >
              <FieldLabel>Last Name</FieldLabel>
              <Input
                placeholder='Doe'
                {...register("lastName")}
              />
              <FieldErrorMessage />
            </FieldRoot>
          </div>

          <FieldRoot
            name='email'
            error={errors.email?.message}
          >
            <FieldLabel>Email</FieldLabel>
            <FieldGroup>
              <FieldPrefix>
                <LucideMail size={16} />
              </FieldPrefix>
              <Input
                type='email'
                placeholder='john.doe@example.com'
                {...register("email")}
              />
            </FieldGroup>
            <FieldErrorMessage />
          </FieldRoot>

          <Button
            type='submit'
            className='w-full'
          >
            Submit Form
          </Button>
        </form>
      </Container>
    );
  },
};
