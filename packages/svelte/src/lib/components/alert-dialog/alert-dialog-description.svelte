<script lang="ts">
import { cn } from "@adn-ui/core";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { getAlertDialogContext } from "./alert-dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AlertDialogPrimitive.DescriptionProps = $props();

const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Description
	bind:ref
	class={cn(slots.description(), className)}
	{...rest}
/>
