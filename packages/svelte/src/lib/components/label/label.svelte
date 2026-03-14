<script lang="ts">
import { cn, type LabelVariants, labelVariants } from "@adn-ui/core";
import { Label as LabelPrimitive } from "bits-ui";

interface Props extends LabelPrimitive.RootProps, LabelVariants {}

let {
	ref = $bindable(null),
	class: className,
	children,
	size = "md",
	...rest
}: Props = $props();
</script>

<LabelPrimitive.Root
	bind:ref
	class={cn(labelVariants({ size }), className)}
	{...rest}
>
	{@render children?.()}
</LabelPrimitive.Root>
