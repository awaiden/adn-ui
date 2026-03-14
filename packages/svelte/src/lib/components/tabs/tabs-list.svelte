<script lang="ts">
import { cn } from "@adn-ui/core";
import { Tabs as TabsPrimitive } from "bits-ui";
import { getTabsContext } from "./tabs.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: TabsPrimitive.ListProps = $props();

const context = getTabsContext();
</script>

<TabsPrimitive.List
	bind:ref
	class={cn(context.slots.list(), className)}
	{...rest}
>
	{@render rest.children?.()}
</TabsPrimitive.List>
