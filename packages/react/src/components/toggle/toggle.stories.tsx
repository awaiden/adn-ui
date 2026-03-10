import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
	title: "Components/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		disabled: {
			control: "boolean",
		},
		pressed: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		children: <Bold className="size-4" />,
		"aria-label": "Toggle bold",
	},
};

export const Outline: Story = {
	args: {
		children: <Italic className="size-4" />,
		variant: "outline",
		"aria-label": "Toggle italic",
	},
};

export const Small: Story = {
	args: {
		children: <Underline className="size-4" />,
		size: "sm",
		"aria-label": "Toggle underline",
	},
};

export const Large: Story = {
	args: {
		children: <Bold className="size-4" />,
		size: "lg",
		"aria-label": "Toggle bold",
	},
};

export const Disabled: Story = {
	args: {
		children: <Bold className="size-4" />,
		disabled: true,
		"aria-label": "Toggle bold",
	},
};
