<script lang="ts">
import { cn } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { LucideCircle } from "lucide-svelte";
import { getContextMenuContext } from "./context-menu.context";

let {
	ref = $bindable(null),
	class: className,
	value,
	...rest
}: ContextMenuPrimitive.RadioItemProps = $props();

const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.RadioItem
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
</ContextMenuPrimitive.RadioItem>
