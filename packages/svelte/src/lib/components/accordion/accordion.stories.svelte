<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Accordion, AccordionRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Accordion",
	tags: ["autodocs"],
	component: AccordionRoot,
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["single", "multiple"],
		},
	},
});
</script>

<Story name="Single" args={{ type: "single", class: "w-full max-w-md" }}>
	{#snippet children()}
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				Yes. It adheres to the WAI-ARIA design pattern.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Header>
				<Accordion.Trigger>Is it styled?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				Yes. It comes with default styles that match the other components' aesthetic.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Header>
				<Accordion.Trigger>Is it animated?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				Yes. It uses CSS transitions for smooth animations.
			</Accordion.Content>
		</Accordion.Item>
	{/snippet}
</Story>

<Story name="Multiple" args={{ type: "multiple", class: "w-full max-w-md" }}>
	{#snippet children()}
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger>Section 1</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				You can open multiple sections at once in this mode.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Header>
				<Accordion.Trigger>Section 2</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				Try opening Section 1 as well!
			</Accordion.Content>
		</Accordion.Item>
	{/snippet}
</Story>
