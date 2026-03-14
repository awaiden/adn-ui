<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { AlertDialog, AlertDialogRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/AlertDialog",
	tags: ["autodocs"],
	component: AlertDialogRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<AlertDialog.Trigger class="rounded-md border p-2">
			Delete Account
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay />
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete your account and remove your data from our servers.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action class="button--destructive">
						Continue
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	{/snippet}
</Story>
