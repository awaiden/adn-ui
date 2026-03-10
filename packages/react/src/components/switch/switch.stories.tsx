import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./index";

const meta: Meta<typeof Switch.Root> = {
	title: "Components/Switch",
	component: Switch.Root,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch.Root>;

export const Default: Story = {
	render: (args) => (
		<Switch.Root {...args}>
			<Switch.Thumb />
		</Switch.Root>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Switch.Root size="sm">
				<Switch.Thumb />
			</Switch.Root>
			<Switch.Root size="md">
				<Switch.Thumb />
			</Switch.Root>
			<Switch.Root size="lg">
				<Switch.Thumb />
			</Switch.Root>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Switch.Root disabled>
				<Switch.Thumb />
			</Switch.Root>
			<Switch.Root disabled checked>
				<Switch.Thumb />
			</Switch.Root>
		</div>
	),
};
