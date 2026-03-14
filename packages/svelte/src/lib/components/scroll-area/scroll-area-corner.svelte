<script lang="ts">
import { cn } from "@adn-ui/core";
import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { getScrollAreaContext } from "./scroll-area.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ScrollAreaPrimitive.CornerProps = $props();

const slots = getScrollAreaContext();
</script>

<ScrollAreaPrimitive.Corner
	bind:ref
	class={cn(slots.corner(), className)}
	{...rest}
/>
