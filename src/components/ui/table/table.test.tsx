import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { TableBody, TableCell, TableHeader, TableRow, TableRoot } from "./index";

describe("Table component", () => {
  it("renders html table structure", () => {
    render(
      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableCell>Header Cell</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Data Cell</TableCell>
          </TableRow>
        </TableBody>
      </TableRoot>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Header Cell")).toBeInTheDocument();
    expect(screen.getByText("Data Cell")).toBeInTheDocument();
  });
});
