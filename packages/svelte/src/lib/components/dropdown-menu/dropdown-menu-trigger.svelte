<script lang="ts">
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let { ref = $bindable(null), ...rest }: DropdownMenuPrimitive.TriggerProps =
	$props();
</script>

<DropdownMenuPrimitive.Trigger bind:ref {...rest}>
	{@render rest.children?.()}
</DropdownMenuPrimitive.Trigger>
