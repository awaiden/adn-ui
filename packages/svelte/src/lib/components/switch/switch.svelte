<script lang="ts">
import { cn, type SwitchVariants, switchVariants } from "@adn-ui/core";
import { Switch as SwitchPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	checked = $bindable(false),
	class: className,
	size = "md",
	...rest
}: SwitchPrimitive.RootProps & SwitchVariants = $props();

const slots = $derived(switchVariants({ size }));
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	class={cn(slots.root(), className)}
	{...rest}
>
	<SwitchPrimitive.Thumb class={slots.thumb()} />
</SwitchPrimitive.Root>
