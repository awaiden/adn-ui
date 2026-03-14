<script lang="ts">
import { Select } from "./index.js";

let { type = "single", value = $bindable(), ...rest } = $props();

const items = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "orange", label: "Orange" },
];
</script>

<Select.Root {type} bind:value {items} data-testid="select" {...rest}>
	<Select.Trigger class="w-[180px]" data-testid="select-trigger" />
	<Select.Content data-testid="select-content">
		<Select.ScrollUpButton data-testid="select-up" />
		<Select.Viewport data-testid="select-viewport">
			<Select.Group>
				<Select.Label>Fruits</Select.Label>
				<Select.Separator />
				<Select.Item value="apple" label="Apple" data-testid="item-apple">Apple</Select.Item>
				<Select.Item value="banana" label="Banana" data-testid="item-banana">Banana</Select.Item>
				<Select.Item value="orange" label="Orange" disabled>Orange</Select.Item>
			</Select.Group>
		</Select.Viewport>
		<Select.ScrollDownButton data-testid="select-down" />
	</Select.Content>
</Select.Root>
