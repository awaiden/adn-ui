<script lang="ts">
import { cn } from "@adn-ui/core";
import { Accordion as AccordionPrimitive } from "bits-ui";
import { getAccordionContext } from "./accordion.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AccordionPrimitive.ContentProps = $props();

const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</AccordionPrimitive.Content>
