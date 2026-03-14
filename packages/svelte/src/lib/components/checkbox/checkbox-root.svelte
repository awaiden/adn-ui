<script lang="ts">
import { type CheckboxVariants, checkboxVariants, cn } from "@adn-ui/core";
import { Checkbox as CheckboxPrimitive } from "bits-ui";
import { LucideCheck } from "lucide-svelte";

let {
	ref = $bindable(null),
	checked = $bindable(false),
	class: className,
	size = "md",
	...rest
}: CheckboxPrimitive.RootProps & CheckboxVariants = $props();

const slots = $derived(checkboxVariants({ size }));
</script>

<CheckboxPrimitive.Root
	bind:ref
	bind:checked
	class={cn(slots.root(), className)}
	{...rest}
>
	{#snippet children({ checked, indeterminate })}
		{#if rest.children}
			{@render rest.children({ checked, indeterminate })}
		{:else if checked || indeterminate}
			<div class={slots.indicator()}>
				<LucideCheck class="size-full" />
			</div>
		{/if}
	{/snippet}
</CheckboxPrimitive.Root>
