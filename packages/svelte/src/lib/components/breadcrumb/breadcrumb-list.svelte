<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLOlAttributes } from "svelte/elements";
import { getBreadcrumbContext } from "./breadcrumb.context";

interface Props extends WithElementRef<HTMLOlAttributes> {}

let {
	ref = $bindable(null),
	children,
	class: className,
	...rest
}: Props = $props();

const { slots } = getBreadcrumbContext();
</script>

<ol
	bind:this={ref}
	class={cn(slots.list(), className)}
	{...rest}
>
	{@render children?.()}
</ol>
