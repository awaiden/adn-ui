import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./textarea";

const meta = {
  component: Textarea,
  title: "Components/Textarea",
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled textarea",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "This is some text content in the textarea.",
  },
};
