<script lang="ts">
import { Tooltip as TooltipPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: TooltipPrimitive.TriggerProps = $props();
</script>

<TooltipPrimitive.Trigger bind:ref class={className} {...rest}>
	{@render rest.children?.()}
</TooltipPrimitive.Trigger>
