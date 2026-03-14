<script lang="ts">
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	children,
	...rest
}: ContextMenuPrimitive.TriggerProps = $props();
</script>

<ContextMenuPrimitive.Trigger bind:ref {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Trigger>
