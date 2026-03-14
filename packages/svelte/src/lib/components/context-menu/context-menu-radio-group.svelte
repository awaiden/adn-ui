<script lang="ts">
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

let {
	value = $bindable(),
	children,
	...rest
}: ContextMenuPrimitive.RadioGroupProps = $props();
</script>

<ContextMenuPrimitive.RadioGroup bind:value {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.RadioGroup>
