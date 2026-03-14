<script lang="ts">
import { Accordion } from "./index";

let { type = "single", value = $bindable() } = $props();
</script>

<Accordion.Root {type} bind:value data-testid="accordion">
	<Accordion.Item value="item-1">
		<Accordion.Header>
			<Accordion.Trigger>Trigger 1</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Content 1</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Header>
			<Accordion.Trigger>Trigger 2</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Content 2</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
