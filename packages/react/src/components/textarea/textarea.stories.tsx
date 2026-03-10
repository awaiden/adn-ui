import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Textarea } from "./index";

const meta: Meta<typeof Textarea> = {
	title: "Components/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		disabled: {
			control: "boolean",
		},
		placeholder: {
			control: "text",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: "Type your message...",
	},
};

export const Small: Story = {
	args: {
		placeholder: "Small textarea",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		placeholder: "Medium textarea",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		placeholder: "Large textarea",
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled textarea",
		disabled: true,
	},
};

export const WithLabel: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Write your message here..." />
		</div>
	),
};

export const Invalid: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="bio">Bio</Label>
			<Textarea
				id="bio"
				aria-invalid="true"
				placeholder="This field has an error"
			/>
		</div>
	),
};

export const WithRows: Story = {
	args: {
		placeholder: "Textarea with 6 rows",
		rows: 6,
	},
};
