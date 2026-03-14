<script lang="ts">
import { Badge } from "./index";

let { children, ...rest } = $props();
</script>

<Badge data-testid="badge" {...rest}>
	{#if typeof children === 'function'}
		{@render children()}
	{:else}
		{children}
	{/if}
</Badge>
