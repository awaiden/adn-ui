<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import { LucideThumbsUp } from "lucide-svelte";
import { Button } from "./index";

const { Story } = defineMeta({
	title: "Components/Button",
	tags: ["autodocs"],
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "destructive", "outline", "ghost"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg", "icon"],
		},
	},
	args: {
		onclick: fn(),
	},
});
</script>

<Story name="Primary">
	{#snippet children()}
		Primary Button
	{/snippet}
</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>
	{#snippet children()}
		Secondary Button
	{/snippet}
</Story>

<Story name="Destructive" args={{ variant: "destructive" }}>
	{#snippet children()}
		Destructive Button
	{/snippet}
</Story>

<Story name="Outline" args={{ variant: "outline" }}>
	{#snippet children()}
		Outline Button
	{/snippet}
</Story>

<Story name="Ghost" args={{ variant: "ghost" }}>
	{#snippet children()}
		Ghost Button
	{/snippet}
</Story>

<Story name="Small" args={{ size: "sm" }}>
	{#snippet children()}
		Small Button
	{/snippet}
</Story>

<Story name="Large" args={{ size: "lg" }}>
	{#snippet children()}
		Large Button
	{/snippet}
</Story>

<Story name="Icon" args={{ size: "icon" }}>
	{#snippet children()}
	<LucideThumbsUp />
	{/snippet}
</Story>
