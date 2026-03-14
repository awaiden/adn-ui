import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Field, FieldDescription, FieldError, FieldLabel, FieldRoot } from ".";

describe("Field", () => {
  describe("rendering", () => {
    test("renders root with base class", () => {
      const { container } = render(
        <Field.Root>
          <Field.Label>Email</Field.Label>
        </Field.Root>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toBeInTheDocument();
    });

    test("renders label as a label element", () => {
      const { container } = render(
        <Field.Root>
          <Field.Label>Username</Field.Label>
        </Field.Root>,
      );

      const label = container.querySelector("label");
      expect(label as HTMLElement).toBeInTheDocument();
      expect(label as HTMLElement).toHaveClass("field__label");
    });

    test("renders description as a paragraph", () => {
      const { container } = render(
        <Field.Root>
          <Field.Description>Helper text</Field.Description>
        </Field.Root>,
      );

      const description = container.querySelector("p.field__description");
      expect(description as HTMLElement).toBeInTheDocument();
    });

    test("renders error as a paragraph", () => {
      const { container } = render(
        <Field.Root>
          <Field.Error>Error message</Field.Error>
        </Field.Root>,
      );

      const error = container.querySelector("p.field__error");
      expect(error as HTMLElement).toBeInTheDocument();
    });
  });

  describe("orientation", () => {
    test("applies vertical orientation by default", () => {
      const { container } = render(
        <Field.Root>
          <Field.Label>Label</Field.Label>
        </Field.Root>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toHaveClass("field--vertical");
    });

    test("applies horizontal orientation", () => {
      const { container } = render(
        <Field.Root orientation="horizontal">
          <Field.Label>Label</Field.Label>
        </Field.Root>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toHaveClass("field--horizontal");
    });
  });

  describe("id linking", () => {
    test("label htmlFor matches generated id", () => {
      const { container } = render(
        <Field.Root>
          <Field.Label>Email</Field.Label>
        </Field.Root>,
      );

      const label = container.querySelector("label");
      const htmlFor = label?.getAttribute("for");
      expect(htmlFor).toBeTruthy();
    });

    test("label htmlFor uses custom id when provided", () => {
      const { container } = render(
        <Field.Root id="custom-id">
          <Field.Label>Email</Field.Label>
        </Field.Root>,
      );

      const label = container.querySelector("label");
      expect(label as HTMLElement).toHaveAttribute("for", "custom-id");
    });

    test("description id is derived from field id", () => {
      const { container } = render(
        <Field.Root id="my-field">
          <Field.Description>Help text</Field.Description>
        </Field.Root>,
      );

      const description = container.querySelector("p.field__description");
      expect(description as HTMLElement).toHaveAttribute("id", "my-field-description");
    });

    test("error aria-describedby is derived from field id", () => {
      const { container } = render(
        <Field.Root id="my-field">
          <Field.Error>Required</Field.Error>
        </Field.Root>,
      );

      const error = container.querySelector("p.field__error");
      expect(error as HTMLElement).toHaveAttribute("aria-describedby", "my-field-error");
    });
  });

  describe("props forwarding", () => {
    test("applies custom className to root", () => {
      const { container } = render(
        <Field.Root className="custom-root">
          <Field.Label>Label</Field.Label>
        </Field.Root>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toHaveClass("field");
      expect(root as HTMLElement).toHaveClass("custom-root");
    });

    test("applies custom className to label", () => {
      render(
        <Field.Root>
          <Field.Label className="custom-label">Label</Field.Label>
        </Field.Root>,
      );

      expect(screen.getByText("Label")).toHaveClass("field__label");
      expect(screen.getByText("Label")).toHaveClass("custom-label");
    });

    test("applies custom className to description", () => {
      render(
        <Field.Root>
          <Field.Description className="custom-desc">Help text</Field.Description>
        </Field.Root>,
      );

      expect(screen.getByText("Help text")).toHaveClass("field__description");
      expect(screen.getByText("Help text")).toHaveClass("custom-desc");
    });

    test("applies custom className to error", () => {
      render(
        <Field.Root>
          <Field.Error className="custom-error">Error</Field.Error>
        </Field.Root>,
      );

      expect(screen.getByText("Error")).toHaveClass("field__error");
      expect(screen.getByText("Error")).toHaveClass("custom-error");
    });

    test("forwards data attributes to root", () => {
      const { container } = render(
        <Field.Root data-testid="my-field">
          <Field.Label>Label</Field.Label>
        </Field.Root>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toHaveAttribute("data-testid", "my-field");
    });
  });

  describe("named exports", () => {
    test("FieldRoot is accessible as named export", () => {
      const { container } = render(
        <FieldRoot>
          <FieldLabel>Label</FieldLabel>
        </FieldRoot>,
      );

      const root = container.querySelector(".field");
      expect(root as HTMLElement).toBeInTheDocument();
    });

    test("FieldDescription is accessible as named export", () => {
      render(
        <FieldRoot>
          <FieldDescription>Help</FieldDescription>
        </FieldRoot>,
      );

      expect(screen.getByText("Help")).toBeInTheDocument();
    });

    test("FieldError is accessible as named export", () => {
      render(
        <FieldRoot>
          <FieldError>Error</FieldError>
        </FieldRoot>,
      );

      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });

  describe("full composition", () => {
    test("renders complete field with all sub-components", () => {
      const { container } = render(
        <Field.Root id="full-field">
          <Field.Label>Username</Field.Label>
          <Field.Description>Enter your username</Field.Description>
          <Field.Error>This field is required</Field.Error>
        </Field.Root>,
      );

      const label = container.querySelector("label");
      expect(label as HTMLElement).toBeInTheDocument();
      expect(label as HTMLElement).toHaveAttribute("for", "full-field");

      const description = container.querySelector("p.field__description");
      expect(description as HTMLElement).toBeInTheDocument();

      const error = container.querySelector("p.field__error");
      expect(error as HTMLElement).toBeInTheDocument();
    });
  });
});
