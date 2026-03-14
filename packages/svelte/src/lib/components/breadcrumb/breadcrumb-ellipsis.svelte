<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import { LucideEllipsis } from "lucide-svelte";
import type { HTMLAttributes } from "svelte/elements";
import { getBreadcrumbContext } from "./breadcrumb.context";

interface Props extends WithElementRef<HTMLAttributes<HTMLSpanElement>> {}

let {
	ref = $bindable(null),
	children,
	class: className,
	...rest
}: Props = $props();

const { slots } = getBreadcrumbContext();
</script>

<span
	bind:this={ref}
	role="presentation"
	aria-hidden="true"
	class={cn(slots.ellipsis(), className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<LucideEllipsis class="size-4" />
	{/if}
	<span class="sr-only">More</span>
</span>
