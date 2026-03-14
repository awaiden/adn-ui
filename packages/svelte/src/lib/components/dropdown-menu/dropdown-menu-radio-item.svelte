<script lang="ts">
import { cn } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { LucideCircle } from "lucide-svelte";
import { getDropdownMenuContext } from "./dropdown-menu.context";

let {
	ref = $bindable(null),
	class: className,
	value,
	...rest
}: DropdownMenuPrimitive.RadioItemProps = $props();

const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.RadioItem
	bind:ref
	{value}
	class={cn(slots.item(), className)}
	{...rest}
>
	{#snippet children({ checked })}
		{#if rest.children}
			{@render rest.children({ checked })}
		{:else}
			{@render rest.children?.()}
			<span class={slots.itemIndicator()}>
				{#if checked}
					<LucideCircle class="size-2 fill-current" />
				{/if}
			</span>
		{/if}
	{/snippet}
</DropdownMenuPrimitive.RadioItem>
