<script lang="ts">
import { cn } from "@adn-ui/core";
import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
import { LucideCircle } from "lucide-svelte";
import { getRadioGroupContext } from "./radio-group.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: RadioGroupPrimitive.ItemProps = $props();

const { slots } = getRadioGroupContext();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	class={cn(slots.item(), className)}
	{...rest}
>
	{#snippet children({ checked })}
		{#if rest.children}
			{@render rest.children({ checked })}
		{:else}
			{@render rest.children?.()}
			{#if checked}
				<div class={slots.indicator()}>
					<LucideCircle class="size-2 fill-current" />
				</div>
			{/if}
		{/if}
	{/snippet}
</RadioGroupPrimitive.Item>
