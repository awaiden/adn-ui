import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import {
	Accordion,
	AccordionContent,
	AccordionHeader,
	AccordionItem,
	AccordionRoot,
	AccordionTrigger,
} from ".";

interface RenderAccordionProps {
	type?: "single" | "multiple";
	collapsible?: boolean;
	defaultValue?: string | string[];
	items?: { value: string; trigger: string; content: string }[];
	disabledItems?: string[];
}

function renderAccordion({
	type = "single",
	collapsible = true,
	defaultValue,
	items = [
		{ value: "item-1", trigger: "Trigger 1", content: "Content 1" },
		{ value: "item-2", trigger: "Trigger 2", content: "Content 2" },
		{ value: "item-3", trigger: "Trigger 3", content: "Content 3" },
	],
	disabledItems = [] as string[],
}: RenderAccordionProps = {}) {
	return render(
		type === "single" ? (
			<Accordion.Root
				type="single"
				collapsible={collapsible}
				defaultValue={
					typeof defaultValue === "string" ? defaultValue : undefined
				}
			>
				{items.map((item) => (
					<Accordion.Item
						key={item.value}
						value={item.value}
						disabled={disabledItems.includes(item.value)}
					>
						<Accordion.Trigger>{item.trigger}</Accordion.Trigger>
						<Accordion.Content>
							<div>{item.content}</div>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		) : (
			<Accordion.Root
				type="multiple"
				defaultValue={Array.isArray(defaultValue) ? defaultValue : undefined}
			>
				{items.map((item) => (
					<Accordion.Item
						key={item.value}
						value={item.value}
						disabled={disabledItems.includes(item.value)}
					>
						<Accordion.Trigger>{item.trigger}</Accordion.Trigger>
						<Accordion.Content>
							<div>{item.content}</div>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		),
	);
}

describe("Accordion", () => {
	describe("rendering", () => {
		test("renders all items", async () => {
			const { getByText } = await renderAccordion();

			await expect.element(getByText("Trigger 1")).toBeInTheDocument();
			await expect.element(getByText("Trigger 2")).toBeInTheDocument();
			await expect.element(getByText("Trigger 3")).toBeInTheDocument();
		});

		test("applies data-slot attributes", async () => {
			const { container } = await renderAccordion();

			const root = container.querySelector('[data-slot="accordion-root"]');
			await expect.element(root as HTMLElement).toBeInTheDocument();

			const item = container.querySelector('[data-slot="accordion-item"]');
			await expect.element(item as HTMLElement).toBeInTheDocument();

			const trigger = container.querySelector(
				'[data-slot="accordion-trigger"]',
			);
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});

		test("applies base CSS classes", async () => {
			const { container } = await renderAccordion();

			const root = container.querySelector('[data-slot="accordion-root"]');
			await expect.element(root as HTMLElement).toHaveClass("accordion");

			const item = container.querySelector('[data-slot="accordion-item"]');
			await expect.element(item as HTMLElement).toHaveClass("accordion__item");

			const trigger = container.querySelector(
				'[data-slot="accordion-trigger"]',
			);
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("accordion__trigger");
		});

		test("applies custom className to root", async () => {
			const { container } = await render(
				<Accordion.Root type="single" collapsible className="custom-root">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Trigger</Accordion.Trigger>
						<Accordion.Content>Content</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			const root = container.querySelector('[data-slot="accordion-root"]');
			await expect.element(root as HTMLElement).toHaveClass("accordion");
			await expect.element(root as HTMLElement).toHaveClass("custom-root");
		});
	});

	describe("single type", () => {
		test("all items start closed by default", async () => {
			const { container } = await renderAccordion();

			const triggers = Array.from(
				container.querySelectorAll('[data-slot="accordion-trigger"]'),
			);
			for (const trigger of triggers) {
				await expect
					.element(trigger as HTMLElement)
					.toHaveAttribute("data-state", "closed");
			}
		});

		test("expands item on trigger click", async () => {
			const { getByText, container } = await renderAccordion();

			await getByText("Trigger 1").click();

			const content = container.querySelector(
				'[data-slot="accordion-content"][data-state="open"]',
			);
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("collapses previously open item when another is clicked", async () => {
			const { getByText, container } = await renderAccordion();

			await getByText("Trigger 1").click();
			await getByText("Trigger 2").click();

			const openContents = container.querySelectorAll(
				'[data-slot="accordion-content"][data-state="open"]',
			);
			expect(openContents.length).toBe(1);
		});

		test("renders with defaultValue expanded", async () => {
			const { container } = await renderAccordion({
				defaultValue: "item-2",
			});

			const triggers = container.querySelectorAll(
				'[data-slot="accordion-trigger"]',
			);
			await expect
				.element(triggers[0] as HTMLElement)
				.toHaveAttribute("data-state", "closed");
			await expect
				.element(triggers[1] as HTMLElement)
				.toHaveAttribute("data-state", "open");
			await expect
				.element(triggers[2] as HTMLElement)
				.toHaveAttribute("data-state", "closed");
		});

		test("collapsible allows closing the open item", async () => {
			const { getByText, container } = await renderAccordion({
				collapsible: true,
			});

			await getByText("Trigger 1").click();
			await getByText("Trigger 1").click();

			const openContents = container.querySelectorAll(
				'[data-slot="accordion-content"][data-state="open"]',
			);
			expect(openContents.length).toBe(0);
		});
	});

	describe("multiple type", () => {
		test("allows multiple items to be open", async () => {
			const { getByText, container } = await render(
				<Accordion.Root type="multiple">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Trigger 1</Accordion.Trigger>
						<Accordion.Content>Content 1</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger>Trigger 2</Accordion.Trigger>
						<Accordion.Content>Content 2</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			await getByText("Trigger 1").click();
			await getByText("Trigger 2").click();

			const openContents = container.querySelectorAll(
				'[data-slot="accordion-content"][data-state="open"]',
			);
			expect(openContents.length).toBe(2);
		});

		test("renders with multiple defaultValues expanded", async () => {
			const { container } = await render(
				<Accordion.Root type="multiple" defaultValue={["item-1", "item-3"]}>
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Trigger 1</Accordion.Trigger>
						<Accordion.Content>Content 1</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger>Trigger 2</Accordion.Trigger>
						<Accordion.Content>Content 2</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger>Trigger 3</Accordion.Trigger>
						<Accordion.Content>Content 3</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			const triggers = container.querySelectorAll(
				'[data-slot="accordion-trigger"]',
			);
			await expect
				.element(triggers[0] as HTMLElement)
				.toHaveAttribute("data-state", "open");
			await expect
				.element(triggers[1] as HTMLElement)
				.toHaveAttribute("data-state", "closed");
			await expect
				.element(triggers[2] as HTMLElement)
				.toHaveAttribute("data-state", "open");
		});
	});

	describe("disabled", () => {
		test("disabled item trigger cannot be clicked", async () => {
			const { container } = await renderAccordion({
				disabledItems: ["item-2"],
			});

			const triggers = container.querySelectorAll(
				'[data-slot="accordion-trigger"]',
			);
			await expect
				.element(triggers[1] as HTMLElement)
				.toHaveAttribute("data-disabled", "");
		});
	});

	describe("props forwarding", () => {
		test("forwards custom className to item", async () => {
			const { container } = await render(
				<Accordion.Root type="single" collapsible>
					<Accordion.Item value="item-1" className="custom-item">
						<Accordion.Trigger>Trigger</Accordion.Trigger>
						<Accordion.Content>Content</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			const item = container.querySelector('[data-slot="accordion-item"]');
			await expect.element(item as HTMLElement).toHaveClass("accordion__item");
			await expect.element(item as HTMLElement).toHaveClass("custom-item");
		});

		test("forwards custom className to trigger", async () => {
			const { container } = await render(
				<Accordion.Root type="single" collapsible>
					<Accordion.Item value="item-1">
						<Accordion.Trigger className="custom-trigger">
							Trigger
						</Accordion.Trigger>
						<Accordion.Content>Content</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			const trigger = container.querySelector(
				'[data-slot="accordion-trigger"]',
			);
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("accordion__trigger");
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("custom-trigger");
		});

		test("forwards custom className to content", async () => {
			const { container } = await render(
				<Accordion.Root type="single" collapsible defaultValue="item-1">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Trigger</Accordion.Trigger>
						<Accordion.Content className="custom-content">
							Content
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>,
			);

			const content = container.querySelector(
				'[data-slot="accordion-content"]',
			);
			await expect
				.element(content as HTMLElement)
				.toHaveClass("accordion__content");
			await expect
				.element(content as HTMLElement)
				.toHaveClass("custom-content");
		});
	});

	describe("chevron icon", () => {
		test("renders chevron icon inside trigger", async () => {
			const { container } = await renderAccordion();

			const chevron = container.querySelector(".accordion__chevron");
			await expect.element(chevron as HTMLElement).toBeInTheDocument();
		});
	});

	describe("compound export", () => {
		test("named exports are available", () => {
			expect(AccordionRoot).toBeDefined();
			expect(AccordionItem).toBeDefined();
			expect(AccordionHeader).toBeDefined();
			expect(AccordionTrigger).toBeDefined();
			expect(AccordionContent).toBeDefined();
		});

		test("Accordion compound object has all parts", () => {
			expect(Accordion.Root).toBe(AccordionRoot);
			expect(Accordion.Item).toBe(AccordionItem);
			expect(Accordion.Header).toBe(AccordionHeader);
			expect(Accordion.Trigger).toBe(AccordionTrigger);
			expect(Accordion.Content).toBe(AccordionContent);
		});
	});
});
