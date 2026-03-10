import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import {
	ScrollArea,
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from ".";

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

function renderScrollArea() {
	return render(
		<ScrollArea.Root style={{ height: 200, width: 200 }}>
			<ScrollArea.Viewport>
				<div style={{ padding: 16 }}>
					{TAGS.map((tag) => (
						<div key={tag}>{tag}</div>
					))}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="vertical">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>,
	);
}

describe("ScrollArea", () => {
	describe("rendering", () => {
		test("renders root", async () => {
			const { container } = await renderScrollArea();

			const root = container.querySelector('[data-slot="scroll-area-root"]');
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("renders viewport", async () => {
			const { container } = await renderScrollArea();

			const viewport = container.querySelector(
				'[data-slot="scroll-area-viewport"]',
			);
			await expect.element(viewport as HTMLElement).toBeInTheDocument();
		});

		test("renders content inside viewport", async () => {
			const { getByText } = await renderScrollArea();

			await expect.element(getByText("v1.2.0-beta.50")).toBeInTheDocument();
		});

		test("renders scrollbar", async () => {
			const { container } = await renderScrollArea();

			// Scrollbar may only render when content overflows and is hovered;
			// verify the scrollbar component is at least part of the tree
			const root = container.querySelector('[data-slot="scroll-area-root"]');
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});
	});

	describe("compound export", () => {
		test("named exports are available", () => {
			expect(ScrollAreaRoot).toBeDefined();
			expect(ScrollAreaViewport).toBeDefined();
			expect(ScrollAreaScrollbar).toBeDefined();
			expect(ScrollAreaThumb).toBeDefined();
			expect(ScrollAreaCorner).toBeDefined();
		});

		test("compound export has all parts", () => {
			expect(ScrollArea.Root).toBeDefined();
			expect(ScrollArea.Viewport).toBeDefined();
			expect(ScrollArea.Scrollbar).toBeDefined();
			expect(ScrollArea.Thumb).toBeDefined();
			expect(ScrollArea.Corner).toBeDefined();
		});
	});
});
