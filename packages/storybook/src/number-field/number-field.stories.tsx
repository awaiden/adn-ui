import type { Meta, StoryObj } from "@storybook/react";

import { Label, NumberField } from "@adn-ui/react";
import { useId } from "react";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: "Components/NumberField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const id = useId();

    return (
      <div className="flex h-screen items-center justify-center">
        <NumberField {...args} defaultValue={100} id={id}>
          <NumberField.ScrubArea>
            <Label htmlFor={id}>Number Field</Label>
            <NumberField.ScrubAreaCursor />
          </NumberField.ScrubArea>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField>
      </div>
    );
  },
};
