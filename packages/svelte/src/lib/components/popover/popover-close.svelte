<script lang="ts">
import { cn } from "@adn-ui/core";
import { Popover as PopoverPrimitive } from "bits-ui";
import { getPopoverContext } from "./popover.context";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: PopoverPrimitive.CloseProps = $props();

const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Close
	bind:ref
	class={cn(slots.close(), className)}
	{...rest}
>
	{@render children?.()}
</PopoverPrimitive.Close>
