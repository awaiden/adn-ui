<script lang="ts">
import { cn } from "@adn-ui/core";
import { Avatar as AvatarPrimitive } from "bits-ui";
import { getAvatarContext } from "./avatar.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AvatarPrimitive.ImageProps = $props();

const { slots } = getAvatarContext();
</script>

<AvatarPrimitive.Image
	bind:ref
	class={cn(slots.image(), className)}
	{...rest}
/>
