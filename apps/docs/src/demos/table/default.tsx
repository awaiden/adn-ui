"use client";

import { Table } from "@adn-ui/react";

const invoices = [
  {
    invoice: "INV001",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
  },
  {
    invoice: "INV002",
    paymentMethod: "PayPal",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
  },
  {
    invoice: "INV003",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
  },
  {
    invoice: "INV004",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
  },
  {
    invoice: "INV005",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
  },
];

export default function Default() {
  return (
    <Table>
      <caption className="text-muted-foreground mt-4 text-sm">
        A list of your recent invoices.
      </caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell className="w-25">Invoice</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Method</Table.HeaderCell>
          <Table.HeaderCell className="text-right">Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {invoices.map((invoice) => (
          <Table.Row key={invoice.invoice}>
            <Table.DataCell className="font-medium">{invoice.invoice}</Table.DataCell>
            <Table.DataCell>{invoice.paymentStatus}</Table.DataCell>
            <Table.DataCell>{invoice.paymentMethod}</Table.DataCell>
            <Table.DataCell className="text-right">{invoice.totalAmount}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.DataCell colSpan={3}>Total</Table.DataCell>
          <Table.DataCell className="text-right">$1,750.00</Table.DataCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
