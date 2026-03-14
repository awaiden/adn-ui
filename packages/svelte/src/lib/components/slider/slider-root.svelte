<script lang="ts">
import { cn, type SliderVariants, sliderVariants } from "@adn-ui/core";
import { Slider as SliderPrimitive } from "bits-ui";
import { setSliderContext } from "./slider.context.js";

type SliderRootProps = SliderPrimitive.RootProps & {
	type?: "single" | "multiple";
	size?: SliderVariants["size"];
};

let {
	ref = $bindable(null),
	value = $bindable(),
	type = "single",
	class: className,
	size = "md",
	...rest
}: SliderRootProps = $props();

const slots = $derived(sliderVariants({ size }));
setSliderContext({
	get slots() {
		return slots;
	},
});
</script>

	<SliderPrimitive.Root
		bind:ref
		bind:value
		type={type}
		class={cn(slots.root(), className)}
		{...rest  as any }
	/>