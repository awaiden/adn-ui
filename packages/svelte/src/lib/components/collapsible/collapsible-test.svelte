<script lang="ts">
import { Collapsible } from "./index";

let { open = $bindable(false), ...rest } = $props();
</script>

<Collapsible.Root bind:open data-testid="collapsible" {...rest}>
	<Collapsible.Trigger data-testid="trigger">Toggle</Collapsible.Trigger>
	<Collapsible.Content data-testid="content">
		Content
	</Collapsible.Content>
</Collapsible.Root>
