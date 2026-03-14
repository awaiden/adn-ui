<script lang="ts">
import { cn } from "@adn-ui/core";
import { Tooltip as TooltipPrimitive } from "bits-ui";
import { getTooltipContext } from "./tooltip.context.js";

let {
	ref = $bindable(null),
	class: className,
	sideOffset = 4,
	...rest
}: TooltipPrimitive.ContentProps = $props();

const context = getTooltipContext();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(context.slots.content(), className)}
		{...rest}
	>
		{@render rest.children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
