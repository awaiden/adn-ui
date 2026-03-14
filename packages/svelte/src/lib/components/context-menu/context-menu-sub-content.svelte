<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: ContextMenuPrimitive.SubContentProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.SubContent
	bind:ref
	class={cn(context.slots.subContent(), className)}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.SubContent>
