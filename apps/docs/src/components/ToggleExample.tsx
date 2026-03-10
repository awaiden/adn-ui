"use client";

import { Toggle } from "@adn-ui/react";
import { Bold, Italic, Underline } from "lucide-react";

const Default = () => (
	<Toggle aria-label="Toggle bold">
		<Bold className="size-4" />
	</Toggle>
);

const Outline = () => (
	<Toggle variant="outline" aria-label="Toggle italic">
		<Italic className="size-4" />
	</Toggle>
);

const Sizes = () => (
	<div className="flex items-center gap-4">
		<Toggle size="sm" aria-label="Toggle underline">
			<Underline className="size-4" />
		</Toggle>
		<Toggle size="md" aria-label="Toggle underline">
			<Underline className="size-4" />
		</Toggle>
		<Toggle size="lg" aria-label="Toggle underline">
			<Underline className="size-4" />
		</Toggle>
	</div>
);

export const ToggleExample = {
	Default,
	Outline,
	Sizes,
};
