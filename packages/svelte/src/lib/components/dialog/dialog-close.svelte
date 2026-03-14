<script lang="ts">
import { cn } from "@adn-ui/core";
import { Dialog as DialogPrimitive } from "bits-ui";
import { getDialogContext } from "./dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DialogPrimitive.CloseProps = $props();

const { slots } = getDialogContext();
</script>

<DialogPrimitive.Close
	bind:ref
	class={cn(slots.close(), className)}
	{...rest}
/>
