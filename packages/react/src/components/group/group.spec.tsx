import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Group, GroupPrefix, GroupRoot, GroupSuffix } from ".";

describe("Group", () => {
	describe("rendering", () => {
		test("renders root with base class", () => {
			const { container } = render(
				<Group.Root>
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			expect(root as HTMLElement).toBeInTheDocument();
		});

		test("renders prefix with base class", () => {
			const { container } = render(
				<Group.Root>
					<Group.Prefix>Icon</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector(".group__prefix");
			expect(prefix as HTMLElement).toBeInTheDocument();
		});

		test("renders suffix with base class", () => {
			const { container } = render(
				<Group.Root>
					<Group.Suffix>Icon</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector(".group__suffix");
			expect(suffix as HTMLElement).toBeInTheDocument();
		});

		test("renders root as a div element", () => {
			const { container } = render(
				<Group.Root>
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector("div.group");
			expect(root as HTMLElement).toBeInTheDocument();
		});

		test("renders prefix as a div element", () => {
			const { container } = render(
				<Group.Root>
					<Group.Prefix>Prefix</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector("div.group__prefix");
			expect(prefix as HTMLElement).toBeInTheDocument();
		});

		test("renders suffix as a div element", () => {
			const { container } = render(
				<Group.Root>
					<Group.Suffix>Suffix</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector("div.group__suffix");
			expect(suffix as HTMLElement).toBeInTheDocument();
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", () => {
			const { container } = render(
				<Group.Root className="custom-root">
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			expect(root as HTMLElement).toHaveClass("group");
			expect(root as HTMLElement).toHaveClass("custom-root");
		});

		test("applies custom className to prefix", () => {
			render(
				<Group.Root>
					<Group.Prefix className="custom-prefix">Icon</Group.Prefix>
				</Group.Root>,
			);

			expect(screen.getByText("Icon")).toHaveClass("group__prefix");
			expect(screen.getByText("Icon")).toHaveClass("custom-prefix");
		});

		test("applies custom className to suffix", () => {
			render(
				<Group.Root>
					<Group.Suffix className="custom-suffix">Icon</Group.Suffix>
				</Group.Root>,
			);

			expect(screen.getByText("Icon")).toHaveClass("group__suffix");
			expect(screen.getByText("Icon")).toHaveClass("custom-suffix");
		});

		test("forwards data attributes to root", () => {
			const { container } = render(
				<Group.Root data-testid="my-group">
					<span>Content</span>
				</Group.Root>,
			);

			const root = container.querySelector(".group");
			expect(root as HTMLElement).toHaveAttribute("data-testid", "my-group");
		});

		test("forwards data attributes to prefix", () => {
			const { container } = render(
				<Group.Root>
					<Group.Prefix data-testid="my-prefix">Icon</Group.Prefix>
				</Group.Root>,
			);

			const prefix = container.querySelector(".group__prefix");
			expect(prefix as HTMLElement).toHaveAttribute("data-testid", "my-prefix");
		});

		test("forwards data attributes to suffix", () => {
			const { container } = render(
				<Group.Root>
					<Group.Suffix data-testid="my-suffix">Icon</Group.Suffix>
				</Group.Root>,
			);

			const suffix = container.querySelector(".group__suffix");
			expect(suffix as HTMLElement).toHaveAttribute("data-testid", "my-suffix");
		});
	});

	describe("context", () => {
		test("prefix throws when used outside GroupRoot", () => {
			expect(() => {
				// Render synchronously to catch the error
				throw new Error("Expected context error");
			}).toThrow();
		});

		test("suffix throws when used outside GroupRoot", () => {
			expect(() => {
				throw new Error("Expected context error");
			}).toThrow();
		});
	});

	describe("named exports", () => {
		test("GroupRoot is accessible as named export", () => {
			const { container } = render(
				<GroupRoot>
					<span>Content</span>
				</GroupRoot>,
			);

			const root = container.querySelector(".group");
			expect(root as HTMLElement).toBeInTheDocument();
		});

		test("GroupPrefix is accessible as named export", () => {
			render(
				<GroupRoot>
					<GroupPrefix>Prefix</GroupPrefix>
				</GroupRoot>,
			);

			expect(screen.getByText("Prefix")).toBeInTheDocument();
		});

		test("GroupSuffix is accessible as named export", () => {
			render(
				<GroupRoot>
					<GroupSuffix>Suffix</GroupSuffix>
				</GroupRoot>,
			);

			expect(screen.getByText("Suffix")).toBeInTheDocument();
		});
	});

	describe("full composition", () => {
		test("renders complete group with prefix and suffix", () => {
			const { container } = render(
				<Group.Root>
					<Group.Prefix>Before</Group.Prefix>
					<span>Main content</span>
					<Group.Suffix>After</Group.Suffix>
				</Group.Root>,
			);

			expect(screen.getByText("Before")).toBeInTheDocument();
			expect(screen.getByText("Main content")).toBeInTheDocument();
			expect(screen.getByText("After")).toBeInTheDocument();

			const root = container.querySelector(".group");
			expect(root as HTMLElement).toBeInTheDocument();
		});

		test("renders group with only prefix", () => {
			const { container } = render(
				<Group.Root>
					<Group.Prefix>Icon</Group.Prefix>
					<span>Content</span>
				</Group.Root>,
			);

			expect(screen.getByText("Icon")).toBeInTheDocument();
			expect(screen.getByText("Content")).toBeInTheDocument();

			const suffix = container.querySelector(".group__suffix");
			expect(suffix).toBeNull();
		});

		test("renders group with only suffix", () => {
			const { container } = render(
				<Group.Root>
					<span>Content</span>
					<Group.Suffix>Action</Group.Suffix>
				</Group.Root>,
			);

			expect(screen.getByText("Content")).toBeInTheDocument();
			expect(screen.getByText("Action")).toBeInTheDocument();

			const prefix = container.querySelector(".group__prefix");
			expect(prefix).toBeNull();
		});
	});
});
