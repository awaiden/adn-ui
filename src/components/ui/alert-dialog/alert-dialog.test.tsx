import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  AlertDialogActions,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./index";

describe("AlertDialog component", () => {
  it("renders trigger and content elements", () => {
    render(
      <AlertDialogRoot defaultOpen={true}>
        <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogPopup>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>Cancel</AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialogRoot>
    );

    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(screen.getByText("This action cannot be undone.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });
});
