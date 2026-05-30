import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "./index";

const meta = {
  component: Accordion.Root,
  title: "Components/Accordion",
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    collapsible: true,
    defaultValue: "item-1",
    type: "single",
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Multiple: Story = {
  args: {
    defaultValue: ["item-1", "item-2"],
    type: "multiple",
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First item</Accordion.Trigger>
        <Accordion.Content>Content for the first item.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second item</Accordion.Trigger>
        <Accordion.Content>Content for the second item.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Third item</Accordion.Trigger>
        <Accordion.Content>Content for the third item.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
