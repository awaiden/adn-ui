<script lang="ts">
import { cn } from "@adn-ui/core";
import { Tooltip as TooltipPrimitive } from "bits-ui";
import { getTooltipContext } from "./tooltip.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: TooltipPrimitive.ArrowProps = $props();

const context = getTooltipContext();
</script>

<TooltipPrimitive.Arrow
	bind:ref
	class={cn(context.slots.arrow(), className)}
	{...rest}
/>
