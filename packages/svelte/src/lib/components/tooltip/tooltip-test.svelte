<script lang="ts">
import { Tooltip } from "./index.js";

let { open = $bindable(false), ...rest } = $props();
</script>

<Tooltip.Provider delayDuration={0}>
	<Tooltip.Root bind:open {...rest}>
		<Tooltip.Trigger class="px-4 py-2 bg-primary text-primary-foreground rounded-md" data-testid="tooltip-trigger">
			Hover me
		</Tooltip.Trigger>
		<Tooltip.Content data-testid="tooltip-content">
			Tooltip content
			<Tooltip.Arrow data-testid="tooltip-arrow" />
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
