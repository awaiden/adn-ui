<script lang="ts">
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let { children, ...rest }: DropdownMenuPrimitive.GroupProps = $props();
</script>

<DropdownMenuPrimitive.Group {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Group>
