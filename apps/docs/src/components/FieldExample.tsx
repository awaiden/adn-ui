"use client";

import { Field, Input } from "@adn-ui/react";

const Default = () => (
	<Field.Root id="email">
		<Field.Label>Email</Field.Label>
		<Input id="email" type="email" placeholder="you@example.com" />
	</Field.Root>
);

const WithDescription = () => (
	<Field.Root id="username">
		<Field.Label>Username</Field.Label>
		<Input id="username" placeholder="Enter your username" />
		<Field.Description>
			This will be your public display name.
		</Field.Description>
	</Field.Root>
);

const WithError = () => (
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
);

const Horizontal = () => (
	<Field.Root id="horizontal-field" orientation="horizontal">
		<Field.Label>Name</Field.Label>
		<Input id="horizontal-field" placeholder="Enter your name" />
	</Field.Root>
);

export const FieldExample = {
	Default,
	WithDescription,
	WithError,
	Horizontal,
};
