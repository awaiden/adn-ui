<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Avatar, AvatarRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Avatar",
	tags: ["autodocs"],
	component: AvatarRoot,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
	},
});
</script>

<Story name="Default" args={{ size: "md" }}>
	{#snippet children()}
		<Avatar.Image src="https://github.com/huntabyte.png" alt="Huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	{/snippet}
</Story>

<Story name="Fallback" args={{ size: "md" }}>
	{#snippet children()}
		<Avatar.Image src="https://invalid-url.com" alt="Invalid" />
		<Avatar.Fallback>JD</Avatar.Fallback>
	{/snippet}
</Story>

<Story name="Sizes">
	{#snippet children()}
		<div class="flex items-center gap-4">
			<Avatar.Root size="sm">
				<Avatar.Image src="https://github.com/huntabyte.png" alt="Huntabyte" />
				<Avatar.Fallback>HB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root size="md">
				<Avatar.Image src="https://github.com/huntabyte.png" alt="Huntabyte" />
				<Avatar.Fallback>HB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root size="lg">
				<Avatar.Image src="https://github.com/huntabyte.png" alt="Huntabyte" />
				<Avatar.Fallback>HB</Avatar.Fallback>
			</Avatar.Root>
		</div>
	{/snippet}
</Story>
