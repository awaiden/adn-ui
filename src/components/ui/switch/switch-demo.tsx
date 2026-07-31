"use client";

import { SwitchRoot, SwitchThumb } from "./switch";

export function SwitchDemo() {
  return (
    <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
      <SwitchRoot defaultChecked>
        <SwitchThumb />
      </SwitchRoot>
      Enable Notifications
    </label>
  );
}
