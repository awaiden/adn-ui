<script lang="ts">
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let {
	value = $bindable(),
	children,
	...rest
}: DropdownMenuPrimitive.RadioGroupProps = $props();
</script>

<DropdownMenuPrimitive.RadioGroup bind:value {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.RadioGroup>
