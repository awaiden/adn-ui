import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./index";

describe("Drawer component", () => {
  it("renders drawer panel elements when open", () => {
    render(
      <DrawerRoot defaultOpen={true}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerPortal>
          <DrawerPopup>
            <DrawerContent>
              <DrawerTitle>Navigation Drawer</DrawerTitle>
              <DrawerDescription>Drawer subtitle text</DrawerDescription>
            </DrawerContent>
          </DrawerPopup>
        </DrawerPortal>
      </DrawerRoot>
    );

    expect(screen.getByText("Navigation Drawer")).toBeInTheDocument();
    expect(screen.getByText("Drawer subtitle text")).toBeInTheDocument();
  });
});
