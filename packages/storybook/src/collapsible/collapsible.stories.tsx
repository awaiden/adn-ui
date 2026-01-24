import type { Meta, StoryObj } from "@storybook/react-vite";

import { Collapsible } from "@adn-ui/react";

const meta: Meta<typeof Collapsible.Root> = {
  component: Collapsible.Root,
  title: "Components/Collapsible",
};

export default meta;
type Story = StoryObj<typeof Collapsible.Root>;

export const Default: Story = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <Collapsible.TriggerIcon />
        <span>Toggle Panel</span>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eum repellendus
            perspiciatis neque similique modi. Est esse, quod iure laboriosam perspiciatis rem
            molestias, ipsam, eligendi architecto vitae a quos beatae?
          </p>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Collapsible.Root disabled>
      <Collapsible.Trigger>
        <span>Can't Toggle This</span>
        <Collapsible.TriggerIcon />
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          <p>This content should not be accessible via the trigger.</p>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
};

export const InitiallyOpen: Story = {
  render: () => (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger>
        <span>Initially Open</span>
        <Collapsible.TriggerIcon />
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          <p>This content is visible by default.</p>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
};
