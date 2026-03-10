"use client";

import { Button, Tooltip } from "@adn-ui/react";

const Default = () => (
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Hover me</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>Add to library</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
);

const Placement = () => (
	<Tooltip.Provider>
		<div className="flex gap-2">
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Top</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="top">Top Tooltip</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">Bottom Tooltip</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Right Tooltip</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="left">Left Tooltip</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</Tooltip.Provider>
);

export const TooltipExample = {
	Default,
	Placement,
};
