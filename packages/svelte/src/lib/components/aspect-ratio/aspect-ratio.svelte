<script lang="ts">
import { aspectRatioVariants, cn } from "@adn-ui/core";
import { AspectRatio as AspectRatioPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	ratio = 1,
	class: className,
	...rest
}: AspectRatioPrimitive.RootProps = $props();
</script>

<AspectRatioPrimitive.Root
	bind:ref
	{ratio}
	class={cn(aspectRatioVariants(), className)}
	{...rest}
/>
