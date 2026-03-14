import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../label";
import { Slider } from "./index";

const meta: Meta<typeof Slider.Root> = {
	argTypes: {
		disabled: {
			control: "boolean",
		},
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	component: Slider.Root,
	tags: ["autodocs"],
	title: "Components/Slider",
};

export default meta;

type Story = StoryObj<typeof Slider.Root>;

export const Default: Story = {
	render: (args) => (
		<Slider.Root defaultValue={[50]} max={100} step={1} {...args}>
			<Slider.Track>
				<Slider.Range />
			</Slider.Track>
			<Slider.Thumb aria-label="Volume" />
		</Slider.Root>
	),
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label>Volume</Label>
			<Slider.Root defaultValue={[50]} max={100} step={1} {...args}>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb aria-label="Volume" />
			</Slider.Root>
		</div>
	),
};

export const Range: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label>Price Range</Label>
			<Slider.Root defaultValue={[25, 75]} max={100} step={1} {...args}>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb aria-label="Minimum price" />
				<Slider.Thumb aria-label="Maximum price" />
			</Slider.Root>
		</div>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-6 w-64">
			<div className="flex flex-col gap-2">
				<Label size="sm">Small</Label>
				<Slider.Root size="sm" defaultValue={[33]} {...args}>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb aria-label="Small slider" />
				</Slider.Root>
			</div>
			<div className="flex flex-col gap-2">
				<Label size="md">Medium</Label>
				<Slider.Root size="md" defaultValue={[50]} {...args}>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb aria-label="Medium slider" />
				</Slider.Root>
			</div>
			<div className="flex flex-col gap-2">
				<Label size="lg">Large</Label>
				<Slider.Root size="lg" defaultValue={[66]} {...args}>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb aria-label="Large slider" />
				</Slider.Root>
			</div>
		</div>
	),
};

export const Vertical: Story = {
	render: (args) => (
		<div className="flex items-center gap-6 h-48">
			<Slider.Root
				orientation="vertical"
				defaultValue={[50]}
				max={100}
				step={1}
				{...args}
			>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb aria-label="Volume" />
			</Slider.Root>
		</div>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label className="opacity-50">Disabled</Label>
			<Slider.Root defaultValue={[50]} disabled {...args}>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb aria-label="Disabled slider" />
			</Slider.Root>
		</div>
	),
};

export const Steps: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label>Step: 10</Label>
			<Slider.Root defaultValue={[50]} step={10} {...args}>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb aria-label="Stepped slider" />
			</Slider.Root>
		</div>
	),
};
