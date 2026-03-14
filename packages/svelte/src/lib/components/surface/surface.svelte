<script lang="ts">
import { cn, type SurfaceVariants, surfaceVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";

interface Props
	extends WithElementRef<HTMLAttributes<HTMLDivElement>>,
		SurfaceVariants {}

let {
	ref = $bindable(null),
	class: className,
	variant = "default",
	...rest
}: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn(surfaceVariants({ variant }), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
