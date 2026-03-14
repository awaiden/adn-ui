<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Field, FieldRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Field",
	tags: ["autodocs"],
	component: FieldRoot,
	argTypes: {
		orientation: {
			control: { type: "select" },
			options: ["vertical", "horizontal"],
		},
	},
});
</script>

<Story name="Default" args={{ id: "email" }}>
	{#snippet children()}
		<Field.Label>Email</Field.Label>
		<input id="email" type="email" placeholder="you@example.com" class="border p-2 rounded" />
		<Field.Description>We'll never share your email.</Field.Description>
	{/snippet}
</Story>

<Story name="With Error" args={{ id: "username" }}>
	{#snippet children()}
		<Field.Label>Username</Field.Label>
		<input id="username" type="text" class="border border-destructive p-2 rounded" />
		<Field.Error>Username is already taken.</Field.Error>
	{/snippet}
</Story>

<Story name="Horizontal" args={{ id: "search", orientation: "horizontal" }}>
	{#snippet children()}
		<Field.Label>Search</Field.Label>
		<input id="search" type="search" placeholder="Search..." class="border p-2 rounded" />
	{/snippet}
</Story>
