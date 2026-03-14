import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import Badge from "./badge";

describe("Badge", () => {
  test("renders with default props", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge--primary");
  });

  test("applies data-slot attribute", () => {
    const { container } = render(<Badge>Tag</Badge>);

    const badge = container.querySelector('[data-slot="badge"]');
    expect(badge as HTMLElement).toBeInTheDocument();
  });

  describe("variants", () => {
    test("applies primary variant", () => {
      render(<Badge variant="primary">Primary</Badge>);
      expect(screen.getByText("Primary")).toHaveClass("badge--primary");
    });

    test("applies secondary variant", () => {
      render(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText("Secondary")).toHaveClass("badge--secondary");
    });

    test("applies destructive variant", () => {
      render(<Badge variant="destructive">Destructive</Badge>);
      expect(screen.getByText("Destructive")).toHaveClass("badge--destructive");
    });

    test("applies outline variant", () => {
      render(<Badge variant="outline">Outline</Badge>);
      expect(screen.getByText("Outline")).toHaveClass("badge--outline");
    });
  });

  describe("props forwarding", () => {
    test("applies custom className alongside variant classes", () => {
      render(<Badge className="custom-class">Badge</Badge>);
      const badge = screen.getByText("Badge");

      expect(badge).toHaveClass("custom-class");
      expect(badge).toHaveClass("badge");
    });

    test("forwards aria attributes", () => {
      render(<Badge aria-label="Status badge">Status</Badge>);
      expect(screen.getByText("Status")).toHaveAttribute("aria-label", "Status badge");
    });

    test("forwards data attributes", () => {
      render(<Badge data-testid="my-badge">Tag</Badge>);
      expect(screen.getByText("Tag")).toHaveAttribute("data-testid", "my-badge");
    });

    test("forwards id attribute", () => {
      render(<Badge id="my-badge">ID</Badge>);
      expect(screen.getByText("ID")).toHaveAttribute("id", "my-badge");
    });
  });

  describe("children", () => {
    test("renders string children", () => {
      render(<Badge>Text</Badge>);
      expect(screen.getByText("Text")).toHaveTextContent("Text");
    });

    test("renders element children", () => {
      render(
        <Badge>
          <span>Icon</span> Label
        </Badge>,
      );
      expect(screen.getByText("Label")).toBeInTheDocument();
    });
  });

  test("renders as a span element", () => {
    const { container } = render(<Badge>Check</Badge>);
    const span = container.querySelector("span.badge");
    expect(span as HTMLElement).toBeInTheDocument();
  });
});
