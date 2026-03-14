<script lang="ts">
import { type ButtonVariants, buttonVariants, cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLButtonAttributes } from "svelte/elements";

interface Props extends WithElementRef<HTMLButtonAttributes> {
	variant?: ButtonVariants["variant"];
	size?: ButtonVariants["size"];
}

let {
	ref = $bindable(null),
	onclick,
	class: className,
	size = "md",
	variant = "primary",
	...rest
}: Props = $props();
</script>

<button
	type="button"
	bind:this={ref}
	{onclick}
	class={cn(buttonVariants({ size, variant }), className)}
	{...rest}
>
	{@render rest.children?.()}
</button>
