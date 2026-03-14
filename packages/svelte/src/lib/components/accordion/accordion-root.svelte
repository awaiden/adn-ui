<script lang="ts">
import { accordionVariants, cn } from "@adn-ui/core";
import { Accordion as AccordionPrimitive } from "bits-ui";
import { setAccordionContext } from "./accordion.context";
import Accordion from "./accordion.stories.svelte";

let {
	ref = $bindable(null),
	value = $bindable(),
	type,
	class: className,
	...rest
}: AccordionPrimitive.RootProps = $props();

const slots = accordionVariants();
setAccordionContext({ slots });
</script>

	<AccordionPrimitive.Root
		bind:ref
		bind:value
		class={cn(slots.root(), className)}
		{...rest as any}
	/>