<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { LucideAlertCircle, LucideInfo, LucideTerminal } from "lucide-svelte";
import { Alert, AlertRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Alert",
	tags: ["autodocs"],
	component: AlertRoot,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "destructive"],
		},
	},
});
</script>

<Story name="Default" args={{ variant: "default" }}>
	{#snippet children()}
		<LucideTerminal class="size-4" />
		<Alert.Title>Heads up!</Alert.Title>
		<Alert.Description>
			You can add components to your app using the CLI.
		</Alert.Description>
	{/snippet}
</Story>

<Story name="Destructive" args={{ variant: "destructive" }}>
	{#snippet children()}
		<LucideAlertCircle class="size-4" />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>
			Your session has expired. Please log in again.
		</Alert.Description>
	{/snippet}
</Story>

<Story name="With Icon" args={{ variant: "default" }}>
	{#snippet children()}
		<LucideInfo class="size-4" />
		<Alert.Title>Information</Alert.Title>
		<Alert.Description>
			This is an informational alert with an icon.
		</Alert.Description>
	{/snippet}
</Story>

<Story name="Title Only" args={{ variant: "default" }}>
	{#snippet children()}
		<LucideTerminal class="size-4" />
		<Alert.Title>Everything is up to date!</Alert.Title>
	{/snippet}
</Story>
