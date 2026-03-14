<script lang="ts">
import { cn } from "@adn-ui/core";
import { Collapsible as CollapsiblePrimitive } from "bits-ui";
import { getCollapsibleContext } from "./collapsible.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: CollapsiblePrimitive.ContentProps = $props();

const { slots } = getCollapsibleContext();
</script>

<CollapsiblePrimitive.Content
	bind:ref
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</CollapsiblePrimitive.Content>
