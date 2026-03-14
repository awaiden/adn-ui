<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();

const { slots } = getDropdownMenuContext();
</script>

<span
	bind:this={ref}
	class={cn(slots.shortcut(), className)}
	{...rest}
>
	{@render rest.children?.()}
</span>
