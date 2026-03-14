<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getFieldContext } from "./field.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();

const { slots } = getFieldContext();
</script>

<p
	bind:this={ref}
	class={cn(slots.description(), className)}
	{...rest}
>
	{@render rest.children?.()}
</p>
