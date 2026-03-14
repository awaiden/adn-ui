import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "./index";

const meta: Meta<typeof Separator> = {
	argTypes: {
		decorative: {
			control: "boolean",
		},
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
	},
	component: Separator,
	tags: ["autodocs"],
	title: "Components/Separator",
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
	render: () => (
		<div className="w-full max-w-sm">
			<div className="text-sm font-medium">Radix Primitives</div>
			<p className="text-sm text-muted-foreground">
				An open-source UI component library.
			</p>
			<Separator className="my-4" />
			<div className="text-sm">Content below the separator.</div>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="flex h-5 items-center gap-4 text-sm">
			<span>Blog</span>
			<Separator orientation="vertical" />
			<span>Docs</span>
			<Separator orientation="vertical" />
			<span>Source</span>
		</div>
	),
};

export const Decorative: Story = {
	render: () => (
		<div className="w-full max-w-sm">
			<div className="text-sm font-medium">Decorative Separator</div>
			<p className="text-sm text-muted-foreground">
				This separator is marked as decorative and will be ignored by assistive
				technologies.
			</p>
			<Separator className="my-4" decorative />
			<div className="text-sm">Content below the decorative separator.</div>
		</div>
	),
};
