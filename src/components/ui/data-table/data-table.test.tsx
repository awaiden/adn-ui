import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { TableBody, TableCell, TableHeader, TableRow, TableRoot } from "../table";

describe("DataTable component", () => {
  it("renders tabular structure correctly", () => {
    render(
      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
          </TableRow>
        </TableBody>
      </TableRoot>
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
