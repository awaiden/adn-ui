<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: SelectPrimitive.SeparatorProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.Separator
	bind:ref
	class={cn(context.slots.separator(), className)}
	{...rest}
/>
