"use client";

import React from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuItem,
} from "./menu";
import { Button } from "../button";

export default {
  title: "Components/Menu",
  component: MenuRoot,
};

export const Default = () => (
  <MenuRoot>
    <MenuTrigger>
      <Button variant="outline">Options ▼</Button>
    </MenuTrigger>
    <MenuPortal>
      <MenuPositioner>
        <MenuPopup>
          <MenuItem>Account settings</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>License</MenuItem>
        </MenuPopup>
      </MenuPositioner>
    </MenuPortal>
  </MenuRoot>
);
