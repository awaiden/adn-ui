import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Checkbox, CheckboxIndicator } from "./index";

const meta: Meta<typeof Checkbox.Root> = {
	title: "Components/Checkbox",
	component: Checkbox.Root,
	tags: ["autodocs"],
	argTypes: {
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

type Story = StoryObj<typeof Checkbox.Root>;

export const Default: Story = {
	render: (args) => (
		<Checkbox.Root {...args}>
			<CheckboxIndicator />
		</Checkbox.Root>
	),
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="terms" {...args}>
				<CheckboxIndicator />
			</Checkbox.Root>
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<Checkbox.Root size="sm" id="sm" {...args}>
					<CheckboxIndicator />
				</Checkbox.Root>
				<Label htmlFor="sm" size="sm">
					Small Checkbox
				</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox.Root size="md" id="md" {...args}>
					<CheckboxIndicator />
				</Checkbox.Root>
				<Label htmlFor="md" size="md">
					Medium Checkbox
				</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox.Root size="lg" id="lg" {...args}>
					<CheckboxIndicator />
				</Checkbox.Root>
				<Label htmlFor="lg" size="lg">
					Large Checkbox
				</Label>
			</div>
		</div>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="disabled" disabled {...args}>
				<CheckboxIndicator />
			</Checkbox.Root>
			<Label htmlFor="disabled" className="opacity-50">
				Disabled Checkbox
			</Label>
		</div>
	),
};
