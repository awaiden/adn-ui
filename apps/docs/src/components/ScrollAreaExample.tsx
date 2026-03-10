"use client";

import { ScrollArea, Separator } from "@adn-ui/react";

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

function Default() {
	return (
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
	);
}

function Horizontal() {
	return (
		<ScrollArea.Root className="w-96 whitespace-nowrap rounded-md border">
			<ScrollArea.Viewport>
				<div className="flex w-max space-x-4 p-4">
					{Array.from({ length: 15 }).map((_, i) => (
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
	);
}

export const ScrollAreaExample = {
	Default,
	Horizontal,
};
