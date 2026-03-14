import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import ScrollAreaTest from "./scroll-area-test.svelte";

describe("ScrollArea", () => {
	it("should render correctly", async () => {
		render(ScrollAreaTest);

		const root = page.getByTestId("scroll-area");
		const viewport = page.getByTestId("viewport");
		const scrollbarY = page.getByTestId("scrollbar-y");
		const scrollbarX = page.getByTestId("scrollbar-x");
		const thumbY = page.getByTestId("thumb-y");
		const thumbX = page.getByTestId("thumb-x");
		const corner = page.getByTestId("corner");

		await expect.element(root).toBeInTheDocument();
		await expect.element(viewport).toBeInTheDocument();
		await expect.element(scrollbarY).toBeInTheDocument();
		await expect.element(scrollbarX).toBeInTheDocument();
		await expect.element(thumbY).toBeInTheDocument();
		await expect.element(thumbX).toBeInTheDocument();
		await expect.element(corner).toBeInTheDocument();
	});

	it("should apply variant classes", async () => {
		render(ScrollAreaTest);

		const root = page.getByTestId("scroll-area");
		const viewport = page.getByTestId("viewport");
		const scrollbar = page.getByTestId("scrollbar-y");
		const thumb = page.getByTestId("thumb-y");
		const corner = page.getByTestId("corner");

		await expect.element(root).toHaveClass("scroll-area");
		await expect.element(viewport).toHaveClass("scroll-area__viewport");
		await expect.element(scrollbar).toHaveClass("scroll-area__scrollbar");
		await expect.element(thumb).toHaveClass("scroll-area__thumb");
		await expect.element(corner).toHaveClass("scroll-area__corner");
	});
});
