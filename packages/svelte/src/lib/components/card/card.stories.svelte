<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./index";

const { Story } = defineMeta({
	title: "Components/Card",
	tags: ["autodocs"],
	component: Card,
});
</script>

<Story name="Default" args={{ class: "w-full max-w-sm" }}>
	{#snippet children()}
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
			<CardDescription>Card Description</CardDescription>
		</CardHeader>
		<CardContent>
			This is the card content. You can place any content here.
		</CardContent>
	{/snippet}
</Story>
