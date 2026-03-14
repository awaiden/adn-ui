<script lang="ts">
import { cn, type InputVariants, inputVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLInputAttributes } from "svelte/elements";

interface Props extends WithElementRef<HTMLInputAttributes>, InputVariants {}

let {
	ref = $bindable(null),
	value = $bindable(),
	class: className,
	size = "md",
	...rest
}: Props = $props();
</script>

<input
	bind:this={ref}
	bind:value
	class={cn(inputVariants({ size }), className)}
	{...rest}
/>
