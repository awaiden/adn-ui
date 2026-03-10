import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleRoot,
	CollapsibleTrigger,
} from ".";

interface RenderCollapsibleProps {
	defaultOpen?: boolean;
	disabled?: boolean;
	triggerText?: string;
	contentText?: string;
}

function renderCollapsible({
	defaultOpen,
	disabled,
	triggerText = "Toggle",
	contentText = "Collapsible content",
}: RenderCollapsibleProps = {}) {
	return render(
		<Collapsible.Root defaultOpen={defaultOpen} disabled={disabled}>
			<Collapsible.Trigger>{triggerText}</Collapsible.Trigger>
			<Collapsible.Content>
				<div>{contentText}</div>
			</Collapsible.Content>
		</Collapsible.Root>,
	);
}

describe("Collapsible", () => {
	describe("rendering", () => {
		test("renders trigger", async () => {
			const { getByText } = await renderCollapsible();

			await expect.element(getByText("Toggle")).toBeInTheDocument();
		});

		test("applies data-slot attributes", async () => {
			const { container } = await renderCollapsible();

			const root = container.querySelector('[data-slot="collapsible-root"]');
			await expect.element(root as HTMLElement).toBeInTheDocument();

			const trigger = container.querySelector(
				'[data-slot="collapsible-trigger"]',
			);
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});

		test("applies base CSS classes", async () => {
			const { container } = await renderCollapsible();

			const root = container.querySelector('[data-slot="collapsible-root"]');
			await expect.element(root as HTMLElement).toHaveClass("collapsible");

			const trigger = container.querySelector(
				'[data-slot="collapsible-trigger"]',
			);
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("collapsible__trigger");
		});

		test("applies custom className to root", async () => {
			const { container } = await render(
				<Collapsible.Root className="custom-root">
					<Collapsible.Trigger>Toggle</Collapsible.Trigger>
					<Collapsible.Content>Content</Collapsible.Content>
				</Collapsible.Root>,
			);

			const root = container.querySelector('[data-slot="collapsible-root"]');
			await expect.element(root as HTMLElement).toHaveClass("collapsible");
			await expect.element(root as HTMLElement).toHaveClass("custom-root");
		});
	});

	describe("open/close behavior", () => {
		test("content is closed by default", async () => {
			const { container } = await renderCollapsible();

			const content = container.querySelector(
				'[data-slot="collapsible-content"]',
			);
			await expect
				.element(content as HTMLElement)
				.toHaveAttribute("data-state", "closed");
			await expect
				.element(content as HTMLElement)
				.toHaveAttribute("hidden", "");
		});

		test("expands content on trigger click", async () => {
			const { getByText, container } = await renderCollapsible();

			await getByText("Toggle").click();

			const content = container.querySelector(
				'[data-slot="collapsible-content"][data-state="open"]',
			);
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("collapses content on second trigger click", async () => {
			const { getByText, container } = await renderCollapsible();

			await getByText("Toggle").click();
			await getByText("Toggle").click();

			const content = container.querySelector(
				'[data-slot="collapsible-content"][data-state="open"]',
			);
			expect(content).toBeNull();
		});

		test("renders open when defaultOpen is true", async () => {
			const { container } = await renderCollapsible({
				defaultOpen: true,
			});

			const content = container.querySelector(
				'[data-slot="collapsible-content"]',
			);
			await expect.element(content as HTMLElement).toBeInTheDocument();
			await expect
				.element(content as HTMLElement)
				.toHaveAttribute("data-state", "open");
		});
	});

	describe("disabled", () => {
		test("disabled trigger has data-disabled attribute", async () => {
			const { container } = await renderCollapsible({ disabled: true });

			const trigger = container.querySelector(
				'[data-slot="collapsible-trigger"]',
			);
			await expect
				.element(trigger as HTMLElement)
				.toHaveAttribute("data-disabled", "");
		});

		test("disabled root has data-disabled attribute", async () => {
			const { container } = await renderCollapsible({ disabled: true });

			const root = container.querySelector('[data-slot="collapsible-root"]');
			await expect
				.element(root as HTMLElement)
				.toHaveAttribute("data-disabled", "");
		});
	});

	describe("props forwarding", () => {
		test("forwards custom className to trigger", async () => {
			const { container } = await render(
				<Collapsible.Root>
					<Collapsible.Trigger className="custom-trigger">
						Toggle
					</Collapsible.Trigger>
					<Collapsible.Content>Content</Collapsible.Content>
				</Collapsible.Root>,
			);

			const trigger = container.querySelector(
				'[data-slot="collapsible-trigger"]',
			);
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("collapsible__trigger");
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("custom-trigger");
		});

		test("forwards custom className to content", async () => {
			const { container } = await render(
				<Collapsible.Root defaultOpen>
					<Collapsible.Trigger>Toggle</Collapsible.Trigger>
					<Collapsible.Content className="custom-content">
						Content
					</Collapsible.Content>
				</Collapsible.Root>,
			);

			const content = container.querySelector(
				'[data-slot="collapsible-content"]',
			);
			await expect
				.element(content as HTMLElement)
				.toHaveClass("collapsible__content");
			await expect
				.element(content as HTMLElement)
				.toHaveClass("custom-content");
		});
	});

	describe("compound export", () => {
		test("named exports are available", () => {
			expect(CollapsibleRoot).toBeDefined();
			expect(CollapsibleTrigger).toBeDefined();
			expect(CollapsibleContent).toBeDefined();
		});

		test("Collapsible compound object has all parts", () => {
			expect(Collapsible.Root).toBe(CollapsibleRoot);
			expect(Collapsible.Trigger).toBe(CollapsibleTrigger);
			expect(Collapsible.Content).toBe(CollapsibleContent);
		});
	});
});
