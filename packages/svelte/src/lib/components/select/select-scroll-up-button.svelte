<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import ChevronUp from "lucide-svelte/icons/chevron-up";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: SelectPrimitive.ScrollUpButtonProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.ScrollUpButton
	bind:ref
	class={cn(context.slots.scrollButton(), className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<ChevronUp class="h-4 w-4" />
	{/if}
</SelectPrimitive.ScrollUpButton>
