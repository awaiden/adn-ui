import type { Meta, StoryObj } from "@storybook/react";

import { Container, iconButtonVariants, Popover } from "@adn-ui/react";
import { LucideBell } from "lucide-react";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "Components/Popover",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container className="center">
      <Popover.Root {...args}>
        <Popover.Trigger className={iconButtonVariants()}>
          <LucideBell />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Backdrop />
          <Popover.Positioner sideOffset={8}>
            <Popover.Popup>
              <Popover.Arrow />
              <Popover.Viewport>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  This is an example of a popover description.
                </Popover.Description>
              </Popover.Viewport>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </Container>
  ),
};
