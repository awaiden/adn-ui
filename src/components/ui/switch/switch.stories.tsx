import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwitchRoot } from "./switch";

const meta = {
  component: SwitchRoot,
  title: "Components/Switch",
} satisfies Meta<typeof SwitchRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <label className="text-sm" htmlFor="airplane-mode">
        Airplane mode
      </label>
      <SwitchRoot id="airplane-mode" />
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <label className="text-sm" htmlFor="checked-switch">
        Enabled
      </label>
      <SwitchRoot id="checked-switch" {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <label className="text-sm opacity-50" htmlFor="disabled-switch">
        Disabled
      </label>
      <SwitchRoot id="disabled-switch" {...args} />
    </div>
  ),
};
