<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getSliderContext } from "./slider.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();

const context = getSliderContext();
</script>

<span
	bind:this={ref}
	class={cn(context.slots.track(), className)}
	{...rest}
>
	{@render rest.children?.()}
</span>
