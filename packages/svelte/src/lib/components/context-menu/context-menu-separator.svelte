<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ContextMenuPrimitive.SeparatorProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.Separator
	bind:ref
	class={cn(context.slots.separator(), className)}
	{...rest}
/>
