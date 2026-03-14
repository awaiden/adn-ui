import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to control size and layout.",
		},
		variant: {
			control: "select",
			description: "The shape variant of the skeleton.",
			options: ["default", "circular"],
			table: {
				defaultValue: { summary: "default" },
			},
		},
	},
	component: Skeleton,
	parameters: {
		docs: {
			description: {
				component:
					"A placeholder component used to indicate content is loading. Supports rectangular and circular shapes.",
			},
		},
	},
	tags: ["autodocs"],
	title: "Components/Skeleton",
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		className: "h-4 w-[250px]",
	},
	parameters: {
		docs: {
			description: {
				story: "A rectangular skeleton with a fixed width and height.",
			},
		},
	},
};

export const Circular: Story = {
	args: {
		className: "size-12",
		variant: "circular",
	},
	parameters: {
		docs: {
			description: {
				story: "A circular skeleton used to represent avatars or icons.",
			},
		},
	},
};

export const CardSkeleton: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"A card-style skeleton combining a circular avatar placeholder and two lines of text.",
			},
		},
	},
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton variant="circular" className="size-12" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-62.5" />
				<Skeleton className="h-4 w-50" />
			</div>
		</div>
	),
};

export const FormSkeleton: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"A form-style skeleton with label and input field placeholders, plus a submit button placeholder.",
			},
		},
	},
	render: () => (
		<div className="space-y-4 w-87.5">
			<div className="space-y-2">
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-10 w-full" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-30" />
				<Skeleton className="h-10 w-full" />
			</div>
			<Skeleton className="h-10 w-25" />
		</div>
	),
};
