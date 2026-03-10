import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "destructive", "outline"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
	args: {
		children: "Badge",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Badge",
		variant: "secondary",
	},
};

export const Destructive: Story = {
	args: {
		children: "Badge",
		variant: "destructive",
	},
};

export const Outline: Story = {
	args: {
		children: "Badge",
		variant: "outline",
	},
};
