<script lang="ts">
import { cn, type ToggleVariants, toggleVariants } from "@adn-ui/core";
import { Toggle as TogglePrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	pressed = $bindable(false),
	class: className,
	variant = "default",
	size = "md",
	...rest
}: TogglePrimitive.RootProps & ToggleVariants = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	class={cn(toggleVariants({ variant, size }), className)}
	{...rest}
>
	{@render rest.children?.()}
</TogglePrimitive.Root>
