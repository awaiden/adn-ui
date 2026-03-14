<script lang="ts">
import { cn } from "@adn-ui/core";
import { Progress as ProgressPrimitive } from "bits-ui";
import { getProgressContext } from "./progress.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: ProgressPrimitive.IndicatorProps = $props();

const { slots } = getProgressContext();
</script>

<ProgressPrimitive.Indicator
	bind:ref
	class={cn(slots.indicator(), className)}
	{...rest}
/>
