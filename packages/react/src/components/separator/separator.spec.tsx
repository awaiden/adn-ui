import { render } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Separator } from ".";

describe("Separator", () => {
	describe("rendering", () => {
		test("renders with default props", () => {
			const { container } = render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toBeInTheDocument();
		});

		test("applies data-slot attribute", () => {
			const { container } = render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toBeInTheDocument();
		});

		test("applies base CSS class", () => {
			const { container } = render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveClass("separator");
		});

		test("applies custom className", () => {
			const { container } = render(<Separator className="custom-class" />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveClass("separator");
			expect(separator as HTMLElement).toHaveClass("custom-class");
		});
	});

	describe("orientation", () => {
		test("defaults to horizontal orientation", () => {
			const { container } = render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute(
				"data-orientation",
				"horizontal",
			);
			expect(separator as HTMLElement).toHaveClass("separator--horizontal");
		});

		test("applies vertical orientation", () => {
			const { container } = render(<Separator orientation="vertical" />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute(
				"data-orientation",
				"vertical",
			);
			expect(separator as HTMLElement).toHaveClass("separator--vertical");
		});
	});

	describe("accessibility", () => {
		test("is decorative by default (role=none)", () => {
			const { container } = render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute("role", "none");
		});

		test("has separator role when not decorative", () => {
			const { container } = render(<Separator decorative={false} />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute("role", "separator");
		});
	});

	describe("props forwarding", () => {
		test("forwards id attribute", () => {
			const { container } = render(<Separator id="my-sep" />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute("id", "my-sep");
		});

		test("forwards data attributes", () => {
			const { container } = render(<Separator data-testid="sep" />);

			const separator = container.querySelector('[data-slot="separator"]');
			expect(separator as HTMLElement).toHaveAttribute("data-testid", "sep");
		});
	});
});
