<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getAlertContext } from "./alert.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLHeadingElement>> = $props();

const { slots } = getAlertContext();
</script>

<h5
	bind:this={ref}
	class={cn(slots.title(), className)}
	{...rest}
>
	{@render rest.children?.()}
</h5>
