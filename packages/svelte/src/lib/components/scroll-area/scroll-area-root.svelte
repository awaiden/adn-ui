<script lang="ts">
import { cn, scrollAreaVariants } from "@adn-ui/core";
import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import { setScrollAreaContext } from "./scroll-area.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ScrollAreaPrimitive.RootProps = $props();

const slots = scrollAreaVariants();
setScrollAreaContext(slots);
</script>

<ScrollAreaPrimitive.Root
	bind:ref
	class={cn(slots.root(), className)}
	{...rest}
/>
