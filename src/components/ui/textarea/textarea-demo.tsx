"use client";

import { TextareaRoot } from "./textarea";

export function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <TextareaRoot placeholder="Type your message here..." />
    </div>
  );
}
