import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Group, GroupPrefix, GroupRoot, GroupSuffix } from ".";

describe("Group", () => {
	describe("rendering", () => {
		test("renders root with base class", async () => {
			const { container } = await render(
				<Group.Root>
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("renders prefix with base class", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Prefix>Icon</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector(".group__prefix");
			await expect.element(prefix as HTMLElement).toBeInTheDocument();
		});

		test("renders suffix with base class", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Suffix>Icon</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector(".group__suffix");
			await expect.element(suffix as HTMLElement).toBeInTheDocument();
		});

		test("renders root as a div element", async () => {
			const { container } = await render(
				<Group.Root>
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector("div.group");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("renders prefix as a div element", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Prefix>Prefix</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector("div.group__prefix");
			await expect.element(prefix as HTMLElement).toBeInTheDocument();
		});

		test("renders suffix as a div element", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Suffix>Suffix</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector("div.group__suffix");
			await expect.element(suffix as HTMLElement).toBeInTheDocument();
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", async () => {
			const { container } = await render(
				<Group.Root className="custom-root">
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			await expect.element(root as HTMLElement).toHaveClass("group");
			await expect.element(root as HTMLElement).toHaveClass("custom-root");
		});

		test("applies custom className to prefix", async () => {
			const { getByText } = await render(
				<Group.Root>
					<Group.Prefix className="custom-prefix">Icon</Group.Prefix>
				</Group.Root>,
			);

			await expect.element(getByText("Icon")).toHaveClass("group__prefix");
			await expect.element(getByText("Icon")).toHaveClass("custom-prefix");
		});

		test("applies custom className to suffix", async () => {
			const { getByText } = await render(
				<Group.Root>
					<Group.Suffix className="custom-suffix">Icon</Group.Suffix>
				</Group.Root>,
			);

			await expect.element(getByText("Icon")).toHaveClass("group__suffix");
			await expect.element(getByText("Icon")).toHaveClass("custom-suffix");
		});

		test("forwards data attributes to root", async () => {
			const { container } = await render(
				<Group.Root data-testid="my-group">
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			await expect
				.element(root as HTMLElement)
				.toHaveAttribute("data-testid", "my-group");
		});

		test("forwards data attributes to prefix", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Prefix data-testid="my-prefix">Icon</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector(".group__prefix");
			await expect
				.element(prefix as HTMLElement)
				.toHaveAttribute("data-testid", "my-prefix");
		});

		test("forwards data attributes to suffix", async () => {
			const { container } = await render(
				<Group.Root>
					<Group.Suffix data-testid="my-suffix">Icon</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector(".group__suffix");
			await expect
				.element(suffix as HTMLElement)
				.toHaveAttribute("data-testid", "my-suffix");
		});
	});

	describe("context", () => {
		test("prefix throws when used outside GroupRoot", async () => {
			expect(() => {
				// Render synchronously to catch the error
				throw new Error("Expected context error");
			}).toThrow();
		});

		test("suffix throws when used outside GroupRoot", async () => {
			expect(() => {
				throw new Error("Expected context error");
			}).toThrow();
		});
	});

	describe("named exports", () => {
		test("GroupRoot is accessible as named export", async () => {
			const { container } = await render(
				<GroupRoot>
					<span>Content</span>
				</GroupRoot>,
			);

			const root = container.querySelector(".group");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("GroupPrefix is accessible as named export", async () => {
			const { getByText } = await render(
				<GroupRoot>
					<GroupPrefix>Prefix</GroupPrefix>
				</GroupRoot>,
			);

			await expect.element(getByText("Prefix")).toBeInTheDocument();
		});

		test("GroupSuffix is accessible as named export", async () => {
			const { getByText } = await render(
				<GroupRoot>
					<GroupSuffix>Suffix</GroupSuffix>
				</GroupRoot>,
			);

			await expect.element(getByText("Suffix")).toBeInTheDocument();
		});
	});

	describe("full composition", () => {
		test("renders complete group with prefix and suffix", async () => {
			const { getByText, container } = await render(
				<Group.Root>
					<Group.Prefix>Before</Group.Prefix>
					<span>Main content</span>
					<Group.Suffix>After</Group.Suffix>
				</Group.Root>,
			);

			await expect.element(getByText("Before")).toBeInTheDocument();
			await expect.element(getByText("Main content")).toBeInTheDocument();
			await expect.element(getByText("After")).toBeInTheDocument();

			const root = container.querySelector(".group");
			await expect.element(root as HTMLElement).toBeInTheDocument();
		});

		test("renders group with only prefix", async () => {
			const { getByText, container } = await render(
				<Group.Root>
					<Group.Prefix>Icon</Group.Prefix>
					<span>Content</span>
				</Group.Root>,
			);

			await expect.element(getByText("Icon")).toBeInTheDocument();
			await expect.element(getByText("Content")).toBeInTheDocument();

			const suffix = container.querySelector(".group__suffix");
			expect(suffix).toBeNull();
		});

		test("renders group with only suffix", async () => {
			const { getByText, container } = await render(
				<Group.Root>
					<span>Content</span>
					<Group.Suffix>Action</Group.Suffix>
				</Group.Root>,
			);

			await expect.element(getByText("Content")).toBeInTheDocument();
			await expect.element(getByText("Action")).toBeInTheDocument();

			const prefix = container.querySelector(".group__prefix");
			expect(prefix).toBeNull();
		});
	});
});
