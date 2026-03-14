<script lang="ts">
import { Popover } from "./index";

let { open = $bindable(false) } = $props();
</script>

<Popover.Root bind:open>
	<Popover.Trigger data-testid="trigger">Open</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content data-testid="content">
			<Popover.Arrow data-testid="arrow" />
			<div class="p-4">
				<p>Popover content</p>
				<Popover.Close data-testid="close">Close</Popover.Close>
			</div>
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
