<script lang="ts">
import { type AlertVariants, alertVariants, cn } from "@adn-ui/core";
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
import { setAlertContext } from "./alert.context";

interface Props
	extends WithElementRef<HTMLAttributes<HTMLDivElement>>,
		AlertVariants {}

let {
	ref = $bindable(null),
	class: className,
	variant = "default",
	...rest
}: Props = $props();

const slots = $derived(alertVariants({ variant }));
setAlertContext({
	get slots() {
		return slots;
	},
});
</script>

<div
	bind:this={ref}
	role="alert"
	class={cn(slots.root(), className)}
	{...rest}
>
	{@render rest.children?.()}
</div>
