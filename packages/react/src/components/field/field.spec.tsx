import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Field, FieldDescription, FieldError, FieldLabel, FieldRoot } from ".";

describe("Field", () => {
	describe("rendering", () => {
		test("renders root with base class", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Label>Email</Field.Label>
				</Field.Root>,
			);

			const root = container.querySelector(".field");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("renders label as a label element", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Label>Username</Field.Label>
				</Field.Root>,
			);

			const label = container.querySelector("label");
			await expect.element(label as HTMLElement).toBeInTheDocument();
			await expect.element(label as HTMLElement).toHaveClass("field__label");
		});

		test("renders description as a paragraph", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Description>Helper text</Field.Description>
				</Field.Root>,
			);

			const description = container.querySelector("p.field__description");
			await expect.element(description as HTMLElement).toBeInTheDocument();
		});

		test("renders error as a paragraph", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Error>Error message</Field.Error>
				</Field.Root>,
			);

			const error = container.querySelector("p.field__error");
			await expect.element(error as HTMLElement).toBeInTheDocument();
		});
	});

	describe("orientation", () => {
		test("applies vertical orientation by default", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Label>Label</Field.Label>
				</Field.Root>,
			);

			const root = container.querySelector(".field");
			await expect.element(root as HTMLElement).toHaveClass("field--vertical");
		});

		test("applies horizontal orientation", async () => {
			const { container } = await render(
				<Field.Root orientation="horizontal">
					<Field.Label>Label</Field.Label>
				</Field.Root>,
			);

			const root = container.querySelector(".field");
			await expect
				.element(root as HTMLElement)
				.toHaveClass("field--horizontal");
		});
	});

	describe("id linking", () => {
		test("label htmlFor matches generated id", async () => {
			const { container } = await render(
				<Field.Root>
					<Field.Label>Email</Field.Label>
				</Field.Root>,
			);

			const label = container.querySelector("label");
			const htmlFor = label?.getAttribute("for");
			expect(htmlFor).toBeTruthy();
		});

		test("label htmlFor uses custom id when provided", async () => {
			const { container } = await render(
				<Field.Root id="custom-id">
					<Field.Label>Email</Field.Label>
				</Field.Root>,
			);

			const label = container.querySelector("label");
			await expect
				.element(label as HTMLElement)
				.toHaveAttribute("for", "custom-id");
		});

		test("description id is derived from field id", async () => {
			const { container } = await render(
				<Field.Root id="my-field">
					<Field.Description>Help text</Field.Description>
				</Field.Root>,
			);

			const description = container.querySelector("p.field__description");
			await expect
				.element(description as HTMLElement)
				.toHaveAttribute("id", "my-field-description");
		});

		test("error aria-describedby is derived from field id", async () => {
			const { container } = await render(
				<Field.Root id="my-field">
					<Field.Error>Required</Field.Error>
				</Field.Root>,
			);

			const error = container.querySelector("p.field__error");
			await expect
				.element(error as HTMLElement)
				.toHaveAttribute("aria-describedby", "my-field-error");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", async () => {
			const { container } = await render(
				<Field.Root className="custom-root">
					<Field.Label>Label</Field.Label>
				</Field.Root>,
			);

			const root = container.querySelector(".field");
			await expect.element(root as HTMLElement).toHaveClass("field");
			await expect.element(root as HTMLElement).toHaveClass("custom-root");
		});

		test("applies custom className to label", async () => {
			const { getByText } = await render(
				<Field.Root>
					<Field.Label className="custom-label">Label</Field.Label>
				</Field.Root>,
			);

			await expect.element(getByText("Label")).toHaveClass("field__label");
			await expect.element(getByText("Label")).toHaveClass("custom-label");
		});

		test("applies custom className to description", async () => {
			const { getByText } = await render(
				<Field.Root>
					<Field.Description className="custom-desc">
						Help text
					</Field.Description>
				</Field.Root>,
			);

			await expect
				.element(getByText("Help text"))
				.toHaveClass("field__description");
			await expect.element(getByText("Help text")).toHaveClass("custom-desc");
		});

		test("applies custom className to error", async () => {
			const { getByText } = await render(
				<Field.Root>
					<Field.Error className="custom-error">Error</Field.Error>
				</Field.Root>,
			);

			await expect.element(getByText("Error")).toHaveClass("field__error");
			await expect.element(getByText("Error")).toHaveClass("custom-error");
		});

		test("forwards data attributes to root", async () => {
			const { container } = await render(
				<Field.Root data-testid="my-field">
					<Field.Label>Label</Field.Label>
				</Field.Root>,
			);

			const root = container.querySelector(".field");
			await expect
				.element(root as HTMLElement)
				.toHaveAttribute("data-testid", "my-field");
		});
	});

	describe("named exports", () => {
		test("FieldRoot is accessible as named export", async () => {
			const { container } = await render(
				<FieldRoot>
					<FieldLabel>Label</FieldLabel>
				</FieldRoot>,
			);

			const root = container.querySelector(".field");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("FieldDescription is accessible as named export", async () => {
			const { getByText } = await render(
				<FieldRoot>
					<FieldDescription>Help</FieldDescription>
				</FieldRoot>,
			);

			await expect.element(getByText("Help")).toBeInTheDocument();
		});

		test("FieldError is accessible as named export", async () => {
			const { getByText } = await render(
				<FieldRoot>
					<FieldError>Error</FieldError>
				</FieldRoot>,
			);

			await expect.element(getByText("Error")).toBeInTheDocument();
		});
	});

	describe("full composition", () => {
		test("renders complete field with all sub-components", async () => {
			const { container } = await render(
				<Field.Root id="full-field">
					<Field.Label>Username</Field.Label>
					<Field.Description>Enter your username</Field.Description>
					<Field.Error>This field is required</Field.Error>
				</Field.Root>,
			);

			const label = container.querySelector("label");
			await expect.element(label as HTMLElement).toBeInTheDocument();
			await expect
				.element(label as HTMLElement)
				.toHaveAttribute("for", "full-field");

			const description = container.querySelector("p.field__description");
			await expect.element(description as HTMLElement).toBeInTheDocument();

			const error = container.querySelector("p.field__error");
			await expect.element(error as HTMLElement).toBeInTheDocument();
		});
	});
});
