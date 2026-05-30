import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckboxRoot } from "./checkbox";

const meta = {
  component: CheckboxRoot,
  title: "Components/Checkbox",
} satisfies Meta<typeof CheckboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <CheckboxRoot id="terms" {...args} />
      <label className="text-sm" htmlFor="terms">
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <CheckboxRoot id="checked" {...args} />
      <label className="text-sm" htmlFor="checked">
        Already checked
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <CheckboxRoot id="disabled" {...args} />
      <label className="text-sm opacity-50" htmlFor="disabled">
        Disabled checkbox
      </label>
    </div>
  ),
};
