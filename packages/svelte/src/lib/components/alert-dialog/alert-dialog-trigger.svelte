<script lang="ts">
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

let { ref = $bindable(null), ...rest }: AlertDialogPrimitive.TriggerProps =
	$props();
</script>

<AlertDialogPrimitive.Trigger bind:ref {...rest}>
	{@render rest.children?.()}
</AccordionPrimitive.Trigger>
