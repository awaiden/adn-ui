"use client";

import { ButtonGroup, ButtonGroupItem } from "./button-group";

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup variant="outline">
        <ButtonGroupItem>Years</ButtonGroupItem>
        <ButtonGroupItem>Months</ButtonGroupItem>
        <ButtonGroupItem>Days</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup variant="secondary" size="sm">
        <ButtonGroupItem>Left</ButtonGroupItem>
        <ButtonGroupItem>Center</ButtonGroupItem>
        <ButtonGroupItem>Right</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
}
