<script lang="ts">
import Button from "./button.svelte";

let { children, ...rest } = $props();
</script>

<Button {...rest}>
	{#if typeof children === 'function'}
		{@render children()}
	{:else}
		{children}
	{/if}
</Button>
