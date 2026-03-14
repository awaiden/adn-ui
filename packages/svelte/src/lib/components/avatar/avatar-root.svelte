<script lang="ts">
import { avatarVariants, cn } from "@adn-ui/core";
import { Avatar as AvatarPrimitive } from "bits-ui";
import { setAvatarContext } from "./avatar.context";

let {
	ref = $bindable(null),
	class: className,
	...rest
}: AvatarPrimitive.RootProps = $props();

const slots = avatarVariants();
setAvatarContext({ slots });
</script>

<AvatarPrimitive.Root
	bind:ref
	class={cn(slots.root(), className)}
	{...rest}
/>
