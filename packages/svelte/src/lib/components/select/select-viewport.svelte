<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: SelectPrimitive.ViewportProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.Viewport
	bind:ref
	class={cn(context.slots.viewport(), className)}
	{...rest}
>
	{@render rest.children?.()}
</SelectPrimitive.Viewport>
