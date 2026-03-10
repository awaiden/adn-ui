"use client";

import { Label, RadioGroup } from "@adn-ui/react";

const Default = () => (
	<RadioGroup.Root defaultValue="comfortable">
		<div className="flex items-center gap-2">
			<RadioGroup.Item value="default" id="r1">
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<Label htmlFor="r1">Default</Label>
		</div>
		<div className="flex items-center gap-2">
			<RadioGroup.Item value="comfortable" id="r2">
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<Label htmlFor="r2">Comfortable</Label>
		</div>
		<div className="flex items-center gap-2">
			<RadioGroup.Item value="compact" id="r3">
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<Label htmlFor="r3">Compact</Label>
		</div>
	</RadioGroup.Root>
);

export const RadioGroupExample = {
	Default,
};
