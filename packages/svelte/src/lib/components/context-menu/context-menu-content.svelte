<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: ContextMenuPrimitive.ContentProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.Content
	bind:ref
	class={cn(context.slots.content(), className)}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.Content>
