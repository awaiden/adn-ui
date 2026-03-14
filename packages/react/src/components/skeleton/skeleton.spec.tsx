import { render } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import Skeleton from "./skeleton";

describe("Skeleton", () => {
	test("renders with default props", () => {
		const { container } = render(<Skeleton />);
		const skeleton = container.querySelector('[data-slot="skeleton"]');

		expect(skeleton as HTMLElement).toBeInTheDocument();
		expect(skeleton as HTMLElement).toHaveClass("skeleton");
		expect(skeleton as HTMLElement).toHaveClass("skeleton--default");
	});

	test("applies data-slot attribute", () => {
		const { container } = render(<Skeleton />);

		const skeleton = container.querySelector('[data-slot="skeleton"]');
		expect(skeleton as HTMLElement).toBeInTheDocument();
	});

	describe("variants", () => {
		test("applies default variant", () => {
			const { container } = render(<Skeleton variant="default" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			expect(skeleton as HTMLElement).toHaveClass("skeleton--default");
		});

		test("applies circular variant", () => {
			const { container } = render(<Skeleton variant="circular" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			expect(skeleton as HTMLElement).toHaveClass("skeleton--circular");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", () => {
			const { container } = render(<Skeleton className="h-4 w-48" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');

			expect(skeleton as HTMLElement).toHaveClass("skeleton");
			expect(skeleton as HTMLElement).toHaveClass("h-4");
			expect(skeleton as HTMLElement).toHaveClass("w-48");
		});

		test("forwards aria attributes", () => {
			const { container } = render(<Skeleton aria-label="Loading content" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			expect(skeleton as HTMLElement).toHaveAttribute(
				"aria-label",
				"Loading content",
			);
		});

		test("forwards data attributes", () => {
			const { container } = render(<Skeleton data-testid="my-skeleton" />);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			expect(skeleton as HTMLElement).toHaveAttribute(
				"data-testid",
				"my-skeleton",
			);
		});

		test("applies inline style", () => {
			const { container } = render(
				<Skeleton style={{ height: "20px", width: "200px" }} />,
			);
			const skeleton = container.querySelector('[data-slot="skeleton"]');
			expect(skeleton as HTMLElement).toBeInTheDocument();
		});
	});

	test("renders as a div element", () => {
		const { container } = render(<Skeleton />);
		const div = container.querySelector("div.skeleton");
		expect(div as HTMLElement).toBeInTheDocument();
	});
});
