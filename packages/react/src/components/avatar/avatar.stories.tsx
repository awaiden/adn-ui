import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index";

const meta: Meta<typeof Avatar.Root> = {
	title: "Components/Avatar",
	component: Avatar.Root,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Avatar.Root>;

export const Default: Story = {
	render: (args) => (
		<Avatar.Root {...args}>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	),
};

export const Fallback: Story = {
	render: (args) => (
		<Avatar.Root {...args}>
			<Avatar.Image src="https://invalid-url.com" alt="@invalid" />
			<Avatar.Fallback>JD</Avatar.Fallback>
		</Avatar.Root>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex items-center gap-4">
			<Avatar.Root {...args} size="sm">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root {...args} size="md">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root {...args} size="lg">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</div>
	),
};
