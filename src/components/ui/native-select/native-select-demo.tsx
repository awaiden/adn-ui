"use client";

import { NativeSelect } from "./index";

export function NativeSelectDemo() {
  return (
    <div className="w-64">
      <NativeSelect defaultValue="usd">
        <NativeSelect.Option value="usd">USD ($)</NativeSelect.Option>
        <NativeSelect.Option value="eur">EUR (€)</NativeSelect.Option>
        <NativeSelect.Option value="gbp">GBP (£)</NativeSelect.Option>
      </NativeSelect>
    </div>
  );
}
