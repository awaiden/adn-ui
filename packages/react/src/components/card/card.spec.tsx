import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".";

describe("Card", () => {
  describe("Card.Root", () => {
    test("renders with base class", () => {
      render(<Card.Root>Card content</Card.Root>);
      const root = screen.getByText("Card content");

      expect(root).toBeInTheDocument();
      expect(root).toHaveClass("card");
      expect(root).toHaveAttribute("data-slot", "card-root");
    });

    test("applies custom className", () => {
      render(<Card.Root className="custom-class">Content</Card.Root>);
      const root = screen.getByText("Content");

      expect(root).toHaveClass("card");
      expect(root).toHaveClass("custom-class");
    });

    test("forwards props", () => {
      render(
        <Card.Root data-testid="my-card" id="card-1">
          Content
        </Card.Root>,
      );
      const root = screen.getByText("Content");

      expect(root).toHaveAttribute("data-testid", "my-card");
      expect(root).toHaveAttribute("id", "card-1");
    });
  });

  describe("Card.Header", () => {
    test("renders with correct data-slot and class", () => {
      render(
        <Card.Root>
          <Card.Header>Header</Card.Header>
        </Card.Root>,
      );
      const header = screen.getByText("Header");

      expect(header).toBeInTheDocument();
      expect(header).toHaveClass("card__header");
      expect(header).toHaveAttribute("data-slot", "card-header");
    });

    test("applies custom className", () => {
      render(
        <Card.Root>
          <Card.Header className="extra">Header</Card.Header>
        </Card.Root>,
      );

      expect(screen.getByText("Header")).toHaveClass("extra");
    });
  });

  describe("Card.Title", () => {
    test("renders with correct data-slot and class", () => {
      render(
        <Card.Root>
          <Card.Title>Title</Card.Title>
        </Card.Root>,
      );
      const title = screen.getByText("Title");

      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("card__title");
      expect(title).toHaveAttribute("data-slot", "card-title");
    });

    test("applies custom className", () => {
      render(
        <Card.Root>
          <Card.Title className="bold">Title</Card.Title>
        </Card.Root>,
      );

      expect(screen.getByText("Title")).toHaveClass("bold");
    });
  });

  describe("Card.Description", () => {
    test("renders with correct data-slot and class", () => {
      render(
        <Card.Root>
          <Card.Description>Description text</Card.Description>
        </Card.Root>,
      );
      const desc = screen.getByText("Description text");

      expect(desc).toBeInTheDocument();
      expect(desc).toHaveClass("card__description");
      expect(desc).toHaveAttribute("data-slot", "card-description");
    });

    test("applies custom className", () => {
      render(
        <Card.Root>
          <Card.Description className="muted">Desc</Card.Description>
        </Card.Root>,
      );

      expect(screen.getByText("Desc")).toHaveClass("muted");
    });
  });

  describe("Card.Content", () => {
    test("renders with correct data-slot and class", () => {
      render(
        <Card.Root>
          <Card.Content>Body content</Card.Content>
        </Card.Root>,
      );
      const content = screen.getByText("Body content");

      expect(content).toBeInTheDocument();
      expect(content).toHaveClass("card__content");
      expect(content).toHaveAttribute("data-slot", "card-content");
    });

    test("applies custom className", () => {
      render(
        <Card.Root>
          <Card.Content className="padded">Body</Card.Content>
        </Card.Root>,
      );

      expect(screen.getByText("Body")).toHaveClass("padded");
    });
  });

  describe("composed card", () => {
    test("renders all subcomponents together", () => {
      render(
        <Card.Root>
          <Card.Header>
            <Card.Title>My Card</Card.Title>
            <Card.Description>A description</Card.Description>
          </Card.Header>
          <Card.Content>Main content here</Card.Content>
        </Card.Root>,
      );

      expect(screen.getByText("My Card")).toBeInTheDocument();
      expect(screen.getByText("A description")).toBeInTheDocument();
      expect(screen.getByText("Main content here")).toBeInTheDocument();
    });

    test("renders children as elements", () => {
      render(
        <Card.Root>
          <Card.Content>
            <span>Nested element</span>
          </Card.Content>
        </Card.Root>,
      );

      expect(screen.getByText("Nested element")).toBeInTheDocument();
    });
  });

  describe("context requirement", () => {
    test("subcomponents throw when used outside Card.Root", () => {
      const components = [
        { Component: CardHeader, name: "CardHeader" },
        { Component: CardTitle, name: "CardTitle" },
        { Component: CardDescription, name: "CardDescription" },
        { Component: CardContent, name: "CardContent" },
      ];

      for (const { Component } of components) {
        let threw = false;
        try {
          render(<Component>Test</Component>);
        } catch {
          threw = true;
        }
        expect(threw).toBe(true);
      }
    });
  });
});
