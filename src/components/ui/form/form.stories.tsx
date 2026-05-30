import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormControl } from "./form-control";
import { FormField } from "./form-field";
import { FormLabel } from "./form-label";
import { FormMessage } from "./form-message";
import { FormRoot } from "./form-root";
import { FormSubmit } from "./form-submit";

const meta = {
  component: FormRoot,
  title: "Components/Form",
} satisfies Meta<typeof FormRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormRoot className="max-w-sm">
      <FormField name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
          <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
        </div>
        <FormControl>
          <input
            className="bg-background h-9 w-full rounded-md border px-3 text-sm"
            required
            type="email"
          />
        </FormControl>
      </FormField>
      <FormField name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel>Question</FormLabel>
          <FormMessage match="valueMissing">Please enter a question</FormMessage>
        </div>
        <FormControl>
          <textarea
            className="bg-background w-full resize-none rounded-md border p-3 text-sm"
            required
          />
        </FormControl>
      </FormField>
      <FormSubmit>
        <button className="bg-primary text-primary-foreground inline-flex h-9 w-full items-center justify-center rounded-md px-4 text-sm font-medium">
          Post question
        </button>
      </FormSubmit>
    </FormRoot>
  ),
};
