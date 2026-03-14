<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Badge } from "./index";

const { Story } = defineMeta({
	title: "Components/Badge",
	tags: ["autodocs"],
	component: Badge,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "destructive", "outline"],
		},
	},
});
</script>

<Story name="Primary" args={{ variant: "primary" }}>
	{#snippet children()}
		Primary
	{/snippet}
</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>
	{#snippet children()}
		Secondary
	{/snippet}
</Story>

<Story name="Destructive" args={{ variant: "destructive" }}>
	{#snippet children()}
		Destructive
	{/snippet}
</Story>

<Story name="Outline" args={{ variant: "outline" }}>
	{#snippet children()}
		Outline
	{/snippet}
</Story>
