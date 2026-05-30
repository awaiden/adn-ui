import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroupItem } from "./radio-group-item";
import { RadioGroupRoot } from "./radio-group-root";

const meta = {
  component: RadioGroupRoot,
  title: "Components/RadioGroup",
} satisfies Meta<typeof RadioGroupRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "default",
  },
  render: (args) => (
    <RadioGroupRoot aria-label="View density" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r1" value="default" />
        <label className="text-sm" htmlFor="r1">
          Default
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <label className="text-sm" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="r3" value="compact" />
        <label className="text-sm" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroupRoot>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: "default",
    disabled: true,
  },
  render: (args) => (
    <RadioGroupRoot aria-label="Disabled group" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="d1" value="default" />
        <label className="text-sm opacity-50" htmlFor="d1">
          Default
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="d2" value="comfortable" />
        <label className="text-sm opacity-50" htmlFor="d2">
          Comfortable
        </label>
      </div>
    </RadioGroupRoot>
  ),
};
