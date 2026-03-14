<script lang="ts">
import { Popover as PopoverPrimitive } from "bits-ui";

let { ref = $bindable(null), ...rest }: PopoverPrimitive.TriggerProps =
	$props();
</script>

<PopoverPrimitive.Trigger bind:ref {...rest}>
	{@render rest.children?.()}
</PopoverPrimitive.Trigger>
