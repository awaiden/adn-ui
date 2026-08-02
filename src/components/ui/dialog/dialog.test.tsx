import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./index";

describe("Dialog component", () => {
  it("renders modal content when open", () => {
    render(
      <DialogRoot defaultOpen={true}>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogPortal>
          <DialogPopup>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes to your profile here.</DialogDescription>
            <DialogClose>Save</DialogClose>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    );

    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    expect(screen.getByText("Make changes to your profile here.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
});
