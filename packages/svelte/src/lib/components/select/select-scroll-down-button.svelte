<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import ChevronDown from "lucide-svelte/icons/chevron-down";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: SelectPrimitive.ScrollDownButtonProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.ScrollDownButton
	bind:ref
	class={cn(context.slots.scrollButton(), className)}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<ChevronDown class="h-4 w-4" />
	{/if}
</SelectPrimitive.ScrollDownButton>
