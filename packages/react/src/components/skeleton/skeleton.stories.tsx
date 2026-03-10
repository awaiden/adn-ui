import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
	title: "Components/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A placeholder component used to indicate content is loading. Supports rectangular and circular shapes.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "circular"],
			description: "The shape variant of the skeleton.",
			table: {
				defaultValue: { summary: "default" },
			},
		},
		className: {
			control: "text",
			description: "Additional CSS classes to control size and layout.",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: "A rectangular skeleton with a fixed width and height.",
			},
		},
	},
	args: {
		className: "h-4 w-[250px]",
	},
};

export const Circular: Story = {
	parameters: {
		docs: {
			description: {
				story: "A circular skeleton used to represent avatars or icons.",
			},
		},
	},
	args: {
		variant: "circular",
		className: "size-12",
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
