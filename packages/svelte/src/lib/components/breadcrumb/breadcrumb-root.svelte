<script lang="ts">
import { breadcrumbVariants, cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { setBreadcrumbContext } from "./breadcrumb.context";

interface Props extends WithElementRef<HTMLAttributes<HTMLElement>> {}

let {
	ref = $bindable(null),
	children,
	class: className,
	...rest
}: Props = $props();

const slots = breadcrumbVariants();
setBreadcrumbContext({ slots });
</script>

<nav
	bind:this={ref}
	aria-label="breadcrumb"
	class={cn(slots.root(), className)}
	{...rest}
>
	{@render children?.()}
</nav>
