import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./index";

const meta: Meta<typeof Tabs.Root> = {
	title: "Components/Tabs",
	component: Tabs.Root,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

export const Underline: Story = {
	args: {
		variant: "underline",
		defaultValue: "tab1",
	},
	render: (args) => (
		<Tabs.Root {...args}>
			<Tabs.List>
				<Tabs.Trigger value="tab1">Account</Tabs.Trigger>
				<Tabs.Trigger value="tab2">Password</Tabs.Trigger>
				<Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="tab1">Account settings go here.</Tabs.Content>
			<Tabs.Content value="tab2">Change your password here.</Tabs.Content>
			<Tabs.Content value="tab3">Other settings.</Tabs.Content>
		</Tabs.Root>
	),
};

export const Outline: Story = {
	args: {
		variant: "outline",
		defaultValue: "tab1",
	},
	render: (args) => (
		<Tabs.Root {...args}>
			<Tabs.List>
				<Tabs.Trigger value="tab1">Account</Tabs.Trigger>
				<Tabs.Trigger value="tab2">Password</Tabs.Trigger>
				<Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="tab1">Account settings go here.</Tabs.Content>
			<Tabs.Content value="tab2">Change your password here.</Tabs.Content>
			<Tabs.Content value="tab3">Other settings.</Tabs.Content>
		</Tabs.Root>
	),
};
