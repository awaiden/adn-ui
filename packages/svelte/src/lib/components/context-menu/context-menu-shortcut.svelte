<script lang="ts">
import { cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { getContextMenuContext } from "./context-menu.context";

interface Props extends WithElementRef<HTMLAttributes<HTMLSpanElement>> {}

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: Props = $props();

const context = getContextMenuContext();
</script>

<span
	bind:this={ref}
	class={cn(context.slots.shortcut(), className)}
	{...rest}
>
	{@render children?.()}
</span>
