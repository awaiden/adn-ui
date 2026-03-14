<script lang="ts">
import { cn } from "@adn-ui/core";
import { Popover as PopoverPrimitive } from "bits-ui";
import { getPopoverContext } from "./popover.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: PopoverPrimitive.ArrowProps = $props();

const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Arrow
	bind:ref
	class={cn(slots.arrow(), className)}
	{...rest}
/>
