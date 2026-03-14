<script lang="ts">
import { cn } from "@adn-ui/core";
import { Slider as SliderPrimitive } from "bits-ui";
import { getSliderContext } from "./slider.context.js";

let {
	ref = $bindable(null),
	class: className,
	index,
	...rest
}: SliderPrimitive.ThumbProps = $props();

const context = getSliderContext();
</script>

<SliderPrimitive.Thumb
	bind:ref
	{index}
	class={cn(context.slots.thumb(), className)}
	{...rest}
/>
