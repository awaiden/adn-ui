<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getCardContext } from "./card.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLHeadingElement>> = $props();

const { slots } = getCardContext();
</script>

<h3
	bind:this={ref}
	class={cn(slots.title(), className)}
	{...rest}
>
	{@render rest.children?.()}
</h3>
