import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "@adn-ui/react";
import { useId } from "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Components/Accordion",
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    content: "Content for section 1. Lorem ipsum dolor sit amet, consecteturadipiscing elit.",
    trigger: "Section 1",
  },
  {
    content:
      "Content for section 2. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    trigger: "Section 2",
  },
  {
    content:
      "Content for section 3. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
    trigger: "Section 3",
  },
];

export const Default: Story = {
  args: {},

  render: (args) => (
    <Accordion.Root {...args}>
      {items.map((item) => {
        const id = useId();
        return (
          <Accordion.Item key={id}>
            <Accordion.Header>
              <Accordion.Trigger>
                {item.trigger}
                <Accordion.TriggerIcon />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              <Accordion.Content>{item.content}</Accordion.Content>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  ),
};
