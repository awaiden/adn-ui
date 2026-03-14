<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getAlertDialogContext } from "./alert-dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

const { slots } = getAlertDialogContext();
</script>

<div
	bind:this={ref}
	class={cn(slots.footer(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
