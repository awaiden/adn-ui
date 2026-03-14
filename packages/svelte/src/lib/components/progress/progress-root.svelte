<script lang="ts">
import { cn, progressVariants } from "@adn-ui/core";
import { Progress as ProgressPrimitive } from "bits-ui";
import { setProgressContext } from "./progress.context";

let {
	ref = $bindable(null),
	value = $bindable(0),
	max = 100,
	class: className,
	...rest
}: ProgressPrimitive.RootProps = $props();

const slots = progressVariants();
setProgressContext({ slots });
</script>

<ProgressPrimitive.Root
	bind:ref
	bind:value
	{max}
	class={cn(slots.root(), className)}
	{...rest}
/>
