<script lang="ts">
import { dialogVariants } from "@adn-ui/core";
import { Dialog as DialogPrimitive } from "bits-ui";
import { setDialogContext } from "./dialog.context";

let { open = $bindable(false), ...rest }: DialogPrimitive.RootProps = $props();

const slots = dialogVariants();
setDialogContext({ slots });
</script>

<DialogPrimitive.Root bind:open {...rest}>
	{@render rest.children?.()}
</DialogPrimitive.Root>
