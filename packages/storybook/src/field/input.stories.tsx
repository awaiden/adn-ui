import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldRoot, FieldLabel, FieldDescription, FieldErrorMessage, Input } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta = {
  title: "Form/Field/Input",
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
// TEXT INPUT
// ---------------------------------------------------------------------------
export const Text: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { name: "" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <FieldRoot
            name='name'
            isRequired
            error={errors.name?.message}
          >
            <FieldLabel>Full Name</FieldLabel>
            <Input
              type='text'
              placeholder='John Doe'
              {...register("name", { required: "Name is required" })}
            />
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// EMAIL INPUT
// ---------------------------------------------------------------------------
export const Email: Story = {
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
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='email'
            isRequired
            error={errors.email?.message}
          >
            <FieldLabel>Email Address</FieldLabel>
            <Input
              type='email'
              placeholder='john@example.com'
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
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
// PASSWORD INPUT
// ---------------------------------------------------------------------------
export const Password: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { password: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='password'
            isRequired
            error={errors.password?.message}
          >
            <FieldLabel>Password</FieldLabel>
            <Input
              type='password'
              placeholder='••••••••'
              {...register("password", { minLength: { value: 8, message: "Min 8 chars" } })}
            />
            <FieldDescription>Minimum 8 characters.</FieldDescription>
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// NUMBER INPUT
// ---------------------------------------------------------------------------
export const Number: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { age: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='age'
            error={errors.age?.message}
          >
            <FieldLabel>Age</FieldLabel>
            <Input
              type='number'
              placeholder='25'
              {...register("age", { min: 18, max: 120 })}
            />
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// DATE INPUT
// ---------------------------------------------------------------------------
export const Date: Story = {
  render: () => {
    const { register, handleSubmit } = useForm({
      defaultValues: { birthdate: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot name='birthdate'>
            <FieldLabel>Birth Date</FieldLabel>
            <Input
              type='date'
              {...register("birthdate")}
            />
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// DISABLED STATE
// ---------------------------------------------------------------------------
export const Disabled: Story = {
  render: () => {
    const { register } = useForm({
      defaultValues: { username: "johndoe" },
    });

    return (
      <Container>
        <FieldRoot name='username'>
          <FieldLabel>Username</FieldLabel>
          <Input
            disabled
            placeholder='Cannot edit'
            {...register("username")}
          />
          <FieldDescription>This field is disabled.</FieldDescription>
        </FieldRoot>
      </Container>
    );
  },
};
