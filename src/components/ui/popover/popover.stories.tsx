import type { Meta, StoryObj } from "@storybook/react-vite";

import { Settings2 } from "lucide-react";

import { PopoverContent } from "./popover-content";
import { PopoverRoot } from "./popover-root";
import { PopoverTrigger } from "./popover-trigger";

const meta = {
  component: PopoverRoot,
  title: "Components/Popover",
} satisfies Meta<typeof PopoverRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger>
        <button
          aria-label="Update dimensions"
          className="inline-flex size-9 items-center justify-center rounded-md border"
        >
          <Settings2 className="size-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-medium">Dimensions</p>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="width">
                Width
              </label>
              <input
                className="col-span-2 h-8 rounded-md border px-3 text-sm"
                defaultValue="100%"
                id="width"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="maxWidth">
                Max. width
              </label>
              <input
                className="col-span-2 h-8 rounded-md border px-3 text-sm"
                defaultValue="300px"
                id="maxWidth"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="height">
                Height
              </label>
              <input
                className="col-span-2 h-8 rounded-md border px-3 text-sm"
                defaultValue="25px"
                id="height"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="maxHeight">
                Max. height
              </label>
              <input
                className="col-span-2 h-8 rounded-md border px-3 text-sm"
                defaultValue="none"
                id="maxHeight"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
};
