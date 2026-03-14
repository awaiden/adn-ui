<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Tabs, TabsRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Tabs",
	tags: ["autodocs"],
	component: TabsRoot,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["underline", "outline"],
		},
	},
});
</script>

<Story name="Default" args={{ value: "account", class: "w-[400px]" }}>
	{#snippet children()}
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account">
			<div class="p-4 border rounded-b-md">Account settings content.</div>
		</Tabs.Content>
		<Tabs.Content value="password">
			<div class="p-4 border rounded-b-md">Password settings content.</div>
		</Tabs.Content>
	{/snippet}
</Story>

<Story name="Outline" args={{ variant: "outline", value: "account", class: "w-[400px]" }}>
	{#snippet children()}
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account">
			<div class="p-4 border rounded-b-md">Account settings content.</div>
		</Tabs.Content>
		<Tabs.Content value="password">
			<div class="p-4 border rounded-b-md">Password settings content.</div>
		</Tabs.Content>
	{/snippet}
</Story>
