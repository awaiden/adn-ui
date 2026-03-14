<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import {
	LucideChevronRight,
	LucideCreditCard,
	LucideLogOut,
	LucideSettings,
	LucideUser,
} from "lucide-svelte";
import { Button } from "../button";
import { DropdownMenu, DropdownMenuRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/DropdownMenu",
	tags: ["autodocs"],
	component: DropdownMenuRoot,
});
</script>

<Story name="Default">
	{#snippet children()}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="outline">Open Menu</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Group>
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<LucideUser class="mr-2 size-4" />
						<span>Profile</span>
						<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<LucideCreditCard class="mr-2 size-4" />
						<span>Billing</span>
						<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<LucideSettings class="mr-2 size-4" />
						<span>Settings</span>
						<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<LucideLogOut class="mr-2 size-4" />
					<span>Log out</span>
					<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/snippet}
</Story>

<Story name="With Submenu">
	{#snippet children()}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="outline">Open Submenu</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Item>New Tab</DropdownMenu.Item>
				<DropdownMenu.Item>New Window</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger>
						<span>More Tools</span>
						<LucideChevronRight class="ml-auto size-4" />
					</DropdownMenu.SubTrigger>
					<DropdownMenu.SubContent class="w-48">
						<DropdownMenu.Item>Save Page As...</DropdownMenu.Item>
						<DropdownMenu.Item>Create Shortcut...</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Sub>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/snippet}
</Story>
