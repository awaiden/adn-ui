import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from ".";

function renderTable() {
  return render(
    <Table.Root>
      <Table.Caption>A list of invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>INV001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>INV002</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>$150.00</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>Total</Table.Cell>
          <Table.Cell>$400.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>,
  );
}

describe("Table", () => {
  describe("rendering", () => {
    test("renders the table", () => {
      const { container } = renderTable();

      const table = container.querySelector('[data-slot="table-root"]');
      expect(table as HTMLElement).toBeInTheDocument();
    });

    test("applies data-slot attributes to all parts", () => {
      const { container } = renderTable();

      for (const slot of [
        "table-root",
        "table-header",
        "table-body",
        "table-footer",
        "table-row",
        "table-head",
        "table-cell",
        "table-caption",
      ]) {
        const el = container.querySelector(`[data-slot="${slot}"]`);
        expect(el as HTMLElement).toBeInTheDocument();
      }
    });

    test("applies base CSS classes", () => {
      const { container } = renderTable();

      const table = container.querySelector('[data-slot="table-root"]');
      expect(table as HTMLElement).toHaveClass("table");

      const header = container.querySelector('[data-slot="table-header"]');
      expect(header as HTMLElement).toHaveClass("table__header");

      const body = container.querySelector('[data-slot="table-body"]');
      expect(body as HTMLElement).toHaveClass("table__body");

      const footer = container.querySelector('[data-slot="table-footer"]');
      expect(footer as HTMLElement).toHaveClass("table__footer");

      const row = container.querySelector('[data-slot="table-row"]');
      expect(row as HTMLElement).toHaveClass("table__row");

      const head = container.querySelector('[data-slot="table-head"]');
      expect(head as HTMLElement).toHaveClass("table__head");

      const cell = container.querySelector('[data-slot="table-cell"]');
      expect(cell as HTMLElement).toHaveClass("table__cell");

      const caption = container.querySelector('[data-slot="table-caption"]');
      expect(caption as HTMLElement).toHaveClass("table__caption");
    });

    test("renders table content", () => {
      const { container } = renderTable();

      expect(screen.getByText("A list of invoices.")).toBeInTheDocument();

      const invoiceHead = container.querySelector('[data-slot="table-head"]');
      expect(invoiceHead as HTMLElement).toBeInTheDocument();

      expect(screen.getByText("INV001")).toBeInTheDocument();
      expect(screen.getByText("$400.00")).toBeInTheDocument();
    });
  });

  describe("props forwarding", () => {
    test("applies custom className to root", () => {
      const { container } = render(
        <Table.Root className="custom-table">
          <Table.Body>
            <Table.Row>
              <Table.Cell>Data</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>,
      );

      const table = container.querySelector('[data-slot="table-root"]');
      expect(table as HTMLElement).toHaveClass("table");
      expect(table as HTMLElement).toHaveClass("custom-table");
    });

    test("applies custom className to row", () => {
      const { container } = render(
        <Table.Root>
          <Table.Body>
            <Table.Row className="highlight">
              <Table.Cell>Data</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>,
      );

      const row = container.querySelector('[data-slot="table-row"]');
      expect(row as HTMLElement).toHaveClass("table__row");
      expect(row as HTMLElement).toHaveClass("highlight");
    });

    test("applies custom className to cell", () => {
      const { container } = render(
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="wide">Data</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>,
      );

      const cell = container.querySelector('[data-slot="table-cell"]');
      expect(cell as HTMLElement).toHaveClass("table__cell");
      expect(cell as HTMLElement).toHaveClass("wide");
    });

    test("forwards colSpan to cell", () => {
      const { container } = render(
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={3}>Spanning</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>,
      );

      const cell = container.querySelector('[data-slot="table-cell"]');
      expect(cell as HTMLElement).toHaveAttribute("colspan", "3");
    });
  });

  describe("compound export", () => {
    test("named exports are available", () => {
      expect(TableRoot).toBeDefined();
      expect(TableHeader).toBeDefined();
      expect(TableBody).toBeDefined();
      expect(TableFooter).toBeDefined();
      expect(TableRow).toBeDefined();
      expect(TableHead).toBeDefined();
      expect(TableCell).toBeDefined();
      expect(TableCaption).toBeDefined();
    });

    test("Table compound object has all parts", () => {
      expect(Table.Root).toBe(TableRoot);
      expect(Table.Header).toBe(TableHeader);
      expect(Table.Body).toBe(TableBody);
      expect(Table.Footer).toBe(TableFooter);
      expect(Table.Row).toBe(TableRow);
      expect(Table.Head).toBe(TableHead);
      expect(Table.Cell).toBe(TableCell);
      expect(Table.Caption).toBe(TableCaption);
    });
  });
});
