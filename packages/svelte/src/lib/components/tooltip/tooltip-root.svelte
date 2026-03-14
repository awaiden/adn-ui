<script lang="ts">
import { tooltipVariants } from "@adn-ui/core";
import { Tooltip as TooltipPrimitive } from "bits-ui";
import { setTooltipContext } from "./tooltip.context.js";

let { open = $bindable(false), ...rest }: TooltipPrimitive.RootProps = $props();

const slots = tooltipVariants();
setTooltipContext({
	get slots() {
		return slots;
	},
});
</script>

<TooltipPrimitive.Root bind:open {...rest}>
	{@render rest.children?.()}
</TooltipPrimitive.Root>
