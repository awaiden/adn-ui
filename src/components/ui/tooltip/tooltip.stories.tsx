import type { Meta, StoryObj } from "@storybook/react-vite";

import { Plus } from "lucide-react";

import { TooltipContent } from "./tooltip-content";
import { TooltipProvider } from "./tooltip-provider";
import { TooltipRoot } from "./tooltip-root";
import { TooltipTrigger } from "./tooltip-trigger";

const meta = {
  component: TooltipRoot,
  title: "Components/Tooltip",
} satisfies Meta<typeof TooltipRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger>
          <button className="inline-flex size-9 items-center justify-center rounded-md border">
            <Plus className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  ),
};
