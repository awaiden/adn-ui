<script lang="ts">
import { cn } from "@adn-ui/core";
import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { getScrollAreaContext } from "./scroll-area.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ScrollAreaPrimitive.ViewportProps = $props();

const slots = getScrollAreaContext();
</script>

<ScrollAreaPrimitive.Viewport
	bind:ref
	class={cn(slots.viewport(), className)}
	{...rest}
/>
