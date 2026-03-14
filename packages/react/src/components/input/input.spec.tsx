import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";

import Input from "./input";

describe("Input", () => {
  test("renders with default props", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("input");
    expect(input).toHaveClass("input--md");
  });

  test("applies data-slot attribute", () => {
    const { container } = render(<Input />);

    const input = container.querySelector('[data-slot="input"]');
    expect(input as HTMLElement).toBeInTheDocument();
  });

  describe("sizes", () => {
    test("applies sm size", () => {
      render(<Input size="sm" />);
      expect(screen.getByRole("textbox")).toHaveClass("input--sm");
    });

    test("applies md size", () => {
      render(<Input size="md" />);
      expect(screen.getByRole("textbox")).toHaveClass("input--md");
    });

    test("applies lg size", () => {
      render(<Input size="lg" />);
      expect(screen.getByRole("textbox")).toHaveClass("input--lg");
    });
  });

  describe("interactions", () => {
    test("accepts text input", async () => {
      const handleChange = vi.fn();
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "hello" } });
      expect(input).toHaveValue("hello");
    });

    test("is disabled when disabled prop is set", () => {
      render(<Input disabled />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });

    test("shows placeholder text", () => {
      render(<Input placeholder="Enter text..." />);
      expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Enter text...");
    });
  });

  describe("props forwarding", () => {
    test("applies custom className alongside variant classes", () => {
      render(<Input className="custom-class" />);
      const input = screen.getByRole("textbox");

      expect(input).toHaveClass("custom-class");
      expect(input).toHaveClass("input");
    });

    test("forwards type attribute", () => {
      const { container } = render(<Input type="email" />);
      const input = container.querySelector('[data-slot="input"]');
      expect(input as HTMLElement).toHaveAttribute("type", "email");
    });

    test("forwards aria attributes", () => {
      render(<Input aria-label="Email address" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-label", "Email address");
    });

    test("forwards id attribute", () => {
      render(<Input id="my-input" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-input");
    });

    test("forwards name attribute", () => {
      render(<Input name="email" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("name", "email");
    });

    test("forwards readOnly attribute", () => {
      render(<Input readOnly value="read only" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("readonly", "");
      expect(input).toHaveValue("read only");
    });
  });

  describe("aria-invalid", () => {
    test("supports aria-invalid for error state", () => {
      render(<Input aria-invalid="true" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });
  });
});
