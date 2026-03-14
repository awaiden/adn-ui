<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { AspectRatio } from "./index";

const { Story } = defineMeta({
	title: "Components/AspectRatio",
	tags: ["autodocs"],
	component: AspectRatio,
	argTypes: {
		ratio: {
			control: { type: "number" },
		},
	},
});
</script>

<Story name="Default" args={{ ratio: 16 / 9, class: "w-full max-w-md overflow-hidden rounded-md border" }}>
	{#snippet children()}
		<img
			src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
			alt="Landscape"
			class="h-full w-full object-cover"
		/>
	{/snippet}
</Story>

<Story name="Square" args={{ ratio: 1, class: "w-full max-w-sm overflow-hidden rounded-md border" }}>
	{#snippet children()}
		<img
			src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
			alt="Landscape"
			class="h-full w-full object-cover"
		/>
	{/snippet}
</Story>
