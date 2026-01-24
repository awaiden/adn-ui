import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "@adn-ui/react";

const meta: Meta<typeof Tabs> = {
  args: {
    children: "This is a tabs text.",
  },
  component: Tabs,
  title: "Components/Tabs",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Tabs
      defaultValue='tab1'
      {...args}
    >
      <Tabs.List>
        <Tabs.Tab value='tab1'>Tab 1</Tabs.Tab>
        <Tabs.Tab value='tab2'>Tab 2</Tabs.Tab>
        <Tabs.Tab value='tab3'>Tab 3</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value='tab1'>Content for Tab 1</Tabs.Panel>
      <Tabs.Panel value='tab2'>Content for Tab 2</Tabs.Panel>
      <Tabs.Panel value='tab3'>Content for Tab 3</Tabs.Panel>
    </Tabs>
  ),
};
