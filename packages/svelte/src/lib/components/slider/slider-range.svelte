<script lang="ts">
import { cn } from "@adn-ui/core";
import { Slider as SliderPrimitive } from "bits-ui";
import { getSliderContext } from "./slider.context.js";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: SliderPrimitive.RangeProps = $props();

const context = getSliderContext();
</script>

<SliderPrimitive.Range
	bind:ref
	class={cn(context.slots.range(), className)}
	{...rest}
/>
