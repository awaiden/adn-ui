import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Alert } from "./index";

describe("Alert", () => {
	describe("rendering", () => {
		test("renders with role alert", () => {
			render(
				<Alert.Root>
					<Alert.Title>Alert</Alert.Title>
				</Alert.Root>,
			);

			const alert = screen.getByRole("alert");
			expect(alert).toBeInTheDocument();
		});

		test("renders with base class", () => {
			const { container } = render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveClass("alert");
		});

		test("renders title with base class", () => {
			render(
				<Alert.Root>
					<Alert.Title>My Title</Alert.Title>
				</Alert.Root>,
			);

			expect(screen.getByText("My Title")).toHaveClass("alert__title");
		});

		test("renders description with base class", () => {
			render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
					<Alert.Description>My description</Alert.Description>
				</Alert.Root>,
			);

			expect(screen.getByText("My description")).toHaveClass(
				"alert__description",
			);
		});

		test("renders title as h5 element", () => {
			const { container } = render(
				<Alert.Root>
					<Alert.Title>Heading</Alert.Title>
				</Alert.Root>,
			);

			const h5 = container.querySelector("h5");
			expect(h5 as HTMLElement).toBeInTheDocument();
		});
	});

	describe("variants", () => {
		test("applies default variant", () => {
			const { container } = render(
				<Alert.Root variant="default">
					<Alert.Title>Default</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveClass("alert--default");
		});

		test("applies destructive variant", () => {
			const { container } = render(
				<Alert.Root variant="destructive">
					<Alert.Title>Error</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveClass("alert--destructive");
		});

		test("defaults to default variant", () => {
			const { container } = render(
				<Alert.Root>
					<Alert.Title>Info</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveClass("alert--default");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", () => {
			const { container } = render(
				<Alert.Root className="custom-alert">
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveClass("alert");
			expect(alert as HTMLElement).toHaveClass("custom-alert");
		});

		test("applies custom className to title", () => {
			render(
				<Alert.Root>
					<Alert.Title className="custom-title">Title</Alert.Title>
				</Alert.Root>,
			);

			expect(screen.getByText("Title")).toHaveClass("alert__title");
			expect(screen.getByText("Title")).toHaveClass("custom-title");
		});

		test("applies custom className to description", () => {
			render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
					<Alert.Description className="custom-desc">
						Description
					</Alert.Description>
				</Alert.Root>,
			);

			expect(screen.getByText("Description")).toHaveClass("alert__description");
			expect(screen.getByText("Description")).toHaveClass("custom-desc");
		});

		test("forwards data attributes to root", () => {
			const { container } = render(
				<Alert.Root data-testid="my-alert">
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			expect(alert as HTMLElement).toHaveAttribute("data-testid", "my-alert");
		});
	});

	describe("full composition", () => {
		test("renders complete alert with title and description", () => {
			render(
				<Alert.Root>
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description>
						You can add components to your app using the CLI.
					</Alert.Description>
				</Alert.Root>,
			);

			expect(screen.getByRole("alert")).toBeInTheDocument();
			expect(screen.getByText("Heads up!")).toBeInTheDocument();
			expect(
				screen.getByText("You can add components to your app using the CLI."),
			).toBeInTheDocument();
		});
	});
});
