"use client";

import React from "react";

import { TableRoot, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./table";

export default {
  title: "Components/Table",
  component: TableRoot,
};

export const Default = () => (
  <TableRoot className="w-full max-w-md rounded-md border">
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </TableRoot>
);
