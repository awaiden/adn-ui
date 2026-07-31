"use client";

import React from "react";
import { SwitchRoot, SwitchThumb } from "./switch";

export default {
  title: "Components/Switch",
  component: SwitchRoot,
};

export const Default = () => (
  <div className="flex items-center gap-2">
    <SwitchRoot id="airplane-mode">
      <SwitchThumb />
    </SwitchRoot>
    <label htmlFor="airplane-mode" className="text-sm font-medium">Airplane Mode</label>
  </div>
);
