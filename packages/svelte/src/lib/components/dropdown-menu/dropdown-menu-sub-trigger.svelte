<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { LucideChevronRight } from "lucide-svelte";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DropdownMenuPrimitive.SubTriggerProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	class={cn(slots.subTrigger(), className)}
	{...rest}
>
	{@render rest.children?.()}
	<LucideChevronRight class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>
