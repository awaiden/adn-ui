<script lang="ts">
import { cn } from "@adn-ui/core";
import { Avatar as AvatarPrimitive } from "bits-ui";
import { getAvatarContext } from "./avatar.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AvatarPrimitive.FallbackProps = $props();

const { slots } = getAvatarContext();
</script>

<AvatarPrimitive.Fallback
	bind:ref
	class={cn(slots.fallback(), className)}
	{...rest}
/>
