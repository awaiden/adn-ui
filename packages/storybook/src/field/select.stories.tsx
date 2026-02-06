import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field, Form, Select } from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Form/Field/Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const Default: Story = {
  render: () => {
    const form = useForm({ defaultValues: { country: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field.Root
            name='country'
            isRequired
          >
            <Field.Label>Country</Field.Label>
            <Select>
              <option value=''>Select a country</option>
              <option value='us'>United States</option>
              <option value='uk'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='tr'>Turkey</option>
            </Select>
            <Field.ErrorMessage />
          </Field.Root>
        </Form>
      </Container>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const form = useForm({ defaultValues: { timezone: "" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field.Root name='timezone'>
            <Field.Label>Timezone</Field.Label>
            <Select>
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
            <Field.ErrorMessage />
          </Field.Root>
        </Form>
      </Container>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const form = useForm({ defaultValues: { role: "user" } });
    return (
      <Container>
        <Form
          form={form}
          onSubmit={console.log}
          className='w-full max-w-md'
        >
          <Field.Root name='role'>
            <Field.Label>Role</Field.Label>
            <Select disabled>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </Select>
            <Field.Description>This field is disabled.</Field.Description>
          </Field.Root>
        </Form>
      </Container>
    );
  },
};
