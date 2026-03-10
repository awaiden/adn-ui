import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Dialog } from "./index";

const meta: Meta<typeof Dialog.Root> = {
	title: "Components/Dialog",
	component: Dialog.Root,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog.Root>;

export const Default: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</Dialog.Trigger>
			<Dialog.Content className="sm:max-w-md">
				<Dialog.Header>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<span className="text-right text-sm">Name</span>
						<input
							className="col-span-3 border p-1 rounded"
							defaultValue="Pedro Duarte"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<span className="text-right text-sm">Username</span>
						<input
							className="col-span-3 border p-1 rounded"
							defaultValue="@peduarte"
						/>
					</div>
				</div>
				<Dialog.Footer>
					<Button type="submit">Save changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
};

export const NoDescription: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Simple Dialog</Dialog.Title>
				</Dialog.Header>
				<div className="py-4">This is a dialog without a description.</div>
				<Dialog.Footer>
					<Dialog.Close asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</Dialog.Close>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
};
