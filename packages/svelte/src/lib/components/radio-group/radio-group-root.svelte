<script lang="ts">
import { cn, radioGroupVariants } from "@adn-ui/core";
import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
import { setRadioGroupContext } from "./radio-group.context";

let {
	ref = $bindable(null),
	value = $bindable(),
	class: className,
	...rest
}: RadioGroupPrimitive.RootProps = $props();

const slots = radioGroupVariants();
setRadioGroupContext({ slots });
</script>

<RadioGroupPrimitive.Root
	bind:ref
	bind:value
	class={cn(slots.root(), className)}
	{...rest}
/>
