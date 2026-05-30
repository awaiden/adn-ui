import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { AlertDialog } from ".";

afterEach(cleanup);

describe("AlertDialog", () => {
  it("opens when trigger is clicked", async () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button>Delete</button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument();
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
  });

  it("closes when cancel is clicked", async () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button>Delete</button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm</AlertDialog.Title>
          <AlertDialog.Description>Sure?</AlertDialog.Description>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>OK</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    });
  });
});
