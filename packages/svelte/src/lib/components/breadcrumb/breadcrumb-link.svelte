<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { getBreadcrumbContext } from "./breadcrumb.context";

interface Props extends WithElementRef<HTMLAnchorAttributes> {}

let {
	ref = $bindable(null),
	children,
	class: className,
	...rest
}: Props = $props();

const { slots } = getBreadcrumbContext();
</script>

<a
	bind:this={ref}
	class={cn(slots.link(), className)}
	{...rest}
>
	{@render children?.()}
</a>
