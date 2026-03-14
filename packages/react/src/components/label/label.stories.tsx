import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./index";

const meta: Meta<typeof Label> = {
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	component: Label,
	tags: ["autodocs"],
	title: "Components/Label",
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: "Email address",
	},
};

export const Small: Story = {
	args: {
		children: "Email address",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		children: "Email address",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		children: "Email address",
		size: "lg",
	},
};

export const WithInput: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			<Label htmlFor="email" {...args}>
				Email address
			</Label>
			<input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};
