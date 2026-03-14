<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Popover, PopoverRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Popover",
	tags: ["autodocs"],
	component: PopoverRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<Popover.Trigger class="rounded-md border p-2">
			Open Popover
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content class="w-72">
				<Popover.Arrow />
				<div class="grid gap-4 p-4">
					<div class="space-y-2">
						<h4 class="font-medium leading-none">Dimensions</h4>
						<p class="text-sm text-muted-foreground">
							Set the dimensions for the layer.
						</p>
					</div>
					<div class="grid gap-2">
						<div class="grid grid-cols-3 items-center gap-4">
							<span class="text-sm">Width</span>
							<input class="col-span-2 border p-1 rounded" value="100%" />
						</div>
						<div class="grid grid-cols-3 items-center gap-4">
							<span class="text-sm">Height</span>
							<input class="col-span-2 border p-1 rounded" value="25px" />
						</div>
					</div>
				</div>
				<div class="p-2 border-t flex justify-end">
					<Popover.Close class="text-sm hover:underline">Close</Popover.Close>
				</div>
			</Popover.Content>
		</Popover.Portal>
	{/snippet}
</Story>
