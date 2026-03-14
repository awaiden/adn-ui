<script lang="ts">
import { cn } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import { getSelectContext } from "./select.context.js";

let {
	ref = $bindable(null),
	class: className,
	children,
	...rest
}: SelectPrimitive.GroupHeadingProps = $props();

const context = getSelectContext();
</script>

<SelectPrimitive.GroupHeading
	bind:ref
	class={cn(context.slots.label(), className)}
	{...rest}
>
	{@render children?.()}
</SelectPrimitive.GroupHeading>
