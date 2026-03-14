<script lang="ts">
import { cn } from "@adn-ui/core";
import { Accordion as AccordionPrimitive } from "bits-ui";
import { getAccordionContext } from "./accordion.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AccordionPrimitive.ItemProps = $props();

const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Item
	bind:ref
	class={cn(slots.item(), className)}
	{...rest}
>
	{@render rest.children?.()}
</AccordionPrimitive.Item>
