import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
	Popover,
	PopoverAnchor,
	PopoverClose,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from ".";

function renderPopover({ defaultOpen }: { defaultOpen?: boolean } = {}) {
	return render(
		<Popover.Root defaultOpen={defaultOpen}>
			<Popover.Trigger>Open popover</Popover.Trigger>
			<Popover.Content>
				<p>Popover content</p>
				<Popover.Close />
			</Popover.Content>
		</Popover.Root>,
	);
}

describe("Popover", () => {
	describe("rendering", () => {
		test("renders trigger", () => {
			renderPopover();

			expect(screen.getByText("Open popover")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", () => {
			const { container } = renderPopover();

			const trigger = container.querySelector('[data-slot="popover-trigger"]');
			expect(trigger as HTMLElement).toBeInTheDocument();
		});

		test("content is not visible by default", async () => {
			renderPopover();

			const content = document.querySelector('[data-slot="popover-content"]');
			expect(content).toBeNull();
		});
	});

	describe("open/close behavior", () => {
		test("opens on trigger click", () => {
			renderPopover();

			fireEvent.click(screen.getByText("Open popover"));

			const content = document.querySelector('[data-slot="popover-content"]');
			expect(content as HTMLElement).toBeInTheDocument();
		});

		test("shows content text when open", () => {
			renderPopover();

			fireEvent.click(screen.getByText("Open popover"));

			expect(screen.getByText("Popover content")).toBeInTheDocument();
		});

		test("renders open when defaultOpen is true", async () => {
			renderPopover({ defaultOpen: true });

			const content = document.querySelector('[data-slot="popover-content"]');
			expect(content as HTMLElement).toBeInTheDocument();
		});

		test("applies CSS class to content", async () => {
			renderPopover({ defaultOpen: true });

			const content = document.querySelector('[data-slot="popover-content"]');
			expect(content as HTMLElement).toHaveClass("popover__content");
		});

		test("renders close button inside content", async () => {
			renderPopover({ defaultOpen: true });

			const close = document.querySelector('[data-slot="popover-close"]');
			expect(close as HTMLElement).toBeInTheDocument();
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to content", () => {
			render(
				<Popover.Root defaultOpen>
					<Popover.Trigger>Trigger</Popover.Trigger>
					<Popover.Content className="custom-content">Content</Popover.Content>
				</Popover.Root>,
			);

			const content = document.querySelector('[data-slot="popover-content"]');
			expect(content as HTMLElement).toHaveClass("popover__content");
			expect(content as HTMLElement).toHaveClass("custom-content");
		});

		test("applies custom className to close button", () => {
			render(
				<Popover.Root defaultOpen>
					<Popover.Trigger>Trigger</Popover.Trigger>
					<Popover.Content>
						<Popover.Close className="custom-close" />
					</Popover.Content>
				</Popover.Root>,
			);

			const close = document.querySelector('[data-slot="popover-close"]');
			expect(close as HTMLElement).toHaveClass("popover__close");
			expect(close as HTMLElement).toHaveClass("custom-close");
		});
	});

	describe("compound export", () => {
		test("named exports are available", () => {
			expect(PopoverRoot).toBeDefined();
			expect(PopoverTrigger).toBeDefined();
			expect(PopoverAnchor).toBeDefined();
			expect(PopoverContent).toBeDefined();
			expect(PopoverClose).toBeDefined();
		});

		test("Popover compound object has all parts", () => {
			expect(Popover.Root).toBe(PopoverRoot);
			expect(Popover.Trigger).toBe(PopoverTrigger);
			expect(Popover.Anchor).toBe(PopoverAnchor);
			expect(Popover.Content).toBe(PopoverContent);
			expect(Popover.Close).toBe(PopoverClose);
		});
	});
});
