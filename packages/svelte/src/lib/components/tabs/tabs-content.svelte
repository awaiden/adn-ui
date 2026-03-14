<script lang="ts">
import { cn } from "@adn-ui/core";
import { Tabs as TabsPrimitive } from "bits-ui";
import { getTabsContext } from "./tabs.context.js";

let {
	ref = $bindable(null),
	class: className,
	value,
	...rest
}: TabsPrimitive.ContentProps = $props();

const context = getTabsContext();
</script>

<TabsPrimitive.Content
	bind:ref
	{value}
	class={cn(context.slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</TabsPrimitive.Content>
