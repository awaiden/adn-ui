<script lang="ts">
import { Accordion as AccordionPrimitive } from "bits-ui";

let { ref = $bindable(null), ...rest }: AccordionPrimitive.HeaderProps =
	$props();
</script>

<AccordionPrimitive.Header bind:ref {...rest}>
	{@render rest.children?.()}
</AccordionPrimitive.Header>
