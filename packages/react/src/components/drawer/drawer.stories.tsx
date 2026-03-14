import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../button";
import { Drawer } from "./index";

const meta: Meta = {
	tags: ["autodocs"],
	title: "Components/Drawer",
};

export default meta;

type Story = StoryObj;

export const Right: Story = {
	render: () => (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<Button variant="outline">Open Right Drawer</Button>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Edit Profile</Drawer.Title>
					<Drawer.Description>
						Make changes to your profile here.
					</Drawer.Description>
				</Drawer.Header>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<span className="text-right text-sm">Name</span>
						<input
							className="col-span-3 border rounded px-2 py-1"
							defaultValue="Pedro Duarte"
						/>
					</div>
				</div>
				<Drawer.Footer>
					<Button type="submit">Save changes</Button>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	),
};

export const Left: Story = {
	render: () => (
		<Drawer.Root side="left">
			<Drawer.Trigger asChild>
				<Button variant="outline">Open Left Drawer</Button>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Navigation</Drawer.Title>
					<Drawer.Description>Browse the sidebar menu.</Drawer.Description>
				</Drawer.Header>
				<nav className="flex flex-col gap-2 py-4">
					<a href="/dashboard" className="text-sm hover:underline">
						Dashboard
					</a>
					<a href="/settings" className="text-sm hover:underline">
						Settings
					</a>
					<a href="/profile" className="text-sm hover:underline">
						Profile
					</a>
				</nav>
			</Drawer.Content>
		</Drawer.Root>
	),
};

export const Bottom: Story = {
	render: () => (
		<Drawer.Root side="bottom">
			<Drawer.Trigger asChild>
				<Button variant="outline">Open Bottom Drawer</Button>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Actions</Drawer.Title>
					<Drawer.Description>Choose an action below.</Drawer.Description>
				</Drawer.Header>
				<div className="flex gap-2 py-4">
					<Button variant="primary">Confirm</Button>
					<Drawer.Close asChild>
						<Button variant="outline">Cancel</Button>
					</Drawer.Close>
				</div>
			</Drawer.Content>
		</Drawer.Root>
	),
};

export const Top: Story = {
	render: () => (
		<Drawer.Root side="top">
			<Drawer.Trigger asChild>
				<Button variant="outline">Open Top Drawer</Button>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Notification</Drawer.Title>
					<Drawer.Description>
						You have a new message from the system.
					</Drawer.Description>
				</Drawer.Header>
			</Drawer.Content>
		</Drawer.Root>
	),
};
