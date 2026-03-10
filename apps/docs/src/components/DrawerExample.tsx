"use client";

import { Button, Drawer } from "@adn-ui/react";

const Right = () => (
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
);

const Left = () => (
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
);

const Bottom = () => (
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
);

export const DrawerExample = {
	Right,
	Left,
	Bottom,
};
