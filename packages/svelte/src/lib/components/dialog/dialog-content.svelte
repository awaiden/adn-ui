<script lang="ts">
import { cn } from "@adn-ui/core";
import { Dialog as DialogPrimitive } from "bits-ui";
import { getDialogContext } from "./dialog.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: DialogPrimitive.ContentProps = $props();

const { slots } = getDialogContext();
</script>

<DialogPrimitive.Content
	bind:ref
	class={cn(slots.content(), className)}
	{...rest}
>
	{@render rest.children?.()}
</DialogPrimitive.Content>
