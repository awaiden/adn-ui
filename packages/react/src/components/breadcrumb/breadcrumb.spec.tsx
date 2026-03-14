import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Breadcrumb } from "./index";

describe("Breadcrumb", () => {
  describe("rendering", () => {
    test("renders as a nav element with aria-label", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const nav = container.querySelector("nav");
      expect(nav as HTMLElement).toBeInTheDocument();
      expect(nav as HTMLElement).toHaveAttribute("aria-label", "breadcrumb");
    });

    test("renders list as an ordered list", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const ol = container.querySelector("ol");
      expect(ol as HTMLElement).toBeInTheDocument();
      expect(ol as HTMLElement).toHaveClass("breadcrumb__list");
    });

    test("renders item as a list item", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const li = container.querySelector('[data-slot="breadcrumb-item"]');
      expect(li as HTMLElement).toBeInTheDocument();
      expect(li as HTMLElement).toHaveClass("breadcrumb__item");
    });

    test("renders link as an anchor", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const link = container.querySelector('[data-slot="breadcrumb-link"]');
      expect(link as HTMLElement).toBeInTheDocument();
      expect(link as HTMLElement).toHaveClass("breadcrumb__link");
      expect(link as HTMLElement).toHaveAttribute("href", "/");
    });

    test("renders page with aria-current", () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Page>Current Page</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const page = screen.getByText("Current Page");
      expect(page).toHaveClass("breadcrumb__page");
      expect(page).toHaveAttribute("aria-current", "page");
    });

    test("renders separator with aria-hidden", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Page</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const separator = container.querySelector('[data-slot="breadcrumb-separator"]');
      expect(separator as HTMLElement).toHaveAttribute("aria-hidden", "true");
    });

    test("renders ellipsis", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Ellipsis />
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const ellipsis = container.querySelector('[data-slot="breadcrumb-ellipsis"]');
      expect(ellipsis as HTMLElement).toHaveClass("breadcrumb__ellipsis");
    });
  });

  describe("props forwarding", () => {
    test("applies custom className to root", () => {
      const { container } = render(
        <Breadcrumb.Root className="custom-nav">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      const nav = container.querySelector("nav");
      expect(nav as HTMLElement).toHaveClass("breadcrumb");
      expect(nav as HTMLElement).toHaveClass("custom-nav");
    });

    test("applies custom className to link", () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/" className="custom-link">
                Home
              </Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      expect(screen.getByText("Home")).toHaveClass("breadcrumb__link");
      expect(screen.getByText("Home")).toHaveClass("custom-link");
    });
  });

  describe("full composition", () => {
    test("renders complete breadcrumb navigation", () => {
      const { container } = render(
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Components</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>,
      );

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Docs")).toBeInTheDocument();
      expect(screen.getByText("Components")).toBeInTheDocument();

      const separators = container.querySelectorAll('[data-slot="breadcrumb-separator"]');
      expect(separators.length).toBe(2);
    });
  });
});
