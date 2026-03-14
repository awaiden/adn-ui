import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
} from ".";

function renderTooltip({ defaultOpen }: { defaultOpen?: boolean } = {}) {
	return render(
		<Tooltip.Provider>
			<Tooltip.Root defaultOpen={defaultOpen} delayDuration={0}>
				<Tooltip.Trigger>Hover me</Tooltip.Trigger>
				<Tooltip.Content>
					Tooltip text
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>,
	);
}

describe("Tooltip", () => {
	describe("rendering", () => {
		test("renders trigger", () => {
			renderTooltip();

			expect(screen.getByText("Hover me")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", () => {
			const { container } = renderTooltip();

			const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
			expect(trigger as HTMLElement).toBeInTheDocument();
		});

		test("content is not visible by default", async () => {
			renderTooltip();

			const content = document.querySelector('[data-slot="tooltip-content"]');
			expect(content).toBeNull();
		});
	});

	describe("open/close behavior", () => {
		test("renders content when defaultOpen is true", async () => {
			renderTooltip({ defaultOpen: true });

			await waitFor(() => {
				const content = document.querySelector('[data-slot="tooltip-content"]');
				expect(content).toBeInTheDocument();
			});
		});

		test("shows content text when open", async () => {
			renderTooltip({ defaultOpen: true });

			await waitFor(() => {
				const content = document.querySelector('[data-slot="tooltip-content"]');
				expect(content).toHaveTextContent("Tooltip text");
			});
		});

		test("applies CSS class to content", async () => {
			renderTooltip({ defaultOpen: true });

			await waitFor(() => {
				const content = document.querySelector('[data-slot="tooltip-content"]');
				expect(content).toHaveClass("tooltip__content");
			});
		});

		test("renders arrow inside content", async () => {
			renderTooltip({ defaultOpen: true });

			await waitFor(() => {
				const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
				expect(arrow).toBeInTheDocument();
			});
		});

		test("applies CSS class to arrow", async () => {
			renderTooltip({ defaultOpen: true });

			await waitFor(() => {
				const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
				expect(arrow).toHaveClass("tooltip__arrow");
			});
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to content", async () => {
			render(
				<Tooltip.Provider>
					<Tooltip.Root defaultOpen delayDuration={0}>
						<Tooltip.Trigger>Trigger</Tooltip.Trigger>
						<Tooltip.Content className="custom-content">
							Content
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>,
			);

			await waitFor(() => {
				const content = document.querySelector('[data-slot="tooltip-content"]');
				expect(content).toHaveClass("tooltip__content");
				expect(content).toHaveClass("custom-content");
			});
		});

		test("applies custom className to arrow", async () => {
			render(
				<Tooltip.Provider>
					<Tooltip.Root defaultOpen delayDuration={0}>
						<Tooltip.Trigger>Trigger</Tooltip.Trigger>
						<Tooltip.Content>
							Content
							<Tooltip.Arrow className="custom-arrow" />
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>,
			);

			await waitFor(() => {
				const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
				expect(arrow).toHaveClass("tooltip__arrow");
				expect(arrow).toHaveClass("custom-arrow");
			});
		});
	});

	describe("compound export", () => {
		test("named exports are available", () => {
			expect(TooltipProvider).toBeDefined();
			expect(TooltipRoot).toBeDefined();
			expect(TooltipTrigger).toBeDefined();
			expect(TooltipContent).toBeDefined();
			expect(TooltipArrow).toBeDefined();
		});

		test("Tooltip compound object has all parts", () => {
			expect(Tooltip.Provider).toBe(TooltipProvider);
			expect(Tooltip.Root).toBe(TooltipRoot);
			expect(Tooltip.Trigger).toBe(TooltipTrigger);
			expect(Tooltip.Content).toBe(TooltipContent);
			expect(Tooltip.Arrow).toBe(TooltipArrow);
		});
	});
});
