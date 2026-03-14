<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	sideOffset = 4,
	...rest
}: SelectPrimitive.ContentProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(context.slots.content(), className)}
		{...rest}
	>
		{@render rest.children?.()}
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
