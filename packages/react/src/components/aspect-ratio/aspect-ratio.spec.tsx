import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { AspectRatio } from "./index";

describe("AspectRatio", () => {
	test("renders with base class", async () => {
		const { getByTestId } = await render(
			<AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
				<div data-testid="child">Child</div>
			</AspectRatio>,
		);
		const aspectRatio = getByTestId("aspect-ratio");

		await expect.element(aspectRatio).toBeInTheDocument();
		await expect.element(aspectRatio).toHaveClass("aspect-ratio");
	});

	test("renders children", async () => {
		const { getByTestId } = await render(
			<AspectRatio ratio={16 / 9}>
				<div data-testid="child">Child Content</div>
			</AspectRatio>,
		);
		await expect.element(getByTestId("child")).toBeInTheDocument();
		await expect
			.element(getByTestId("child"))
			.toHaveTextContent("Child Content");
	});

	test("applies custom className alongside base class", async () => {
		const { getByTestId } = await render(
			<AspectRatio
				ratio={16 / 9}
				className="custom-class"
				data-testid="aspect-ratio"
			>
				<div>Child</div>
			</AspectRatio>,
		);
		const aspectRatio = getByTestId("aspect-ratio");

		await expect.element(aspectRatio).toHaveClass("aspect-ratio");
		await expect.element(aspectRatio).toHaveClass("custom-class");
	});

	test("forwards data attributes", async () => {
		const { getByTestId } = await render(
			<AspectRatio ratio={16 / 9} data-custom="true" data-testid="aspect-ratio">
				<div>Child</div>
			</AspectRatio>,
		);
		await expect
			.element(getByTestId("aspect-ratio"))
			.toHaveAttribute("data-custom", "true");
	});
});
