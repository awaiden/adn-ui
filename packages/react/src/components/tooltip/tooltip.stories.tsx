import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Tooltip } from "./index";

const meta: Meta = {
	title: "Components/Tooltip",
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Tooltip.Provider delayDuration={200}>
				<Story />
			</Tooltip.Provider>
		),
	],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Hover me</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				Add to library
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const WithArrow: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">With arrow</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				This tooltip has an arrow
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const Placement: Story = {
	render: () => (
		<div className="flex gap-4">
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Top</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="top">
					Placed on top
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">
					Placed on right
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					Placed on bottom
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					Placed on left
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	),
};

export const Instant: Story = {
	render: () => (
		<Tooltip.Root delayDuration={0}>
			<Tooltip.Trigger asChild>
				<Button variant="outline">No delay</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				Shows instantly
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Root>
	),
};
