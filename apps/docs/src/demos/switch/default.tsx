"use client";

import { Label, Switch } from "@adn-ui/react";

export default function Default() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode">
        <Switch.Thumb />
      </Switch>
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
