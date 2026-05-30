import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Card } from ".";

afterEach(cleanup);

describe("Card", () => {
  it("renders all subcomponents", () => {
    render(
      <Card.Root>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Content>Body</Card.Content>
      </Card.Root>,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(<Card.Root variant="outline">Content</Card.Root>);
    expect(container.firstChild).toHaveClass("card--outline");
  });

  it("applies slot classes via context", () => {
    render(
      <Card.Root>
        <Card.Header>
          <Card.Title>Test</Card.Title>
        </Card.Header>
      </Card.Root>,
    );

    expect(screen.getByText("Test")).toHaveClass("card__title");
  });
});
