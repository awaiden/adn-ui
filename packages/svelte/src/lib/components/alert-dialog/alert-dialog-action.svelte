<script lang="ts">
import { cn } from "@adn-ui/core";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { getAlertDialogContext } from "./alert-dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AlertDialogPrimitive.ActionProps = $props();

const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Action
	bind:ref
	class={cn(slots.action(), className)}
	{...rest}
/>
