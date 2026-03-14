<script lang="ts">
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let { ...rest }: DropdownMenuPrimitive.PortalProps = $props();
</script>

<DropdownMenuPrimitive.Portal {...rest}>
	{@render rest.children?.()}
</DropdownMenuPrimitive.Portal>
