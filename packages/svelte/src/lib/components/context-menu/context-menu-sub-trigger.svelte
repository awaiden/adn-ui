<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { LucideChevronRight } from "lucide-svelte";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: ContextMenuPrimitive.SubTriggerProps = $props();

const context = getContextMenuContext();
</script>

<ContextMenuPrimitive.SubTrigger
	bind:ref
	class={cn(context.slots.subTrigger(), className)}
	{...rest}
>
	{@render children?.()}
	<LucideChevronRight class="ml-auto size-4" />
</ContextMenuPrimitive.SubTrigger>
