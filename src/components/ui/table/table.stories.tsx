import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from ".";

const meta = {
  component: Table.Root,
  title: "Components/Table",
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  { invoice: "INV001", method: "Credit Card", status: "Paid", totalAmount: "$250.00" },
  { invoice: "INV002", method: "PayPal", status: "Pending", totalAmount: "$150.00" },
  { invoice: "INV003", method: "Bank Transfer", status: "Unpaid", totalAmount: "$350.00" },
  { invoice: "INV004", method: "Credit Card", status: "Paid", totalAmount: "$450.00" },
  { invoice: "INV005", method: "PayPal", status: "Paid", totalAmount: "$550.00" },
];

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption>A list of your recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {invoices.map((invoice) => (
          <Table.Row key={invoice.invoice}>
            <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
            <Table.Cell>{invoice.status}</Table.Cell>
            <Table.Cell>{invoice.method}</Table.Cell>
            <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
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
  ),
};
