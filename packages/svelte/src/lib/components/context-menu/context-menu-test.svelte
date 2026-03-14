<script lang="ts">
import { ContextMenu } from "./index";

let { ...rest } = $props();
</script>

<ContextMenu.Root {...rest}>
	<ContextMenu.Trigger data-testid="trigger">
		Right-click here
	</ContextMenu.Trigger>
	<ContextMenu.Content data-testid="content">
		<ContextMenu.Group>
			<ContextMenu.Label data-testid="label">Actions</ContextMenu.Label>
			<ContextMenu.Separator />
			<ContextMenu.Item data-testid="item">Back</ContextMenu.Item>
			<ContextMenu.Item>Forward</ContextMenu.Item>
		</ContextMenu.Group>
		<ContextMenu.Separator />
		<ContextMenu.Item disabled>Reload</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
