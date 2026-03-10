import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Separator } from ".";

describe("Separator", () => {
	describe("rendering", () => {
		test("renders with default props", async () => {
			const { container } = await render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect.element(separator as HTMLElement).toBeInTheDocument();
		});

		test("applies data-slot attribute", async () => {
			const { container } = await render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect.element(separator as HTMLElement).toBeInTheDocument();
		});

		test("applies base CSS class", async () => {
			const { container } = await render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect.element(separator as HTMLElement).toHaveClass("separator");
		});

		test("applies custom className", async () => {
			const { container } = await render(
				<Separator className="custom-class" />,
			);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect.element(separator as HTMLElement).toHaveClass("separator");
			await expect
				.element(separator as HTMLElement)
				.toHaveClass("custom-class");
		});
	});

	describe("orientation", () => {
		test("defaults to horizontal orientation", async () => {
			const { container } = await render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("data-orientation", "horizontal");
			await expect
				.element(separator as HTMLElement)
				.toHaveClass("separator--horizontal");
		});

		test("applies vertical orientation", async () => {
			const { container } = await render(<Separator orientation="vertical" />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("data-orientation", "vertical");
			await expect
				.element(separator as HTMLElement)
				.toHaveClass("separator--vertical");
		});
	});

	describe("accessibility", () => {
		test("is decorative by default (role=none)", async () => {
			const { container } = await render(<Separator />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("role", "none");
		});

		test("has separator role when not decorative", async () => {
			const { container } = await render(<Separator decorative={false} />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("role", "separator");
		});
	});

	describe("props forwarding", () => {
		test("forwards id attribute", async () => {
			const { container } = await render(<Separator id="my-sep" />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("id", "my-sep");
		});

		test("forwards data attributes", async () => {
			const { container } = await render(<Separator data-testid="sep" />);

			const separator = container.querySelector('[data-slot="separator"]');
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("data-testid", "sep");
		});
	});
});
