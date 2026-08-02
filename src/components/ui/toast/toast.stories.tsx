import type { Meta, StoryObj } from "@storybook/react";

import { ToastDemo } from "./toast-demo";

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
};

export default meta;
type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {};
