<script lang="ts">
import { Table } from "./index";

let { data = [] } = $props();
</script>

<Table.Root data-testid="table">
	<Table.Caption>A list of invoices.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Invoice</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data as row}
			<Table.Row>
				<Table.Cell>{row.invoice}</Table.Cell>
				<Table.Cell>{row.status}</Table.Cell>
				<Table.Cell>{row.amount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
	<Table.Footer>
		<Table.Row>
			<Table.Cell colspan={2}>Total</Table.Cell>
			<Table.Cell>$400.00</Table.Cell>
		</Table.Row>
	</Table.Footer>
</Table.Root>
