import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import TooltipTest from "./tooltip-test.svelte";

describe("Tooltip", () => {
	it("should render correctly and show on hover", async () => {
		render(TooltipTest);
		const trigger = page.getByTestId("tooltip-trigger");
		await expect.element(trigger).toBeInTheDocument();

		await trigger.hover();

		const content = page.getByTestId("tooltip-content");
		await expect.element(content).toBeVisible();
		await expect.element(content).toHaveClass("tooltip__content");
	});
});
