<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { LucideCheck } from "lucide-svelte";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	checked = $bindable(false),
	...rest
}: DropdownMenuPrimitive.CheckboxItemProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.CheckboxItem
	bind:ref
	bind:checked
	class={cn(slots.item(), className)}
	{...rest}
>
	{#snippet children({ checked, indeterminate })}
		{#if rest.children}
			{@render rest.children({ checked, indeterminate })}
		{:else}
			{@render rest.children?.()}
			<span class={slots.itemIndicator()}>
				{#if indeterminate}
					<div class="h-px w-2 bg-current" />
				{:else if checked}
					<LucideCheck class="size-4" />
				{/if}
			</span>
		{/if}
	{/snippet}
</DropdownMenuPrimitive.CheckboxItem>
