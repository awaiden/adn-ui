<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getAlertContext } from "./alert.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

const { slots } = getAlertContext();
</script>

<div
	bind:this={ref}
	class={cn(slots.description(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
