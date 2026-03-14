<script lang="ts">
import { DropdownMenu } from "./index";

let { open = $bindable(false) } = $props();
</script>

<DropdownMenu.Root bind:open>
	<DropdownMenu.Trigger data-testid="trigger">Open</DropdownMenu.Trigger>
	<DropdownMenu.Content data-testid="content">
		<DropdownMenu.Group>
			<DropdownMenu.Label data-testid="label">Actions</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item data-testid="item">
				Profile
				<DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>Billing</DropdownMenu.Item>
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxItem checked data-testid="checkbox-item">
			Show Sidebar
		</DropdownMenu.CheckboxItem>
		<DropdownMenu.Separator />
		<DropdownMenu.RadioGroup value="light">
			<DropdownMenu.RadioItem value="light" data-testid="radio-item">
				Light
			</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem value="dark">
				Dark
			</DropdownMenu.RadioItem>
		</DropdownMenu.RadioGroup>
		<DropdownMenu.Separator />
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger data-testid="sub-trigger">
				Invite Users
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent data-testid="sub-content">
				<DropdownMenu.Item>Email</DropdownMenu.Item>
				<DropdownMenu.Item>Message</DropdownMenu.Item>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	</DropdownMenu.Content>
</DropdownMenu.Root>
