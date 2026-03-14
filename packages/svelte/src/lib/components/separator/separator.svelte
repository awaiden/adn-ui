<script lang="ts">
import { cn, type SeparatorVariants, separatorVariants } from "@adn-ui/core";
import { Separator as SeparatorPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	orientation = "horizontal",
	decorative = true,
	...rest
}: SeparatorPrimitive.RootProps & SeparatorVariants = $props();
</script>

<SeparatorPrimitive.Root
	bind:ref
	{orientation}
	{decorative}
	class={cn(separatorVariants({ orientation }), className)}
	{...rest}
/>
