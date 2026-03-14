<script lang="ts">
import { cn } from "@adn-ui/core";
import { Dialog as DialogPrimitive } from "bits-ui";
import { getDialogContext } from "./dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DialogPrimitive.OverlayProps = $props();

const { slots } = getDialogContext();
</script>

<DialogPrimitive.Overlay
	bind:ref
	class={cn(slots.overlay(), className)}
	{...rest}
/>
