<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import { LucideChevronRight } from "lucide-svelte";
import type { HTMLLIAttributes } from "svelte/elements";
import { getBreadcrumbContext } from "./breadcrumb.context";

interface Props extends WithElementRef<HTMLLIAttributes> {}

let {
	ref = $bindable(null),
	children,
	class: className,
	...rest
}: Props = $props();

const { slots } = getBreadcrumbContext();
</script>

<li
	bind:this={ref}
	role="presentation"
	aria-hidden="true"
	class={cn(slots.separator(), className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<LucideChevronRight class="size-3.5" />
	{/if}
</li>
