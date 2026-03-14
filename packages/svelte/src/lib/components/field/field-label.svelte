<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLLabelAttributes } from "svelte/elements";
import { getFieldContext } from "./field.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLLabelAttributes> = $props();

const { slots } = getFieldContext();
</script>

<label
	bind:this={ref}
	class={cn(slots.label(), className)}
	{...rest}
>
	{@render rest.children?.()}
</label>
