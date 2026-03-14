<script lang="ts">
import { cn } from "@adn-ui/core";
import { Collapsible as CollapsiblePrimitive } from "bits-ui";
import { getCollapsibleContext } from "./collapsible.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: CollapsiblePrimitive.TriggerProps = $props();

const { slots } = getCollapsibleContext();
</script>

<CollapsiblePrimitive.Trigger
	bind:ref
	class={cn(slots.trigger(), className)}
	{...rest}
/>
