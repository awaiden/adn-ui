import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Skeleton from "./skeleton";

describe("Skeleton", () => {
	test("renders with default props", async () => {
		const { container } = await render(<Skeleton />);
		const skeleton = container.querySelector('[data-slot="skeleton"]');

		await expect.element(skeleton as HTMLElement).toBeInTheDocument();
		await expect.element(skeleton as HTMLElement).toHaveClass("skeleton");
		await expect
			.element(skeleton as HTMLElement)
			.toHaveClass("skeleton--default");
	});

	test("applies data-slot attribute", async () => {
		const { container } = await render(<Skeleton />);

		const skeleton = container.querySelector('[data-slot="skeleton"]');
		await expect.element(skeleton as HTMLElement).toBeInTheDocument();
	});

	describe("variants", () => {
		test("applies default variant", async () => {
			const { container } = await render(<Skeleton variant="default" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			await expect
				.element(skeleton as HTMLElement)
				.toHaveClass("skeleton--default");
		});

		test("applies circular variant", async () => {
			const { container } = await render(<Skeleton variant="circular" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			await expect
				.element(skeleton as HTMLElement)
				.toHaveClass("skeleton--circular");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", async () => {
			const { container } = await render(<Skeleton className="h-4 w-48" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');

			await expect.element(skeleton as HTMLElement).toHaveClass("skeleton");
			await expect.element(skeleton as HTMLElement).toHaveClass("h-4");
			await expect.element(skeleton as HTMLElement).toHaveClass("w-48");
		});

		test("forwards aria attributes", async () => {
			const { container } = await render(
				<Skeleton aria-label="Loading content" />,
			);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			await expect
				.element(skeleton as HTMLElement)
				.toHaveAttribute("aria-label", "Loading content");
		});

		test("forwards data attributes", async () => {
			const { container } = await render(
				<Skeleton data-testid="my-skeleton" />,
			);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			await expect
				.element(skeleton as HTMLElement)
				.toHaveAttribute("data-testid", "my-skeleton");
		});

		test("applies inline style", async () => {
			const { container } = await render(
				<Skeleton style={{ width: "200px", height: "20px" }} />,
			);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			await expect.element(skeleton as HTMLElement).toBeInTheDocument();
		});
	});

	test("renders as a div element", async () => {
		const { container } = await render(<Skeleton />);
		const div = container.querySelector("div.skeleton");
		await expect.element(div as HTMLElement).toBeInTheDocument();
	});
});
