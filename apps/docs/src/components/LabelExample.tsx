"use client";

import { Label } from "@adn-ui/react";

const Default = () => (
	<div className="grid w-full max-w-sm items-center gap-1.5">
		<Label htmlFor="terms">Accept terms and conditions</Label>
	</div>
);

const Sizes = () => (
	<div className="flex flex-col gap-4">
		<Label size="sm">Small Label</Label>
		<Label size="md">Medium Label</Label>
		<Label size="lg">Large Label</Label>
	</div>
);

export const LabelExample = {
	Default,
	Sizes,
};
