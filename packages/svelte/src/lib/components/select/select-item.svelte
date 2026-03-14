<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import LucideCheck from "lucide-svelte/icons/check";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: SelectPrimitive.ItemProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.Item
	bind:ref
	class={cn(context.slots.item(), className)}
	{...rest}
>
	{#snippet children({ selected })}
		{#if rest.children}
			{@render rest.children({ selected })}
		{:else}
			{@render rest.children?.()}
			{#if selected}
				<div class={context.slots.itemIndicator()}>
					<LucideCheck class="size-4" />
				</div>
			{/if}
		{/if}
	{/snippet}
</SelectPrimitive.Item>
