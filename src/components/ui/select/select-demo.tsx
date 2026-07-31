"use client";

import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./select";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

export function SelectDemo() {
  return (
    <SelectRoot items={fruits} defaultValue="apple">
      <SelectLabel>Favorite Fruit</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={4}>
          <SelectPopup>
            <SelectList>
              {fruits.map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  <SelectItemText>{fruit.label}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
}
