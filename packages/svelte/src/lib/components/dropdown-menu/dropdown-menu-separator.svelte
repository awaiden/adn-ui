<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DropdownMenuPrimitive.SeparatorProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Separator
	bind:ref
	class={cn(slots.separator(), className)}
	{...rest}
/>
