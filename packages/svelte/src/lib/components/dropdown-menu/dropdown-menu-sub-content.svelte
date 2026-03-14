<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DropdownMenuPrimitive.SubContentProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.SubContent
	bind:ref
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</DropdownMenuPrimitive.SubContent>
