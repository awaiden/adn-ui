<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Dialog, DialogRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Dialog",
	tags: ["autodocs"],
	component: DialogRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<Dialog.Trigger class="rounded-md border p-2">
			Open Dialog
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay />
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>
						This is the dialog description. You can place any content here.
					</Dialog.Description>
				</Dialog.Header>
				<div class="py-4">
					<p>Custom content goes here.</p>
				</div>
				<Dialog.Footer>
					<Dialog.Close class="rounded-md border p-2">
						Close
					</Dialog.Close>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Portal>
	{/snippet}
</Story>
