<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DropdownMenuPrimitive.ItemProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Item
	bind:ref
	class={cn(slots.item(), className)}
	{...rest}
>
	{@render rest.children?.()}
</DropdownMenuPrimitive.Item>
