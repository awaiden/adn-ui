import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../label";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
	argTypes: {
		disabled: {
			control: "boolean",
		},
		placeholder: {
			control: "text",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	component: Input,
	tags: ["autodocs"],
	title: "Components/Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
	},
};

export const Small: Story = {
	args: {
		placeholder: "Small input",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		placeholder: "Medium input",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		placeholder: "Large input",
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: "Disabled input",
	},
};

export const WithLabel: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="email">Email</Label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};

export const Invalid: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="required-field">Required field</Label>
			<Input
				id="required-field"
				aria-invalid="true"
				placeholder="This field has an error"
			/>
		</div>
	),
};

export const Password: Story = {
	args: {
		placeholder: "Enter password...",
		type: "password",
	},
};
