<script lang="ts">
import { collapsibleVariants } from "@adn-ui/core";
import { Collapsible as CollapsiblePrimitive } from "bits-ui";
import { setCollapsibleContext } from "./collapsible.context";

let {
	ref = $bindable(null),
	open = $bindable(false),
	...rest
}: CollapsiblePrimitive.RootProps = $props();

const slots = collapsibleVariants();
setCollapsibleContext({ slots });
</script>

<CollapsiblePrimitive.Root bind:ref bind:open {...rest}>
	{@render rest.children?.()}
</CollapsiblePrimitive.Root>
