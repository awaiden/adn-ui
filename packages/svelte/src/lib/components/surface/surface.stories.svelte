<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Surface } from "./index";

const { Story } = defineMeta({
	title: "Components/Surface",
	tags: ["autodocs"],
	component: Surface,
});
</script>

<Story name="Default">
	{#snippet children()}
		Surface Content
	{/snippet}
</Story>
