import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

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
  collapsible = true,
  defaultValue,
  disabledItems = [] as string[],
  items = [
    { content: "Content 1", trigger: "Trigger 1", value: "item-1" },
    { content: "Content 2", trigger: "Trigger 2", value: "item-2" },
    { content: "Content 3", trigger: "Trigger 3", value: "item-3" },
  ],
  type = "single",
}: RenderAccordionProps = {}) {
  return render(
    type === "single" ? (
      <Accordion.Root
        type="single"
        collapsible={collapsible}
        defaultValue={typeof defaultValue === "string" ? defaultValue : undefined}
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
    test("renders all items", () => {
      renderAccordion();

      expect(screen.getByText("Trigger 1")).toBeInTheDocument();
      expect(screen.getByText("Trigger 2")).toBeInTheDocument();
      expect(screen.getByText("Trigger 3")).toBeInTheDocument();
    });

    test("applies data-slot attributes", () => {
      const { container } = renderAccordion();

      const root = container.querySelector('[data-slot="accordion-root"]');
      expect(root).toBeInTheDocument();

      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toBeInTheDocument();

      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      expect(trigger).toBeInTheDocument();
    });

    test("applies base CSS classes", () => {
      const { container } = renderAccordion();

      const root = container.querySelector('[data-slot="accordion-root"]');
      expect(root).toHaveClass("accordion");

      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toHaveClass("accordion__item");

      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      expect(trigger).toHaveClass("accordion__trigger");
    });

    test("applies custom className to root", () => {
      const { container } = render(
        <Accordion.Root type="single" collapsible className="custom-root">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Trigger</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>,
      );

      const root = container.querySelector('[data-slot="accordion-root"]');
      expect(root).toHaveClass("accordion");
      expect(root).toHaveClass("custom-root");
    });
  });

  describe("single type", () => {
    test("all items start closed by default", () => {
      const { container } = renderAccordion();

      const triggers = Array.from(container.querySelectorAll('[data-slot="accordion-trigger"]'));
      for (const trigger of triggers) {
        expect(trigger).toHaveAttribute("data-state", "closed");
      }
    });

    test("expands item on trigger click", async () => {
      const { container } = renderAccordion();

      fireEvent.click(screen.getByText("Trigger 1"));

      const content = container.querySelector('[data-slot="accordion-content"][data-state="open"]');
      expect(content).toBeInTheDocument();
    });

    test("collapses previously open item when another is clicked", async () => {
      const { container } = renderAccordion();

      fireEvent.click(screen.getByText("Trigger 1"));
      fireEvent.click(screen.getByText("Trigger 2"));

      const openContents = container.querySelectorAll(
        '[data-slot="accordion-content"][data-state="open"]',
      );
      expect(openContents.length).toBe(1);
    });

    test("renders with defaultValue expanded", () => {
      const { container } = renderAccordion({
        defaultValue: "item-2",
      });

      const triggers = container.querySelectorAll('[data-slot="accordion-trigger"]');
      expect(triggers[0]).toHaveAttribute("data-state", "closed");
      expect(triggers[1]).toHaveAttribute("data-state", "open");
      expect(triggers[2]).toHaveAttribute("data-state", "closed");
    });

    test("collapsible allows closing the open item", async () => {
      const { container } = renderAccordion({
        collapsible: true,
      });

      fireEvent.click(screen.getByText("Trigger 1"));
      fireEvent.click(screen.getByText("Trigger 1"));

      const openContents = container.querySelectorAll(
        '[data-slot="accordion-content"][data-state="open"]',
      );
      expect(openContents.length).toBe(0);
    });
  });

  describe("multiple type", () => {
    test("allows multiple items to be open", async () => {
      const { container } = render(
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

      fireEvent.click(screen.getByText("Trigger 1"));
      fireEvent.click(screen.getByText("Trigger 2"));

      const openContents = container.querySelectorAll(
        '[data-slot="accordion-content"][data-state="open"]',
      );
      expect(openContents.length).toBe(2);
    });

    test("renders with multiple defaultValues expanded", () => {
      const { container } = render(
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

      const triggers = container.querySelectorAll('[data-slot="accordion-trigger"]');
      expect(triggers[0]).toHaveAttribute("data-state", "open");
      expect(triggers[1]).toHaveAttribute("data-state", "closed");
      expect(triggers[2]).toHaveAttribute("data-state", "open");
    });
  });

  describe("disabled", () => {
    test("disabled item trigger cannot be clicked", () => {
      const { container } = renderAccordion({
        disabledItems: ["item-2"],
      });

      const triggers = container.querySelectorAll('[data-slot="accordion-trigger"]');
      expect(triggers[1]).toHaveAttribute("data-disabled", "");
    });
  });

  describe("props forwarding", () => {
    test("forwards custom className to item", () => {
      const { container } = render(
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1" className="custom-item">
            <Accordion.Trigger>Trigger</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>,
      );

      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toHaveClass("accordion__item");
      expect(item).toHaveClass("custom-item");
    });

    test("forwards custom className to trigger", () => {
      const { container } = render(
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="custom-trigger">Trigger</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>,
      );

      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      expect(trigger).toHaveClass("accordion__trigger");
      expect(trigger).toHaveClass("custom-trigger");
    });

    test("forwards custom className to content", () => {
      const { container } = render(
        <Accordion.Root type="single" collapsible defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Trigger</Accordion.Trigger>
            <Accordion.Content className="custom-content">Content</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>,
      );

      const content = container.querySelector('[data-slot="accordion-content"]');
      expect(content).toHaveClass("accordion__content");
      expect(content).toHaveClass("custom-content");
    });
  });

  describe("chevron icon", () => {
    test("renders chevron icon inside trigger", () => {
      const { container } = renderAccordion();

      const chevron = container.querySelector(".accordion__chevron");
      expect(chevron).toBeInTheDocument();
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
