import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Strikethrough } from "lucide-react";

import { ToolbarButton } from "./toolbar-button";
import { ToolbarLink } from "./toolbar-link";
import { ToolbarRoot } from "./toolbar-root";
import { ToolbarSeparator } from "./toolbar-separator";
import { ToolbarToggleGroup } from "./toolbar-toggle-group";
import { ToolbarToggleItem } from "./toolbar-toggle-item";

const meta = {
  component: ToolbarRoot,
  title: "Components/Toolbar",
} satisfies Meta<typeof ToolbarRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToolbarRoot aria-label="Formatting options">
      <ToolbarToggleGroup aria-label="Text formatting" type="multiple">
        <ToolbarToggleItem aria-label="Bold" value="bold">
          <Bold className="size-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem aria-label="Italic" value="italic">
          <Italic className="size-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem aria-label="Strikethrough" value="strikethrough">
          <Strikethrough className="size-4" />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup aria-label="Text alignment" defaultValue="center" type="single">
        <ToolbarToggleItem aria-label="Left aligned" value="left">
          <AlignLeft className="size-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem aria-label="Center aligned" value="center">
          <AlignCenter className="size-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem aria-label="Right aligned" value="right">
          <AlignRight className="size-4" />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#">Edited 2 hours ago</ToolbarLink>
      <ToolbarButton>Share</ToolbarButton>
    </ToolbarRoot>
  ),
};
