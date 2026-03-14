<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
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
	role="link"
	aria-disabled="true"
	aria-current="page"
	class={cn(slots.page(), className)}
	{...rest}
>
	{@render children?.()}
</span>
