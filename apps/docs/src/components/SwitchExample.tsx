"use client";

import { Label, Switch } from "@adn-ui/react";

const WithLabel = () => (
	<div className="flex items-center gap-2">
		<Switch.Root id="airplane-mode">
			<Switch.Thumb />
		</Switch.Root>
		<Label htmlFor="airplane-mode">Airplane Mode</Label>
	</div>
);

const Sizes = () => (
	<div className="flex flex-col gap-4">
		<div className="flex items-center gap-2">
			<Switch.Root size="sm" id="s-sm">
				<Switch.Thumb />
			</Switch.Root>
			<Label htmlFor="s-sm">Small Switch</Label>
		</div>
		<div className="flex items-center gap-2">
			<Switch.Root size="md" id="s-md">
				<Switch.Thumb />
			</Switch.Root>
			<Label htmlFor="s-md">Medium Switch</Label>
		</div>
		<div className="flex items-center gap-2">
			<Switch.Root size="lg" id="s-lg">
				<Switch.Thumb />
			</Switch.Root>
			<Label htmlFor="s-lg">Large Switch</Label>
		</div>
	</div>
);

export const SwitchExample = {
	WithLabel,
	Sizes,
};
