<script lang="ts">
import { contextMenuVariants } from "@adn-ui/core";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { setContextMenuContext } from "./context-menu.context";

let { children, ...rest }: ContextMenuPrimitive.RootProps = $props();

const slots = contextMenuVariants();
setContextMenuContext({
	get slots() {
		return slots;
	},
});
</script>

<ContextMenuPrimitive.Root {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Root>
