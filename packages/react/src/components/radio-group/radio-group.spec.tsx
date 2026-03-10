import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { RadioGroup } from "./index";

describe("RadioGroup", () => {
	test("renders and allows selection", async () => {
		const { getByLabelText } = await render(
			<RadioGroup.Root defaultValue="1">
				<div className="flex items-center gap-2">
					<RadioGroup.Item value="1" id="r1">
						<RadioGroup.Indicator />
					</RadioGroup.Item>
					<label htmlFor="r1">Option 1</label>
				</div>
				<div className="flex items-center gap-2">
					<RadioGroup.Item value="2" id="r2">
						<RadioGroup.Indicator />
					</RadioGroup.Item>
					<label htmlFor="r2">Option 2</label>
				</div>
			</RadioGroup.Root>,
		);

		const option1 = getByLabelText("Option 1");
		const option2 = getByLabelText("Option 2");

		await expect.element(option1).toHaveAttribute("data-state", "checked");
		await expect.element(option2).toHaveAttribute("data-state", "unchecked");

		await option2.click();

		await expect.element(option1).toHaveAttribute("data-state", "unchecked");
		await expect.element(option2).toHaveAttribute("data-state", "checked");
	});

	test("handles disabled state", async () => {
		const { getByLabelText } = await render(
			<RadioGroup.Root disabled>
				<RadioGroup.Item value="1" id="r1">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<label htmlFor="r1">Option 1</label>
			</RadioGroup.Root>,
		);

		const option1 = getByLabelText("Option 1");
		await expect.element(option1).toBeDisabled();
	});
});
