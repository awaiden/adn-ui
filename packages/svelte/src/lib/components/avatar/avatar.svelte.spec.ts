import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import AvatarTest from "./avatar-test.svelte";

describe("Avatar", () => {
	it("should render correctly", async () => {
		render(AvatarTest, { props: { fallback: "JD" } });

		const avatar = page.getByTestId("avatar");
		await expect.element(avatar).toBeInTheDocument();
		await expect.element(avatar).toHaveClass("avatar");
		await expect.element(page.getByText("JD")).toBeInTheDocument();
	});

	it("should apply size classes", async () => {
		render(AvatarTest, { props: { size: "lg", fallback: "JD" } });

		const avatar = page.getByTestId("avatar");
		await expect.element(avatar).toHaveClass("avatar--lg");
	});

	it("should apply custom classes", async () => {
		render(AvatarTest, {
			props: { class: "custom-avatar", fallback: "JD" },
		});

		const avatar = page.getByTestId("avatar");
		await expect.element(avatar).toHaveClass("custom-avatar");
	});
});
