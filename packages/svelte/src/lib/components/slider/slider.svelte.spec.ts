import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SliderTest from "./slider-test.svelte";

describe("Slider", () => {
	it("should render correctly", async () => {
		render(SliderTest);
		const root = page.getByTestId("slider");
		const track = page.getByTestId("slider-track");
		const range = page.getByTestId("slider-range");
		const thumb = page.getByTestId("slider-thumb-0");

		await expect.element(root).toBeInTheDocument();
		await expect.element(track).toBeInTheDocument();
		await expect.element(range).toBeInTheDocument();
		await expect.element(thumb).toBeInTheDocument();

		await expect.element(root).toHaveClass("slider");
		await expect.element(track).toHaveClass("slider__track");
	});

	it("should apply size variants", async () => {
		render(SliderTest, { props: { size: "lg" } });
		const root = page.getByTestId("slider");
		const track = page.getByTestId("slider-track");
		const thumb = page.getByTestId("slider-thumb-0");

		await expect.element(root).toHaveClass("slider--lg");
		await expect.element(track).toHaveClass("slider__track--lg");
		await expect.element(thumb).toHaveClass("slider__thumb--lg");
	});
});
