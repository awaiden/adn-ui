"use client";

import React from "react";

import { Badge } from "../badge";

import { DataTable, type ColumnDef } from "./index";

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  date: string;
}

const sampleData: Payment[] = [
  { id: "PAY-001", amount: 316.0, status: "success", email: "ken99@yahoo.com", date: "2026-07-28" },
  { id: "PAY-002", amount: 242.0, status: "success", email: "Abe45@gmail.com", date: "2026-07-29" },
  { id: "PAY-003", amount: 837.0, status: "processing", email: "Monserrat44@gmail.com", date: "2026-07-30" },
  { id: "PAY-004", amount: 874.0, status: "success", email: "Silas22@gmail.com", date: "2026-07-31" },
  { id: "PAY-005", amount: 721.0, status: "failed", email: "carmella@hotmail.com", date: "2026-08-01" },
  { id: "PAY-006", amount: 129.5, status: "pending", email: "alex.dev@example.com", date: "2026-08-01" },
  { id: "PAY-007", amount: 450.0, status: "success", email: "sarah_m@outlook.com", date: "2026-08-02" },
];

export function DataTableDemo() {
  const columns: ColumnDef<Payment>[] = [
    {
      id: "id",
      header: "Invoice",
      cell: ({ row }) => <span className="font-mono font-medium">{row.id}</span>,
      sortable: true,
      accessorKey: "id",
    },
    {
      id: "status",
      header: "Status",
      cell: ({ row }) => {
        const variantMap = {
          success: "success",
          processing: "secondary",
          pending: "warning",
          failed: "outline",
        } as const;
        return (
          <Badge variant={variantMap[row.status] || "default"} className="capitalize">
            {row.status}
          </Badge>
        );
      },
      sortable: true,
      accessorKey: "status",
    },
    {
      id: "email",
      header: "Customer Email",
      cell: ({ row }) => <span>{row.email}</span>,
      sortable: true,
      accessorKey: "email",
    },
    {
      id: "date",
      header: "Date",
      cell: ({ row }) => <span className="text-muted-foreground">{row.date}</span>,
      sortable: true,
      accessorKey: "date",
    },
    {
      id: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(row.amount);
        return <div className="text-right font-mono font-medium">{formatted}</div>;
      },
      sortable: true,
      accessorKey: "amount",
    },
  ];

  return (
    <div className="w-full">
      <DataTable
        data={sampleData}
        columns={columns}
        searchable
        searchPlaceholder="Filter by email or status..."
        enableSelection
        pageSize={4}
      />
    </div>
  );
}
