<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { ContextMenu, ContextMenuRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/ContextMenu",
	tags: ["autodocs"],
	component: ContextMenuRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<ContextMenu.Trigger class="flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
			Right-click here
		</ContextMenu.Trigger>
		<ContextMenu.Content class="w-64">
			<ContextMenu.Item>
				Back
				<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
			</ContextMenu.Item>
			<ContextMenu.Item>
				Forward
				<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
			</ContextMenu.Item>
			<ContextMenu.Item>
				Reload
				<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
			</ContextMenu.Item>
			<ContextMenu.Separator />
			<ContextMenu.Item>
				Save As...
				<ContextMenu.Shortcut>⌘S</ContextMenu.Shortcut>
			</ContextMenu.Item>
			<ContextMenu.Item>Print...</ContextMenu.Item>
		</ContextMenu.Content>
	{/snippet}
</Story>
