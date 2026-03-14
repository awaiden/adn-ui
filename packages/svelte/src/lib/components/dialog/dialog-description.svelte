<script lang="ts">
import { cn } from "@adn-ui/core";
import { Dialog as DialogPrimitive } from "bits-ui";
import { getDialogContext } from "./dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DialogPrimitive.DescriptionProps = $props();

const { slots } = getDialogContext();
</script>

<DialogPrimitive.Description
	bind:ref
	class={cn(slots.description(), className)}
	{...rest}
/>
