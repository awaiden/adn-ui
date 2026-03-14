"use client";

import { Input, Label } from "@adn-ui/react";

const Default = () => (
	<Input type="email" placeholder="Email" className="max-w-sm" />
);

const WithLabel = () => (
	<div className="grid w-full max-w-sm items-center gap-1.5">
		<Label htmlFor="email">Email</Label>
		<Input type="email" id="email" placeholder="Email" />
	</div>
);

const Sizes = () => (
	<div className="flex flex-col gap-4 w-full max-w-sm">
		<Input size="sm" placeholder="Small input" />
		<Input size="md" placeholder="Medium input" />
		<Input size="lg" placeholder="Large input" />
	</div>
);

export const InputExample = {
	Default,
	Sizes,
	WithLabel,
};
