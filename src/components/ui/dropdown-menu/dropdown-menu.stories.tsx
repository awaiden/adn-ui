"use client";

import React from "react";

import { Button } from "../button";
import { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuPositioner, DropdownMenuPopup, DropdownMenuItem } from "./dropdown-menu";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenuRoot,
};

export const Default = () => (
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <Button variant="outline">Options ▼</Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuPositioner>
        <DropdownMenuPopup>
          <DropdownMenuItem>Account settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem>License</DropdownMenuItem>
        </DropdownMenuPopup>
      </DropdownMenuPositioner>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
);
