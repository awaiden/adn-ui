import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Avatar, AvatarFallback, AvatarImage } from "./index";

describe("Avatar", () => {
	test("renders with base class", async () => {
		const { getByTestId } = await render(
			<Avatar.Root data-testid="avatar">
				<AvatarFallback>CN</AvatarFallback>
			</Avatar.Root>,
		);
		const avatar = getByTestId("avatar");

		await expect.element(avatar).toBeInTheDocument();
		await expect.element(avatar).toHaveClass("avatar");
	});

	test("applies default md size class", async () => {
		const { getByTestId } = await render(
			<Avatar.Root data-testid="avatar">
				<AvatarFallback>CN</AvatarFallback>
			</Avatar.Root>,
		);
		await expect.element(getByTestId("avatar")).toHaveClass("avatar--md");
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByTestId } = await render(
				<Avatar.Root size="sm" data-testid="avatar">
					<AvatarFallback>CN</AvatarFallback>
				</Avatar.Root>,
			);
			await expect.element(getByTestId("avatar")).toHaveClass("avatar--sm");
		});

		test("applies lg size", async () => {
			const { getByTestId } = await render(
				<Avatar.Root size="lg" data-testid="avatar">
					<AvatarFallback>CN</AvatarFallback>
				</Avatar.Root>,
			);
			await expect.element(getByTestId("avatar")).toHaveClass("avatar--lg");
		});
	});

	test("renders image when src is provided", async () => {
		const { getByRole } = await render(
			<Avatar.Root>
				<AvatarImage src="https://github.com/shadcn.png" alt="User" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar.Root>,
		);
		const image = getByRole("img");
		await expect.element(image).toBeInTheDocument();
		await expect
			.element(image)
			.toHaveAttribute("src", "https://github.com/shadcn.png");
	});

	test("renders fallback when image fails or is not provided", async () => {
		const { getByText } = await render(
			<Avatar.Root>
				<AvatarFallback>JD</AvatarFallback>
			</Avatar.Root>,
		);
		await expect.element(getByText("JD")).toBeInTheDocument();
		await expect.element(getByText("JD")).toHaveClass("avatar__fallback");
	});
});
