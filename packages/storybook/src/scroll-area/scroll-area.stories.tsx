import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@adn-ui/react";

const meta: Meta<typeof ScrollArea> = {
  args: {
    children: "This is a scroll-area text.",
  },
  component: ScrollArea,
  title: "Components/ScrollArea",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <ScrollArea className="h-48 w-64 border" {...args}>
        <ScrollArea.Viewport className="p-4">
          <ScrollArea.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet
              tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc euismod nunc. Sed euismod,
              nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc euismod
              nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
              laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc euismod nunc. Sed
              euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc
              euismod nunc.
            </p>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea>
    </div>
  ),
};
