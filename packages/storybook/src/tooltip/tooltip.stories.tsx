import type { Meta, StoryObj } from "@storybook/react";

import { buttonVariants, Tooltip } from "@adn-ui/react";

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  title: "Components/Tooltip",
};

export default meta;
type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => (
    <div className="flex justify-center p-20">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger className={buttonVariants()}>Hover me</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={8}>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Tooltip content
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  ),
};
