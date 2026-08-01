"use client";

import { SwitchRoot, SwitchThumb } from "./switch";

export function SwitchDemo() {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-medium">
      <SwitchRoot defaultChecked>
        <SwitchThumb />
      </SwitchRoot>
      Enable Notifications
    </label>
  );
}
