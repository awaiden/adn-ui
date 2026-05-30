import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleRoot } from "./collapsible-root";
import { CollapsibleTrigger } from "./collapsible-trigger";

const meta = {
  component: CollapsibleRoot,
  title: "Components/Collapsible",
} satisfies Meta<typeof CollapsibleRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <CollapsibleRoot className="w-[350px] space-y-2" onOpenChange={setOpen} open={open}>
      <div className="flex items-center justify-between rounded-md border px-4 py-3">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger>
          <button className="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/themes</div>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};

export const Default: Story = {
  render: () => <CollapsibleDemo />,
};

export const DefaultOpen: Story = {
  render: () => (
    <CollapsibleRoot className="w-[350px] space-y-2" defaultOpen>
      <div className="flex items-center justify-between rounded-md border px-4 py-3">
        <h4 className="text-sm font-semibold">Open by default</h4>
        <CollapsibleTrigger>
          <button className="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">First item</div>
        <div className="rounded-md border px-4 py-2 text-sm">Second item</div>
      </CollapsibleContent>
    </CollapsibleRoot>
  ),
};
