<script lang="ts">
import { Tabs } from "./index.js";

let { value = $bindable("tab-1"), ...rest } = $props();
</script>

<Tabs.Root bind:value data-testid="tabs" {...rest}>
	<Tabs.List data-testid="tabs-list">
		<Tabs.Trigger value="tab-1" data-testid="trigger-1">Tab 1</Tabs.Trigger>
		<Tabs.Trigger value="tab-2" data-testid="trigger-2">Tab 2</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="tab-1" data-testid="content-1">Content 1</Tabs.Content>
	<Tabs.Content value="tab-2" data-testid="content-2">Content 2</Tabs.Content>
</Tabs.Root>
