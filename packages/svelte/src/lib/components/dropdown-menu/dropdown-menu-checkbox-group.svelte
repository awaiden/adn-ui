<script lang="ts">
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let {
	value = $bindable(),
	children,
	...rest
}: DropdownMenuPrimitive.CheckboxGroupProps = $props();
</script>

<DropdownMenuPrimitive.CheckboxGroup bind:value {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.CheckboxGroup>
