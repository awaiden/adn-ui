<script lang="ts">
import { cn, tableVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLTableAttributes } from "svelte/elements";
import { setTableContext } from "./table.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLTableAttributes> = $props();

const slots = tableVariants();
setTableContext({ slots });
</script>

<div class="relative w-full overflow-auto">
	<table
		bind:this={ref}
		class={cn(slots.root(), className)}
		{...rest}
	>
		{@render rest.children?.()}
	</table>
</div>
