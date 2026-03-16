import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Avatar, AvatarFallback, AvatarImage } from "./index";

describe("Avatar", () => {
  test("renders with base class", () => {
    render(
      <Avatar.Root data-testid="avatar">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar.Root>,
    );
    const avatar = screen.getByTestId("avatar");

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass("avatar");
  });

  test("applies default md size class", () => {
    render(
      <Avatar.Root data-testid="avatar">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar.Root>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("avatar--md");
  });

  describe("sizes", () => {
    test("applies sm size", () => {
      render(
        <Avatar.Root size="sm" data-testid="avatar">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar.Root>,
      );
      expect(screen.getByTestId("avatar")).toHaveClass("avatar--sm");
    });

    test("applies lg size", () => {
      render(
        <Avatar.Root size="lg" data-testid="avatar">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar.Root>,
      );
      expect(screen.getByTestId("avatar")).toHaveClass("avatar--lg");
    });
  });

  test("renders image when src is provided", async () => {
    // In JSDOM, images don't "load" by default.
    // Radix Avatar waits for the image to load.
    // Mocking global Image to simulate loading.
    const originalImage = global.Image;
    global.Image = class {
      onload: () => void = () => {};
      onerror: () => void = () => {};
      _src = "";
      addEventListener(type: string, handler: any) {
        if (type === "load") this.onload = handler;
        if (type === "error") this.onerror = handler;
      }
      removeEventListener(type: string, handler: any) {
        if (type === "load" && this.onload === handler) this.onload = () => {};
        if (type === "error" && this.onerror === handler) this.onerror = () => {};
      }
      set src(s: string) {
        this._src = s;
        setTimeout(() => this.onload(), 0);
      }
      get src() {
        return this._src;
      }
    } as any;

    render(
      <Avatar.Root>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar.Root>,
    );
    const image = await screen.findByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://github.com/shadcn.png");

    global.Image = originalImage;
  });

  test("renders fallback when image fails or is not provided", () => {
    render(
      <Avatar.Root>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar.Root>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.getByText("JD")).toHaveClass("avatar__fallback");
  });
});
