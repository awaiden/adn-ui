import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Table } from ".";

afterEach(cleanup);

describe("Table", () => {
  it("renders table with all parts", () => {
    render(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>john@example.com</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
    expect(screen.getAllByRole("cell")).toHaveLength(2);
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("renders caption", () => {
    render(
      <Table.Root>
        <Table.Caption>A list of users</Table.Caption>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    );

    expect(screen.getByText("A list of users")).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Item</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>,
    );

    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});
