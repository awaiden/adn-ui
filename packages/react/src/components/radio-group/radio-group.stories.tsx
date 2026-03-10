import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup.Root> = {
	title: "Components/RadioGroup",
	component: RadioGroup.Root,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup.Root>;

export const Default: Story = {
	render: (args) => (
		<RadioGroup.Root defaultValue="option-one" {...args}>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-one" id="option-one">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label htmlFor="option-one">Option One</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-two" id="option-two">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label htmlFor="option-two">Option Two</Label>
			</div>
		</RadioGroup.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="option-one" disabled>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-one" id="d-option-one">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label htmlFor="d-option-one">Option One</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-two" id="d-option-two">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label htmlFor="d-option-two">Option Two</Label>
			</div>
		</RadioGroup.Root>
	),
};
