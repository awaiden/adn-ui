<script lang="ts">
import { cn, type TabsVariants, tabsVariants } from "@adn-ui/core";
import { Tabs as TabsPrimitive } from "bits-ui";
import { setTabsContext } from "./tabs.context.js";

let {
	ref = $bindable(null),
	value = $bindable(),
	class: className,
	variant = "underline",
	...rest
}: TabsPrimitive.RootProps & TabsVariants = $props();

const slots = $derived(tabsVariants({ variant }));
setTabsContext({
	get slots() {
		return slots;
	},
});
</script>

<TabsPrimitive.Root
	bind:ref
	bind:value
	class={cn(slots.root(), className)}
	{...rest}
/>
