<script lang="ts">
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

let { ...rest }: AlertDialogPrimitive.PortalProps = $props();
</script>

<AlertDialogPrimitive.Portal {...rest}>
	{@render rest.children?.()}
</AlertDialogPrimitive.Portal>
