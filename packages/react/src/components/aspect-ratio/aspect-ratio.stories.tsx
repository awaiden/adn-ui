import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./index";

const meta: Meta<typeof AspectRatio> = {
	title: "Components/AspectRatio",
	component: AspectRatio,
	tags: ["autodocs"],
	argTypes: {
		ratio: {
			control: "number",
			description: "The desired aspect ratio (width / height).",
		},
	},
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
	render: (args) => (
		<div className="w-[300px] overflow-hidden rounded-md border border-neutral-200">
			<AspectRatio ratio={16 / 9} {...args}>
				<img
					className="h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape"
				/>
			</AspectRatio>
		</div>
	),
};

export const Square: Story = {
	render: (args) => (
		<div className="w-[300px] overflow-hidden rounded-md border border-neutral-200">
			<AspectRatio ratio={1} {...args}>
				<img
					className="h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape"
				/>
			</AspectRatio>
		</div>
	),
};

export const Wide: Story = {
	render: (args) => (
		<div className="w-[300px] overflow-hidden rounded-md border border-neutral-200">
			<AspectRatio ratio={21 / 9} {...args}>
				<img
					className="h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape"
				/>
			</AspectRatio>
		</div>
	),
};
