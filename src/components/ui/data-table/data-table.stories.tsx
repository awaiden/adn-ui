import type { Meta, StoryObj } from "@storybook/react";

import { DataTableDemo } from "./data-table-demo";

const meta: Meta<typeof DataTableDemo> = {
  title: "Components/DataTable",
  component: DataTableDemo,
};

export default meta;
type Story = StoryObj<typeof DataTableDemo>;

export const Default: Story = {};
