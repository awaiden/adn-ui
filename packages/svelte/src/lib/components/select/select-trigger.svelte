<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import ChevronDown from "lucide-svelte/icons/chevron-down";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	placeholder = "Select...",
	...rest
}: SelectPrimitive.TriggerProps & { placeholder?: string } = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.Trigger
	bind:ref
	class={cn(context.slots.trigger(), className)}
	{...rest}
>
	{#if rest.children}
		{@render rest.children()}
	{:else}
		<SelectPrimitive.Value {placeholder} />
	{/if}
	<ChevronDown class={context.slots.icon()} aria-hidden="true" />
</SelectPrimitive.Trigger>
