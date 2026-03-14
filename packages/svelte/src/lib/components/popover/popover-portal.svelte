<script lang="ts">
import { Popover as PopoverPrimitive } from "bits-ui";

let { ...rest }: PopoverPrimitive.PortalProps = $props();
</script>

<PopoverPrimitive.Portal {...rest}>
	{@render rest.children?.()}
</PopoverPrimitive.Portal>
