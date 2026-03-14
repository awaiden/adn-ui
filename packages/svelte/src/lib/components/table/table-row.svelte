<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getTableContext } from "./table.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();

const { slots } = getTableContext();
</script>

<tr
	bind:this={ref}
	class={cn(slots.row(), className)}
	{...rest}
>
	{@render rest.children?.()}
</tr>
