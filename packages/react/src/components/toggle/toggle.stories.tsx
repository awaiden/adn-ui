import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bold, Italic, Underline } from "lucide-react";

import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
	argTypes: {
		disabled: {
			control: "boolean",
		},
		pressed: {
			control: "boolean",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		variant: {
			control: "select",
			options: ["default", "outline"],
		},
	},
	component: Toggle,
	tags: ["autodocs"],
	title: "Components/Toggle",
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		"aria-label": "Toggle bold",
		children: <Bold className="size-4" />,
	},
};

export const Outline: Story = {
	args: {
		"aria-label": "Toggle italic",
		children: <Italic className="size-4" />,
		variant: "outline",
	},
};

export const Small: Story = {
	args: {
		"aria-label": "Toggle underline",
		children: <Underline className="size-4" />,
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		"aria-label": "Toggle bold",
		children: <Bold className="size-4" />,
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		"aria-label": "Toggle bold",
		children: <Bold className="size-4" />,
		disabled: true,
	},
};
