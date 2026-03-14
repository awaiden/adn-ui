<script lang="ts">
import { Surface } from "./index";

let { children, ...rest } = $props();
</script>

<Surface data-testid="surface" {...rest}>
	{#if typeof children === 'function'}
		{@render children()}
	{:else}
		{children}
	{/if}
</Surface>
