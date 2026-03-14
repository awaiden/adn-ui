import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Collapsible, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from ".";

interface RenderCollapsibleProps {
  defaultOpen?: boolean;
  disabled?: boolean;
  triggerText?: string;
  contentText?: string;
}

function renderCollapsible({
  contentText = "Collapsible content",
  defaultOpen,
  disabled,
  triggerText = "Toggle",
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
    test("renders trigger", () => {
      renderCollapsible();

      expect(screen.getByText("Toggle")).toBeInTheDocument();
    });

    test("applies data-slot attributes", () => {
      const { container } = renderCollapsible();

      const root = container.querySelector('[data-slot="collapsible-root"]');
      expect(root as HTMLElement).toBeInTheDocument();

      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger as HTMLElement).toBeInTheDocument();
    });

    test("applies base CSS classes", () => {
      const { container } = renderCollapsible();

      const root = container.querySelector('[data-slot="collapsible-root"]');
      expect(root as HTMLElement).toHaveClass("collapsible");

      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger as HTMLElement).toHaveClass("collapsible__trigger");
    });

    test("applies custom className to root", () => {
      const { container } = render(
        <Collapsible.Root className="custom-root">
          <Collapsible.Trigger>Toggle</Collapsible.Trigger>
          <Collapsible.Content>Content</Collapsible.Content>
        </Collapsible.Root>,
      );

      const root = container.querySelector('[data-slot="collapsible-root"]');
      expect(root as HTMLElement).toHaveClass("collapsible");
      expect(root as HTMLElement).toHaveClass("custom-root");
    });
  });

  describe("open/close behavior", () => {
    test("content is closed by default", () => {
      const { container } = renderCollapsible();

      const content = container.querySelector('[data-slot="collapsible-content"]');
      expect(content as HTMLElement).toHaveAttribute("data-state", "closed");
      expect(content as HTMLElement).toHaveAttribute("hidden", "");
    });

    test("expands content on trigger click", () => {
      const { container } = renderCollapsible();

      fireEvent.click(screen.getByText("Toggle"));

      const content = container.querySelector(
        '[data-slot="collapsible-content"][data-state="open"]',
      );
      expect(content as HTMLElement).toBeInTheDocument();
    });

    test("collapses content on second trigger click", () => {
      const { container } = renderCollapsible();

      fireEvent.click(screen.getByText("Toggle"));
      fireEvent.click(screen.getByText("Toggle"));

      const content = container.querySelector(
        '[data-slot="collapsible-content"][data-state="open"]',
      );
      expect(content).toBeNull();
    });

    test("renders open when defaultOpen is true", async () => {
      const { container } = renderCollapsible({
        defaultOpen: true,
      });

      const content = container.querySelector('[data-slot="collapsible-content"]');
      expect(content as HTMLElement).toBeInTheDocument();
      expect(content as HTMLElement).toHaveAttribute("data-state", "open");
    });
  });

  describe("disabled", () => {
    test("disabled trigger has data-disabled attribute", () => {
      const { container } = renderCollapsible({ disabled: true });

      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger as HTMLElement).toHaveAttribute("data-disabled", "");
    });

    test("disabled root has data-disabled attribute", () => {
      const { container } = renderCollapsible({ disabled: true });

      const root = container.querySelector('[data-slot="collapsible-root"]');
      expect(root as HTMLElement).toHaveAttribute("data-disabled", "");
    });
  });

  describe("props forwarding", () => {
    test("forwards custom className to trigger", () => {
      const { container } = render(
        <Collapsible.Root>
          <Collapsible.Trigger className="custom-trigger">Toggle</Collapsible.Trigger>
          <Collapsible.Content>Content</Collapsible.Content>
        </Collapsible.Root>,
      );

      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger as HTMLElement).toHaveClass("collapsible__trigger");
      expect(trigger as HTMLElement).toHaveClass("custom-trigger");
    });

    test("forwards custom className to content", () => {
      const { container } = render(
        <Collapsible.Root defaultOpen>
          <Collapsible.Trigger>Toggle</Collapsible.Trigger>
          <Collapsible.Content className="custom-content">Content</Collapsible.Content>
        </Collapsible.Root>,
      );

      const content = container.querySelector('[data-slot="collapsible-content"]');
      expect(content as HTMLElement).toHaveClass("collapsible__content");
      expect(content as HTMLElement).toHaveClass("custom-content");
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
