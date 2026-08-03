"use client";

import { InputRoot } from "../input";
import { Label } from "./index";

export function LabelDemo() {
  return (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="demo-input">Email Address</Label>
      <InputRoot id="demo-input" placeholder="you@example.com" />
    </div>
  );
}
