<script lang="ts">
import { type BadgeVariants, badgeVariants, cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";

interface Props
	extends WithElementRef<HTMLAttributes<HTMLDivElement>>,
		BadgeVariants {}

let {
	ref = $bindable(null),
	class: className,
	variant = "primary",
	...rest
}: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn(badgeVariants({ variant }), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
