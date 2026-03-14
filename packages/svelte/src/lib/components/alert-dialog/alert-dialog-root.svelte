<script lang="ts">
import { alertDialogVariants } from "@adn-ui/core";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { setAlertDialogContext } from "./alert-dialog.context";

let { open = $bindable(false), ...rest }: AlertDialogPrimitive.RootProps =
	$props();

const slots = alertDialogVariants();
setAlertDialogContext({ slots });
</script>

<AlertDialogPrimitive.Root bind:open {...rest}>
	{@render rest.children?.()}
</AlertDialogPrimitive.Root>
