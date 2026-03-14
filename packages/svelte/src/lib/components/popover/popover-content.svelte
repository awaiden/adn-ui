<script lang="ts">
import { cn } from "@adn-ui/core";
import { Popover as PopoverPrimitive } from "bits-ui";
import { getPopoverContext } from "./popover.context";

let {
	ref = $bindable(null),
	class: className,
	sideOffset = 4,
	...rest
}: PopoverPrimitive.ContentProps = $props();

const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Content
	bind:ref
	{sideOffset}
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</PopoverPrimitive.Content>
