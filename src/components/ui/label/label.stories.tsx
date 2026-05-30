import type { Meta, StoryObj } from "@storybook/react-vite";

import { LabelRoot } from "./label";

const meta = {
  component: LabelRoot,
  title: "Components/Label",
} satisfies Meta<typeof LabelRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <LabelRoot htmlFor="firstName">First name</LabelRoot>
      <input
        className="bg-background h-9 w-[200px] rounded-md border px-3 text-sm"
        defaultValue="Pedro Duarte"
        id="firstName"
        type="text"
      />
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="grid gap-2">
      <LabelRoot htmlFor="message">Message</LabelRoot>
      <textarea
        className="bg-background w-full resize-none rounded-md border p-3 text-sm"
        id="message"
        placeholder="Type your message here"
      />
    </div>
  ),
};
