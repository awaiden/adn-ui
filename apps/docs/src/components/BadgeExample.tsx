"use client";

import { Badge } from "@adn-ui/react";

const Variants = () => (
	<div className="flex flex-wrap gap-4">
		<Badge variant="primary">Primary</Badge>
		<Badge variant="secondary">Secondary</Badge>
		<Badge variant="destructive">Destructive</Badge>
		<Badge variant="outline">Outline</Badge>
	</div>
);

export const BadgeExample = {
	Variants,
};
