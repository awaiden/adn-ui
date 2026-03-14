<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getCardContext } from "./card.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

const { slots } = getCardContext();
</script>

<div
	bind:this={ref}
	class={cn(slots.header(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
