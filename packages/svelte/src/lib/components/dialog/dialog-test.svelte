<script lang="ts">
import { Dialog } from "./index";

let { open = $bindable(false) } = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger data-testid="trigger">Open</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay data-testid="overlay" />
		<Dialog.Content data-testid="content">
			<Dialog.Header>
				<Dialog.Title>Title</Dialog.Title>
				<Dialog.Description>Description</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Dialog.Close data-testid="close">Close</Dialog.Close>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
