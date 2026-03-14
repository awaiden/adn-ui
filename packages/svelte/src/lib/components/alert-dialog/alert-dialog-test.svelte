<script lang="ts">
import { AlertDialog } from "./index";

let { open = $bindable(false) } = $props();
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Trigger data-testid="trigger">Open</AlertDialog.Trigger>
	<AlertDialog.Portal>
		<AlertDialog.Overlay data-testid="overlay" />
		<AlertDialog.Content data-testid="content">
			<AlertDialog.Header>
				<AlertDialog.Title>Title</AlertDialog.Title>
				<AlertDialog.Description>Description</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel data-testid="cancel">Cancel</AlertDialog.Cancel>
				<AlertDialog.Action data-testid="action">Action</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
