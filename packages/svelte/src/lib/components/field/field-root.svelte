<script lang="ts">
import { cn, fieldVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { setFieldContext } from "./field.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

const slots = fieldVariants();
setFieldContext({ slots });
</script>

<div
	bind:this={ref}
	class={cn(slots.root(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
