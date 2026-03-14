<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: ContextMenuPrimitive.GroupHeadingProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.GroupHeading
	bind:ref
	class={cn(context.slots.label(), className)}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.GroupHeading>
