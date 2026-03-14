<script lang="ts">
import { cn } from "@adn-ui/core";
import { Accordion as AccordionPrimitive } from "bits-ui";
import { LucideChevronDown } from "lucide-svelte";
import { getAccordionContext } from "./accordion.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AccordionPrimitive.TriggerProps = $props();

const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Trigger
	bind:ref
	class={cn(slots.trigger(), className)}
	{...rest}
>
	{@render rest.children?.()}
	<LucideChevronDown class={slots.chevron()} aria-hidden="true" />
</AccordionPrimitive.Trigger>
