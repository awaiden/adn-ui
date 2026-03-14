<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	sideOffset = 4,
	...rest
}: DropdownMenuPrimitive.ContentProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Content
	bind:ref
	{sideOffset}
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</DropdownMenuPrimitive.Content>
