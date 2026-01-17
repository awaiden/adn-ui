import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@adn-ui/react";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

const fonts = [
  { label: "Select a font", value: null },
  { label: "Arial", value: "arial" },
  { label: "Verdana", value: "verdana" },
  { label: "Helvetica", value: "helvetica" },
];

export const Default: Story = {
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Select {...args} items={fonts}>
        <Select.Trigger>
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.Arrow />
              <Select.List>
                {fonts.map((font) => (
                  <Select.Item key={font.value} value={font.value}>
                    <Select.ItemIndicator />
                    <Select.ItemText>{font.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select>
    </div>
  ),
};
