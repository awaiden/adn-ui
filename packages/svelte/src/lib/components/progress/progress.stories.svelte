<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Progress, ProgressRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Progress",
	tags: ["autodocs"],
	component: ProgressRoot,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
		value: {
			control: { type: "number", min: 0, max: 100 },
		},
	},
});
</script>

<Story name="Default" args={{ value: 60 }}>
	{#snippet children()}
		<Progress.Indicator />
	{/snippet}
</Story>

<Story name="Indeterminate">
	{#snippet children()}
		<Progress.Indicator />
	{#if false} <!-- Just to show the structure -->
		<p>Indeterminate state</p>
	{/if}
	{/snippet}
</Story>

<Story name="Sizes">
	{#snippet children()}
		<div class="flex flex-col gap-4 w-full max-w-md">
			<Progress.Root size="sm" value={30}>
				<Progress.Indicator />
			</Progress.Root>
			<Progress.Root size="md" value={50}>
				<Progress.Indicator />
			</Progress.Root>
			<Progress.Root size="lg" value={80}>
				<Progress.Indicator />
			</Progress.Root>
		</div>
	{/snippet}
</Story>
