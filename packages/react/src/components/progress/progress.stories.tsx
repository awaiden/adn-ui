import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./index";

const meta: Meta<typeof Progress.Root> = {
	title: "Components/Progress",
	component: Progress.Root,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		value: {
			control: { type: "range", min: 0, max: 100, step: 1 },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Progress.Root>;

export const Default: Story = {
	render: (args) => (
		<Progress.Root value={60} className="w-64" {...args}>
			<Progress.Indicator
				style={{ transform: `translateX(-${100 - (args.value ?? 60)}%)` }}
			/>
		</Progress.Root>
	),
};

export const Complete: Story = {
	render: () => (
		<Progress.Root value={100} className="w-64">
			<Progress.Indicator style={{ transform: "translateX(0%)" }} />
		</Progress.Root>
	),
};

export const Indeterminate: Story = {
	render: () => (
		<Progress.Root value={null} className="w-64">
			<Progress.Indicator />
		</Progress.Root>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div className="flex flex-col gap-1">
				<span className="text-sm">Small</span>
				<Progress.Root size="sm" value={33}>
					<Progress.Indicator
						style={{ transform: `translateX(-${100 - 33}%)` }}
					/>
				</Progress.Root>
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-sm">Medium</span>
				<Progress.Root size="md" value={66}>
					<Progress.Indicator
						style={{ transform: `translateX(-${100 - 66}%)` }}
					/>
				</Progress.Root>
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-sm">Large</span>
				<Progress.Root size="lg" value={100}>
					<Progress.Indicator style={{ transform: "translateX(0%)" }} />
				</Progress.Root>
			</div>
		</div>
	),
};

export const WithCustomMax: Story = {
	render: () => (
		<Progress.Root value={3} max={10} className="w-64">
			<Progress.Indicator
				style={{ transform: `translateX(-${100 - (3 / 10) * 100}%)` }}
			/>
		</Progress.Root>
	),
};
