<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: ContextMenuPrimitive.ItemProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.Item
	bind:ref
	class={cn(context.slots.item(), className)}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.Item>
