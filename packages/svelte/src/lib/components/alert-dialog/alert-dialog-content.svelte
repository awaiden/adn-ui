<script lang="ts">
import { cn } from "@adn-ui/core";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { getAlertDialogContext } from "./alert-dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AlertDialogPrimitive.ContentProps = $props();

const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Content
	bind:ref
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</AlertDialogPrimitive.Content>
