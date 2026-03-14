<script lang="ts">
import { cn } from "@adn-ui/core";
import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { getScrollAreaContext } from "./scroll-area.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ScrollAreaPrimitive.ThumbProps = $props();

const slots = getScrollAreaContext();
</script>

<ScrollAreaPrimitive.Thumb
	bind:ref
	class={cn(slots.thumb(), className)}
	{...rest}
/>
