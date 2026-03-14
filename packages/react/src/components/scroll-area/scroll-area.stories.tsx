import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "../separator";
import { ScrollArea } from "./index";

const meta: Meta = {
	tags: ["autodocs"],
	title: "Components/ScrollArea",
};

export default meta;

type Story = StoryObj;

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export const Vertical: Story = {
	render: () => (
		<ScrollArea.Root className="h-72 w-48 rounded-md border">
			<ScrollArea.Viewport>
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
					{TAGS.map((tag) => (
						<div key={tag}>
							<div className="text-sm">{tag}</div>
							<Separator className="my-2" />
						</div>
					))}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="vertical">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};

export const Horizontal: Story = {
	render: () => (
		<ScrollArea.Root className="w-96 whitespace-nowrap rounded-md border">
			<ScrollArea.Viewport>
				<div className="flex w-max space-x-4 p-4">
					{Array.from({ length: 20 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: This is a static list of items that won't change, so using the index as a key is acceptable in this case.
						<figure key={i} className="shrink-0">
							<div className="flex h-36 w-64 items-center justify-center overflow-hidden rounded-md bg-muted">
								<span className="text-sm text-muted-foreground">
									Artwork {i + 1}
								</span>
							</div>
							<figcaption className="pt-2 text-xs text-muted-foreground">
								Photo by Artist {i + 1}
							</figcaption>
						</figure>
					))}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};

export const Both: Story = {
	render: () => (
		<ScrollArea.Root className="h-72 w-72 rounded-md border">
			<ScrollArea.Viewport>
				<div className="w-150 p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">
						Wide Content
					</h4>
					{Array.from({ length: 30 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: This is a static list of items that won't change, so using the index as a key is acceptable in this case.
						<div key={i} className="text-sm">
							This is a long line of text that extends beyond the scroll area
							width to demonstrate horizontal scrolling — item {i + 1}
						</div>
					))}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="vertical">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};
