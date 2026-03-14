<script lang="ts">
import { cardVariants, cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { setCardContext } from "./card.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

const slots = cardVariants();
setCardContext({ slots });
</script>

<div
	bind:this={ref}
	class={cn(slots.root(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
