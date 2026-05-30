import type { Meta, StoryObj } from "@storybook/react-vite";

import { TabsContent } from "./tabs-content";
import { TabsList } from "./tabs-list";
import { TabsRoot } from "./tabs-root";
import { TabsTrigger } from "./tabs-trigger";

const meta = {
  component: TabsRoot,
  title: "Components/Tabs",
} satisfies Meta<typeof TabsRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <TabsRoot className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-muted-foreground text-sm">Make changes to your account here.</p>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="h-9 rounded-md border px-3 text-sm"
              defaultValue="Pedro Duarte"
              id="name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="username">
              Username
            </label>
            <input
              className="h-9 rounded-md border px-3 text-sm"
              defaultValue="@peduarte"
              id="username"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-muted-foreground text-sm">Change your password here.</p>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="current">
              Current password
            </label>
            <input className="h-9 rounded-md border px-3 text-sm" id="current" type="password" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="new">
              New password
            </label>
            <input className="h-9 rounded-md border px-3 text-sm" id="new" type="password" />
          </div>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
};
