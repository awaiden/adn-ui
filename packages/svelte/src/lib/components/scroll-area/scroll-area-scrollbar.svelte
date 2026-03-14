<script lang="ts">
import { cn } from "@adn-ui/core";
import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { getScrollAreaContext } from "./scroll-area.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ScrollAreaPrimitive.ScrollbarProps = $props();

const slots = getScrollAreaContext();
</script>

<ScrollAreaPrimitive.Scrollbar
	bind:ref
	class={cn(slots.scrollbar(), className)}
	{...rest}
>
	{@render rest.children?.()}
</ScrollAreaPrimitive.Scrollbar>
