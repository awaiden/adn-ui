<script lang="ts">
import { popoverVariants } from "@adn-ui/core";
import { Popover as PopoverPrimitive } from "bits-ui";
import { setPopoverContext } from "./popover.context";

let { open = $bindable(false), ...rest }: PopoverPrimitive.RootProps = $props();

const slots = popoverVariants();
setPopoverContext({ slots });
</script>

<PopoverPrimitive.Root bind:open {...rest}>
	{@render rest.children?.()}
</PopoverPrimitive.Root>
