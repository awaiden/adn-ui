<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Label } from "../label";
import { RadioGroup, RadioGroupRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/RadioGroup",
	tags: ["autodocs"],
	component: RadioGroupRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<RadioGroup.Root value="comfortable">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label for="r1">Default</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label for="r2">Comfortable</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3">
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<Label for="r3">Compact</Label>
			</div>
		</RadioGroup.Root>
	{/snippet}
</Story>
