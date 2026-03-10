import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbsUp } from "lucide-react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "outline", "ghost", "destructive"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button",
		variant: "secondary",
	},
};

export const Outline: Story = {
	args: {
		children: "Button",
		variant: "outline",
	},
};

export const Ghost: Story = {
	args: {
		children: "Button",
		variant: "ghost",
	},
};

export const Destructive: Story = {
	args: {
		children: "Button",
		variant: "destructive",
	},
};

export const Small: Story = {
	args: {
		children: "Button",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		children: "Button",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		children: "Button",
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		children: "Button",
		disabled: true,
	},
};

export const IconButton: Story = {
	args: {
		size: "icon",
		children: <ThumbsUp />,
	},
};
