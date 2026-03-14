<script lang="ts">
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

let { children, ...rest }: ContextMenuPrimitive.GroupProps = $props();
</script>

<ContextMenuPrimitive.Group {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Group>
