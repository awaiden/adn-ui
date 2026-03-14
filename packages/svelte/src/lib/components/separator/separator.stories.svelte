<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Separator } from "./index";

const { Story } = defineMeta({
	title: "Components/Separator",
	tags: ["autodocs"],
	component: Separator,
	argTypes: {
		orientation: {
			control: { type: "select" },
			options: ["horizontal", "vertical"],
		},
	},
});
</script>

<Story name="Default">
	<div class="space-y-1">
		<h4 class="text-sm font-medium leading-none">adn-ui</h4>
		<p class="text-sm text-muted-foreground">
			An open-source UI component library.
		</p>
	</div>
	<Separator class="my-4" />
	<div class="flex h-5 items-center space-x-4 text-sm">
		<div>Blog</div>
		<Separator orientation="vertical" />
		<div>Docs</div>
		<Separator orientation="vertical" />
		<div>Source</div>
	</div>
</Story>
