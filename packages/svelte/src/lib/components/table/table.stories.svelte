<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Table, TableRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Table",
	tags: ["autodocs"],
	component: TableRoot,
});

const invoices = [
	{ id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
	{ id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
	{
		id: "INV003",
		status: "Unpaid",
		method: "Bank Transfer",
		amount: "$350.00",
	},
];
</script>

<Story name="Default">
	{#snippet children()}
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Invoice</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Method</Table.Head>
				<Table.Head class="text-right">Amount</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each invoices as invoice}
				<Table.Row>
					<Table.Cell class="font-medium">{invoice.id}</Table.Cell>
					<Table.Cell>{invoice.status}</Table.Cell>
					<Table.Cell>{invoice.method}</Table.Cell>
					<Table.Cell class="text-right">{invoice.amount}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
		<Table.Footer>
			<Table.Row>
				<Table.Cell colspan={3}>Total</Table.Cell>
				<Table.Cell class="text-right">$750.00</Table.Cell>
			</Table.Row>
		</Table.Footer>
	{/snippet}
</Story>
