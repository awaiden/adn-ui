import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Collapsible } from "./index";

const meta: Meta = {
	title: "Components/Collapsible",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Collapsible.Root className="w-full max-w-sm">
			<Collapsible.Trigger className="w-full">
				Toggle content
			</Collapsible.Trigger>
			<Collapsible.Content>
				<div className="py-2">
					This is the collapsible content. It can be toggled open and closed.
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	),
};

export const DefaultOpen: Story = {
	render: () => (
		<Collapsible.Root defaultOpen className="w-full max-w-sm">
			<Collapsible.Trigger className="w-full">
				Toggle content
			</Collapsible.Trigger>
			<Collapsible.Content>
				<div className="py-2">
					This content is visible by default because defaultOpen is set to true.
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<Collapsible.Root
				open={open}
				onOpenChange={setOpen}
				className="w-full max-w-sm"
			>
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">
						@peduarte starred 3 repositories
					</span>
					<Collapsible.Trigger asChild>
						<button type="button" className="p-1">
							<ChevronsUpDown className="size-4" />
							<span className="sr-only">Toggle</span>
						</button>
					</Collapsible.Trigger>
				</div>

				<div className="mt-2 rounded-md border px-4 py-2 text-sm">
					@radix-ui/primitives
				</div>

				<Collapsible.Content>
					<div className="mt-2 space-y-2">
						<div className="rounded-md border px-4 py-2 text-sm">
							@radix-ui/colors
						</div>
						<div className="rounded-md border px-4 py-2 text-sm">
							@radix-ui/themes
						</div>
					</div>
				</Collapsible.Content>
			</Collapsible.Root>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<Collapsible.Root disabled className="w-full max-w-sm">
			<Collapsible.Trigger className="w-full">
				This trigger is disabled
			</Collapsible.Trigger>
			<Collapsible.Content>
				<div className="py-2">This content cannot be toggled.</div>
			</Collapsible.Content>
		</Collapsible.Root>
	),
};
