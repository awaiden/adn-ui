<script lang="ts">
import { cn, type SkeletonVariants, skeletonVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";

interface Props
	extends WithElementRef<HTMLAttributes<HTMLDivElement>>,
		SkeletonVariants {}

let { ref = $bindable(null), class: className, ...rest }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn(skeletonVariants(), className)}
	{...rest}
/>
