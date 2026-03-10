import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
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
		test("renders trigger", async () => {
			const { getByText } = await renderTooltip();

			await expect.element(getByText("Hover me")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", async () => {
			const { container } = await renderTooltip();

			const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});

		test("content is not visible by default", async () => {
			await renderTooltip();

			const content = document.querySelector('[data-slot="tooltip-content"]');
			expect(content).toBeNull();
		});
	});

	describe("open/close behavior", () => {
		test("renders content when defaultOpen is true", async () => {
			await renderTooltip({ defaultOpen: true });

			const content = document.querySelector('[data-slot="tooltip-content"]');
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("shows content text when open", async () => {
			const { getByText } = await renderTooltip({ defaultOpen: true });

			await expect.element(getByText("Tooltip text")).toBeInTheDocument();
		});

		test("applies CSS class to content", async () => {
			await renderTooltip({ defaultOpen: true });

			const content = document.querySelector('[data-slot="tooltip-content"]');
			await expect
				.element(content as HTMLElement)
				.toHaveClass("tooltip__content");
		});

		test("renders arrow inside content", async () => {
			await renderTooltip({ defaultOpen: true });

			const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
			await expect.element(arrow as HTMLElement).toBeInTheDocument();
		});

		test("applies CSS class to arrow", async () => {
			await renderTooltip({ defaultOpen: true });

			const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
			await expect.element(arrow as HTMLElement).toHaveClass("tooltip__arrow");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to content", async () => {
			await render(
				<Tooltip.Provider>
					<Tooltip.Root defaultOpen delayDuration={0}>
						<Tooltip.Trigger>Trigger</Tooltip.Trigger>
						<Tooltip.Content className="custom-content">
							Content
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>,
			);

			const content = document.querySelector('[data-slot="tooltip-content"]');
			await expect
				.element(content as HTMLElement)
				.toHaveClass("tooltip__content");
			await expect
				.element(content as HTMLElement)
				.toHaveClass("custom-content");
		});

		test("applies custom className to arrow", async () => {
			await render(
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

			const arrow = document.querySelector('[data-slot="tooltip-arrow"]');
			await expect.element(arrow as HTMLElement).toHaveClass("tooltip__arrow");
			await expect.element(arrow as HTMLElement).toHaveClass("custom-arrow");
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
