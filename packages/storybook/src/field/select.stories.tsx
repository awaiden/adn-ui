import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  Select,
  Button,
} from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta = {
  title: "Form/Field/Select",
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
// DEFAULT SELECT
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { country: "" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <FieldRoot
            name='country'
            isRequired
            error={errors.country?.message}
          >
            <FieldLabel>Country</FieldLabel>
            <Select {...register("country", { required: "Please select a country" })}>
              <option value=''>Select a country</option>
              <option value='us'>United States</option>
              <option value='uk'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='tr'>Turkey</option>
            </Select>
            <FieldErrorMessage />
          </FieldRoot>
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
// WITH GROUPS (OPTGROUP)
// ---------------------------------------------------------------------------
export const WithGroups: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { timezone: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='timezone'
            error={errors.timezone?.message}
          >
            <FieldLabel>Timezone</FieldLabel>
            <Select {...register("timezone")}>
              <option value=''>Select timezone</option>
              <optgroup label='North America'>
                <option value='est'>Eastern Time</option>
                <option value='cst'>Central Time</option>
                <option value='mst'>Mountain Time</option>
                <option value='pst'>Pacific Time</option>
              </optgroup>
              <optgroup label='Europe'>
                <option value='gmt'>GMT</option>
                <option value='cet'>Central European Time</option>
                <option value='eet'>Eastern European Time</option>
              </optgroup>
            </Select>
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
      defaultValues: { role: "user" },
    });

    return (
      <Container>
        <FieldRoot name='role'>
          <FieldLabel>Role</FieldLabel>
          <Select
            disabled
            {...register("role")}
          >
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </Select>
          <FieldDescription>This field is disabled.</FieldDescription>
        </FieldRoot>
      </Container>
    );
  },
};
