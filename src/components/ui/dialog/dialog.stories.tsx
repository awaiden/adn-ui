import type { Meta, StoryObj } from "@storybook/react-vite";

import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogRoot } from "./dialog-root";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

const meta = {
  component: DialogRoot,
  title: "Components/Dialog",
} satisfies Meta<typeof DialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger>
        <button className="bg-primary text-primary-foreground inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium">
          Edit Profile
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="col-span-3 h-9 rounded-md border px-3 text-sm"
              defaultValue="Pedro Duarte"
              id="name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm" htmlFor="username">
              Username
            </label>
            <input
              className="col-span-3 h-9 rounded-md border px-3 text-sm"
              defaultValue="@peduarte"
              id="username"
            />
          </div>
        </div>
        <DialogFooter>
          <button className="bg-primary text-primary-foreground inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium">
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};
