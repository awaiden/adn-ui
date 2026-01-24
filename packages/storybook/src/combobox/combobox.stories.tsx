import type { Meta, StoryObj } from "@storybook/react-vite";

import { Combobox } from "@adn-ui/react";

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: "Components/Combobox",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className='flex h-screen items-center justify-center'>
      <Combobox.Root
        {...args}
        items={fruits}
      >
        <label
          htmlFor='combobox'
          className='flex-col items-start'
        >
          Select a fruit
          <Combobox.Input placeholder='e.g Apple' />
        </label>

        <Combobox.Portal>
          <Combobox.Positioner sideOffset={4}>
            <Combobox.Popup>
              <Combobox.Empty>Nothing found</Combobox.Empty>
              <Combobox.List>
                {(fruit: string) => (
                  <Combobox.Item
                    key={fruit}
                    value={fruit}
                  >
                    <Combobox.ItemIndicator />
                    {fruit}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  ),
};

const fruits: string[] = [
  "Apple",
  "Apricot",
  "Banana",
  "Blueberry",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
];
