<script lang="ts">
import { AspectRatio } from "./index";

let { ratio = 1, children, ...rest } = $props();
</script>

<AspectRatio {ratio} data-testid="aspect-ratio" {...rest}>
	{#if children}
		{#if typeof children === 'function'}
			{@render children()}
		{:else}
			{children}
		{/if}
	{:else}
		<div style="width: 100%; height: 100%; background-color: blue;"></div>
	{/if}
</AspectRatio>
