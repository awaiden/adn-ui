<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Checkbox, CheckboxRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Checkbox",
	tags: ["autodocs"],
	component: CheckboxRoot,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
		checked: {
			control: "boolean",
		},
		indeterminate: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
});
</script>

<Story name="Default">
	{#snippet children()}
		<Checkbox.Indicator />
	{/snippet}
</Story>

<Story name="Checked" args={{ checked: true }}>
	{#snippet children()}
		<Checkbox.Indicator />
	{/snippet}
</Story>

<Story name="Indeterminate" args={{ indeterminate: true }}>
	{#snippet children()}
		<Checkbox.Indicator />
	{/snippet}
</Story>

<Story name="Sizes">
	{#snippet children()}
		<div class="flex flex-col gap-4">
			<Checkbox.Root size="sm" checked>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Checkbox.Root size="md" checked>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Checkbox.Root size="lg" checked>
				<Checkbox.Indicator />
			</Checkbox.Root>
		</div>
	{/snippet}
</Story>
