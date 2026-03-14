<script lang="ts">
import { Select as SelectPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	children,
	...rest
}: SelectPrimitive.GroupProps = $props();
</script>

<SelectPrimitive.Group bind:ref {...rest}>
	{@render children?.()}
</SelectPrimitive.Group>
