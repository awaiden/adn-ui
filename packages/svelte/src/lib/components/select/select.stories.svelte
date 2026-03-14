<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Select, SelectRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Select",
	tags: ["autodocs"],
	component: SelectRoot,
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["single", "multiple"],
		},
	},
});

const fruits = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "blueberry", label: "Blueberry" },
	{ value: "grapes", label: "Grapes" },
	{ value: "pineapple", label: "Pineapple" },
];
</script>

<Story name="Default" args={{ type: "single", items: fruits }}>
	{#snippet children()}
		<Select.Trigger class="w-[180px]" />
		<Select.Content>
			<Select.ScrollUpButton />
			<Select.Viewport>
				<Select.Group>
					<Select.Label>Fruits</Select.Label>
					<Select.Separator />
					{#each fruits as fruit}
						<Select.Item value={fruit.value} label={fruit.label}>
							{fruit.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Viewport>
			<Select.ScrollDownButton />
		</Select.Content>
	{/snippet}
</Story>

<Story name="Multiple" args={{ type: "multiple", items: fruits }}>
	{#snippet children()}
		<Select.Trigger class="w-[240px]" />
		<Select.Content>
			<Select.ScrollUpButton />
			<Select.Viewport>
				<Select.Group>
					<Select.Label>Fruits</Select.Label>
					<Select.Separator />
					{#each fruits as fruit}
						<Select.Item value={fruit.value} label={fruit.label}>
							{fruit.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Viewport>
			<Select.ScrollDownButton />
		</Select.Content>
	{/snippet}
</Story>
