<script lang="ts">
import { Field } from "./index";

let {
	id = "field-id",
	label = "",
	description = "",
	error = "",
	children,
	...rest
} = $props();
</script>

<Field.Root {id} data-testid="field" {...rest}>
	{#if label}
		<Field.Label>{label}</Field.Label>
	{/if}
	{#if children}
		{#if typeof children === 'function'}
			{@render children()}
		{:else}
			{children}
		{/if}
	{/if}
	{#if description}
		<Field.Description>{description}</Field.Description>
	{/if}
	{#if error}
		<Field.Error>{error}</Field.Error>
	{/if}
</Field.Root>
