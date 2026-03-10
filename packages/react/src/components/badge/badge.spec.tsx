import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Badge from "./badge";

describe("Badge", () => {
	test("renders with default props", async () => {
		const { getByText } = await render(<Badge>New</Badge>);
		const badge = getByText("New");

		await expect.element(badge).toBeInTheDocument();
		await expect.element(badge).toHaveClass("badge");
		await expect.element(badge).toHaveClass("badge--primary");
	});

	test("applies data-slot attribute", async () => {
		const { container } = await render(<Badge>Tag</Badge>);

		const badge = container.querySelector('[data-slot="badge"]');
		await expect.element(badge as HTMLElement).toBeInTheDocument();
	});

	describe("variants", () => {
		test("applies primary variant", async () => {
			const { getByText } = await render(
				<Badge variant="primary">Primary</Badge>,
			);
			await expect.element(getByText("Primary")).toHaveClass("badge--primary");
		});

		test("applies secondary variant", async () => {
			const { getByText } = await render(
				<Badge variant="secondary">Secondary</Badge>,
			);
			await expect
				.element(getByText("Secondary"))
				.toHaveClass("badge--secondary");
		});

		test("applies destructive variant", async () => {
			const { getByText } = await render(
				<Badge variant="destructive">Destructive</Badge>,
			);
			await expect
				.element(getByText("Destructive"))
				.toHaveClass("badge--destructive");
		});

		test("applies outline variant", async () => {
			const { getByText } = await render(
				<Badge variant="outline">Outline</Badge>,
			);
			await expect.element(getByText("Outline")).toHaveClass("badge--outline");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", async () => {
			const { getByText } = await render(
				<Badge className="custom-class">Badge</Badge>,
			);
			const badge = getByText("Badge");

			await expect.element(badge).toHaveClass("custom-class");
			await expect.element(badge).toHaveClass("badge");
		});

		test("forwards aria attributes", async () => {
			const { getByText } = await render(
				<Badge aria-label="Status badge">Status</Badge>,
			);
			await expect
				.element(getByText("Status"))
				.toHaveAttribute("aria-label", "Status badge");
		});

		test("forwards data attributes", async () => {
			const { getByText } = await render(
				<Badge data-testid="my-badge">Tag</Badge>,
			);
			await expect
				.element(getByText("Tag"))
				.toHaveAttribute("data-testid", "my-badge");
		});

		test("forwards id attribute", async () => {
			const { getByText } = await render(<Badge id="my-badge">ID</Badge>);
			await expect.element(getByText("ID")).toHaveAttribute("id", "my-badge");
		});
	});

	describe("children", () => {
		test("renders string children", async () => {
			const { getByText } = await render(<Badge>Text</Badge>);
			await expect.element(getByText("Text")).toHaveTextContent("Text");
		});

		test("renders element children", async () => {
			const { getByText } = await render(
				<Badge>
					<span>Icon</span> Label
				</Badge>,
			);
			await expect.element(getByText("Label")).toBeInTheDocument();
		});
	});

	test("renders as a span element", async () => {
		const { container } = await render(<Badge>Check</Badge>);
		const span = container.querySelector("span.badge");
		await expect.element(span as HTMLElement).toBeInTheDocument();
	});
});
