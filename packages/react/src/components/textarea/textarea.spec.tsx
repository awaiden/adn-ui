import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";

import Textarea from "./textarea";

describe("Textarea", () => {
  test("renders with default props", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass("textarea");
    expect(textarea).toHaveClass("textarea--md");
  });

  test("applies data-slot attribute", () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector('[data-slot="textarea"]');
    expect(textarea as HTMLElement).toBeInTheDocument();
  });

  describe("sizes", () => {
    test("applies sm size", () => {
      render(<Textarea size="sm" />);
      expect(screen.getByRole("textbox")).toHaveClass("textarea--sm");
    });

    test("applies md size", () => {
      render(<Textarea size="md" />);
      expect(screen.getByRole("textbox")).toHaveClass("textarea--md");
    });

    test("applies lg size", () => {
      render(<Textarea size="lg" />);
      expect(screen.getByRole("textbox")).toHaveClass("textarea--lg");
    });
  });

  describe("interactions", () => {
    test("accepts text input", () => {
      const handleChange = vi.fn();
      render(<Textarea onChange={handleChange} />);
      const textarea = screen.getByRole("textbox");

      fireEvent.change(textarea, { target: { value: "hello world" } });
      expect(textarea).toHaveValue("hello world");
    });

    test("is disabled when disabled prop is set", () => {
      render(<Textarea disabled />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });

    test("shows placeholder text", () => {
      render(<Textarea placeholder="Enter your message..." />);
      expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Enter your message...");
    });
  });

  describe("props forwarding", () => {
    test("applies custom className alongside variant classes", () => {
      render(<Textarea className="custom-class" />);
      const textarea = screen.getByRole("textbox");

      expect(textarea).toHaveClass("custom-class");
      expect(textarea).toHaveClass("textarea");
    });

    test("forwards aria attributes", () => {
      render(<Textarea aria-label="Message body" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-label", "Message body");
    });

    test("forwards id attribute", () => {
      render(<Textarea id="my-textarea" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-textarea");
    });

    test("forwards name attribute", () => {
      render(<Textarea name="message" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("name", "message");
    });

    test("forwards rows attribute", () => {
      render(<Textarea rows={6} />);
      expect(screen.getByRole("textbox")).toHaveAttribute("rows", "6");
    });

    test("forwards readOnly attribute", () => {
      render(<Textarea readOnly value="read only" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("readonly", "");
      expect(textarea).toHaveValue("read only");
    });
  });

  describe("aria-invalid", () => {
    test("supports aria-invalid for error state", () => {
      render(<Textarea aria-invalid="true" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });
  });
});
