<script lang="ts">
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

let {
	open = $bindable(false),
	children,
	...rest
}: ContextMenuPrimitive.SubProps = $props();
</script>

<ContextMenuPrimitive.Sub bind:open {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Sub>
