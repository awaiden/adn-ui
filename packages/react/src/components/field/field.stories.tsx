import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input";
import { Field } from "./index";

const meta: Meta = {
	title: "Components/Field",
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["vertical", "horizontal"],
		},
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<Field.Root id="email">
			<Field.Label>Email</Field.Label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</Field.Root>
	),
};

export const WithDescription: Story = {
	render: () => (
		<Field.Root id="username">
			<Field.Label>Username</Field.Label>
			<Input id="username" placeholder="Enter your username" />
			<Field.Description>
				This will be your public display name.
			</Field.Description>
		</Field.Root>
	),
};

export const WithError: Story = {
	render: () => (
		<Field.Root id="required-email">
			<Field.Label>Email</Field.Label>
			<Input
				id="required-email"
				type="email"
				aria-invalid="true"
				placeholder="you@example.com"
			/>
			<Field.Error>Email is required.</Field.Error>
		</Field.Root>
	),
};

export const WithDescriptionAndError: Story = {
	render: () => (
		<Field.Root id="password">
			<Field.Label>Password</Field.Label>
			<Input id="password" type="password" aria-invalid="true" />
			<Field.Description>Must be at least 8 characters.</Field.Description>
			<Field.Error>Password is too short.</Field.Error>
		</Field.Root>
	),
};

export const Horizontal: Story = {
	render: () => (
		<Field.Root id="horizontal-field" orientation="horizontal">
			<Field.Label>Name</Field.Label>
			<Input id="horizontal-field" placeholder="Enter your name" />
		</Field.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<Field.Root id="vertical-field" orientation="vertical">
			<Field.Label>Name</Field.Label>
			<Input id="vertical-field" placeholder="Enter your name" />
		</Field.Root>
	),
};
