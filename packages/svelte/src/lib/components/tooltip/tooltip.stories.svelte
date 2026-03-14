<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Tooltip, TooltipRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Tooltip",
	tags: ["autodocs"],
});
</script>

<Story name="Default">
	<Tooltip.Provider delayDuration={0}>
		<Tooltip.Root>
			<Tooltip.Trigger class="px-4 py-2 bg-primary text-primary-foreground rounded-md">
				Hover me
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Add to library</p>
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Story>
