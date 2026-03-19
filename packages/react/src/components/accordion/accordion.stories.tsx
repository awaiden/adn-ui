import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "./index";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Components/Accordion",
};

export default meta;

type Story = StoryObj;

export const Single: Story = {
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">Yes. It adheres to the WAI-ARIA design pattern.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">
            Yes. It comes with default styles that match the other components' aesthetic.
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">
            Yes. It's animated by default, but you can disable it if you prefer.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion.Root type="multiple" defaultValue={["item-1"]} className="w-full max-w-md">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">This item is expanded by default.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">Multiple items can be open at the same time.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Third item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">Try opening all three items at once.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Accordion.Root type="single" defaultValue="item-2" collapsible className="w-full max-w-md">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">Content for the first item.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second item (default open)</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">This item is expanded by default.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion.Root type="single" collapsible className="w-full max-w-md">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Enabled item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">This item can be toggled.</div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled item</Accordion.Trigger>
        <Accordion.Content>
          <div className="pt-0 pb-4">This content is not reachable.</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
