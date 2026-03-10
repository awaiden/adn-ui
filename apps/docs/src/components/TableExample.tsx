"use client";

import { Table } from "@adn-ui/react";

const invoices = [
	{ id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
	{ id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
	{
		id: "INV003",
		status: "Unpaid",
		method: "Bank Transfer",
		amount: "$350.00",
	},
	{ id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
	{ id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

const Default = () => (
	<Table.Root>
		<Table.Caption>A list of your recent invoices.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head className="w-25">Invoice</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Method</Table.Head>
				<Table.Head className="text-right">Amount</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{invoices.map((invoice) => (
				<Table.Row key={invoice.id}>
					<Table.Cell className="font-medium">{invoice.id}</Table.Cell>
					<Table.Cell>{invoice.status}</Table.Cell>
					<Table.Cell>{invoice.method}</Table.Cell>
					<Table.Cell className="text-right">{invoice.amount}</Table.Cell>
				</Table.Row>
			))}
		</Table.Body>
		<Table.Footer>
			<Table.Row>
				<Table.Cell colSpan={3}>Total</Table.Cell>
				<Table.Cell className="text-right">$1,750.00</Table.Cell>
			</Table.Row>
		</Table.Footer>
	</Table.Root>
);

const Simple = () => (
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Role</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell>Alice Johnson</Table.Cell>
				<Table.Cell>alice@example.com</Table.Cell>
				<Table.Cell>Admin</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Bob Smith</Table.Cell>
				<Table.Cell>bob@example.com</Table.Cell>
				<Table.Cell>Editor</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Charlie Brown</Table.Cell>
				<Table.Cell>charlie@example.com</Table.Cell>
				<Table.Cell>Viewer</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
);

export const TableExample = {
	Default,
	Simple,
};
