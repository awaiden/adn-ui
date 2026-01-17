import type { Meta, StoryObj } from "@storybook/react";

import { PreviewCard } from "@adn-ui/react";

const meta: Meta<typeof PreviewCard> = {
  component: PreviewCard,
  title: "Components/PreviewCard",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <PreviewCard {...args}>
        <p>
          The principles of good
          <PreviewCard.Trigger className="link mx-2">
            <a href="https://en.wikipedia.org/wiki/Typography">typography</a>
          </PreviewCard.Trigger>
          remain into the digital age.
        </p>
        <PreviewCard.Portal>
          <PreviewCard.Positioner>
            <PreviewCard.Popup>
              <PreviewCard.Arrow />
              <div className="max-w-xs p-4">
                <h4 className="mb-2 font-medium">Typography</h4>
                <p className="text-muted-foreground text-sm">
                  Typography is the art and technique of arranging type to make written language
                  legible, readable, and appealing when displayed.
                </p>
              </div>
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard>
    </div>
  ),
};
