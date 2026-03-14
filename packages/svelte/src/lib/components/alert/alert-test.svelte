<script lang="ts">
import { Alert } from "./index";

let {
	variant = "default",
	title = "",
	description = "",
	children,
	...rest
} = $props();
</script>

<Alert.Root {variant} data-testid="alert" {...rest}>
	{#if title}
		<Alert.Title>{title}</Alert.Title>
	{/if}
	{#if description}
		<Alert.Description>{description}</Alert.Description>
	{/if}
	{#if children}
		{#if typeof children === 'function'}
			{@render children()}
		{:else}
			{children}
		{/if}
	{/if}
</Alert.Root>
