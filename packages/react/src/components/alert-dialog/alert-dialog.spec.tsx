import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { AlertDialog } from ".";

describe("AlertDialog", () => {
  test("renders trigger and opens content on click", () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Dialog Title</AlertDialog.Title>
          <AlertDialog.Description>Dialog Description</AlertDialog.Description>
          <AlertDialog.Action>Confirm</AlertDialog.Action>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>,
    );

    const trigger = screen.getByText("Open Dialog");
    expect(trigger).toBeInTheDocument();

    // Content should not be in the document initially
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();

    // Click trigger to open
    fireEvent.click(trigger);

    // Content should now be in the document
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog Description")).toBeInTheDocument();
  });

  test("closes when Cancel is clicked", () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Title</AlertDialog.Title>
          <AlertDialog.Description>Description</AlertDialog.Description>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));

    // In some environments, it might take a moment to animate out
    expect(screen.queryByText("Title")).not.toBeInTheDocument();
  });

  test("applies data-slot attributes", () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Title</AlertDialog.Title>
            <AlertDialog.Description>Description</AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Action</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>,
    );

    fireEvent.click(screen.getByText("Open"));

    const content = document.body.querySelector('[data-slot="alert-dialog-content"]');
    expect(content as HTMLElement).toBeInTheDocument();

    const title = document.body.querySelector('[data-slot="alert-dialog-title"]');
    expect(title as HTMLElement).toBeInTheDocument();

    const description = document.body.querySelector('[data-slot="alert-dialog-description"]');
    expect(description as HTMLElement).toBeInTheDocument();
  });
});
