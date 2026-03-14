<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
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
	class={cn(slots.item(), className)}
	{...rest}
>
	{@render children?.()}
</li>
