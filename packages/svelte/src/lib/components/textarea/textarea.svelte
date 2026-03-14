<script lang="ts">
import { cn, type TextareaVariants, textareaVariants } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLTextareaAttributes } from "svelte/elements";

interface Props
	extends WithElementRef<HTMLTextareaAttributes>,
		TextareaVariants {}

let {
	ref = $bindable(null),
	value = $bindable(),
	class: className,
	size = "md",
	...rest
}: Props = $props();
</script>

<textarea
	bind:this={ref}
	bind:value
	class={cn(textareaVariants({ size }), className)}
	{...rest}
></textarea>
