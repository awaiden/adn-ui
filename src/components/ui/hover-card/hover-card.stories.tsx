import type { Meta, StoryObj } from "@storybook/react-vite";

import { HoverCardContent } from "./hover-card-content";
import { HoverCardRoot } from "./hover-card-root";
import { HoverCardTrigger } from "./hover-card-trigger";

const meta = {
  component: HoverCardRoot,
  title: "Components/HoverCard",
} satisfies Meta<typeof HoverCardRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCardRoot>
      <HoverCardTrigger>
        <a
          className="inline-block cursor-pointer rounded-full"
          href="https://twitter.com/radix_ui"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="Radix UI"
            className="block size-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          />
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <img
            alt="Radix UI"
            className="block size-14 rounded-full"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          />
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-sm font-semibold">Radix</div>
              <div className="text-muted-foreground text-sm">@radix_ui</div>
            </div>
            <p className="text-sm">
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex gap-1">
                <span className="font-semibold">0</span>
                <span className="text-muted-foreground">Following</span>
              </div>
              <div className="flex gap-1">
                <span className="font-semibold">2,900</span>
                <span className="text-muted-foreground">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCardRoot>
  ),
};
