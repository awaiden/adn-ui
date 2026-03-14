<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DropdownMenuPrimitive.ArrowProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Arrow
	bind:ref
	class={cn(slots.arrow(), className)}
	{...rest}
/>
