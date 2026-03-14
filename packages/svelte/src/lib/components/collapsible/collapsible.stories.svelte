<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Collapsible, CollapsibleRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Collapsible",
	tags: ["autodocs"],
	component: CollapsibleRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<Collapsible.Trigger class="w-full border p-2 rounded-md text-left">
			Toggle content
		</Collapsible.Trigger>
		<Collapsible.Content class="p-2 border border-t-0 rounded-b-md">
			This is the collapsible content. It can be toggled open and closed.
		</Collapsible.Content>
	{/snippet}
</Story>
