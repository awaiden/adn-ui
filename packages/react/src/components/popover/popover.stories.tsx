import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Popover } from "./index";

const meta: Meta = {
	title: "Components/Popover",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button variant="outline">Open popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Dimensions</h4>
						<p className="text-sm text-muted-foreground">
							Set the dimensions for the layer.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="width">Width</Label>
							<Input
								id="width"
								defaultValue="100%"
								className="col-span-2"
								size="sm"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="height">Height</Label>
							<Input
								id="height"
								defaultValue="25px"
								className="col-span-2"
								size="sm"
							/>
						</div>
					</div>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithCloseButton: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button variant="outline">Open popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<Popover.Close />
				<div className="space-y-2">
					<h4 className="font-medium leading-none">Notification</h4>
					<p className="text-sm text-muted-foreground">
						You have 3 unread messages.
					</p>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const Placement: Story = {
	render: () => (
		<div className="flex gap-4">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button variant="outline">Top</Button>
				</Popover.Trigger>
				<Popover.Content side="top">
					<p className="text-sm">Placed on top.</p>
				</Popover.Content>
			</Popover.Root>
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Popover.Trigger>
				<Popover.Content side="right">
					<p className="text-sm">Placed on the right.</p>
				</Popover.Content>
			</Popover.Root>
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Popover.Trigger>
				<Popover.Content side="bottom">
					<p className="text-sm">Placed on the bottom.</p>
				</Popover.Content>
			</Popover.Root>
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Popover.Trigger>
				<Popover.Content side="left">
					<p className="text-sm">Placed on the left.</p>
				</Popover.Content>
			</Popover.Root>
		</div>
	),
};
