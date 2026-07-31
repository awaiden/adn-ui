"use client";

import { InputRoot } from "./input";

export function InputDemo({
  placeholder = "e.g. Alex Smith",
  size = "md",
}: {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className="w-64">
      <InputRoot placeholder={placeholder} size={size} />
    </div>
  );
}
