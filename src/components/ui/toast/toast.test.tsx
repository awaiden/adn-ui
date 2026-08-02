import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { Toast, useToastManager } from "./index";

function TestToastTrigger() {
  const toastManager = useToastManager();
  return (
    <button
      onClick={() =>
        toastManager.add({
          title: "Saved Successfully",
          description: "Your settings have been saved.",
        })
      }
    >
      Show Toast
    </button>
  );
}

describe("Toast component", () => {
  it("shows toast notification via useToastManager hook", async () => {
    render(
      <Toast.Provider>
        <TestToastTrigger />
      </Toast.Provider>
    );

    const button = screen.getByRole("button", { name: /show toast/i });
    fireEvent.click(button);

    expect(await screen.findByText("Saved Successfully")).toBeInTheDocument();
    expect(screen.getByText("Your settings have been saved.")).toBeInTheDocument();
  });
});
