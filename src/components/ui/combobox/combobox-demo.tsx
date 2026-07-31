"use client";

import {
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from "./combobox";

interface Fruit {
  label: string;
  value: string;
}

const fruits: Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Strawberry", value: "strawberry" },
];

export function ComboboxDemo({
  placeholder = "Select a fruit...",
  size = "md",
}: {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className="w-64">
      <ComboboxRoot items={fruits} size={size}>
        <ComboboxInputGroup>
          <ComboboxInput placeholder={placeholder} />
          <ComboboxClear />
          <ComboboxTrigger />
        </ComboboxInputGroup>
        <ComboboxPortal>
          <ComboboxPositioner sideOffset={4}>
            <ComboboxPopup>
              <ComboboxEmpty>No fruits found.</ComboboxEmpty>
              <ComboboxList>
                {(fruit: Fruit) => (
                  <ComboboxItem key={fruit.value} value={fruit}>
                    <ComboboxItemIndicator />
                    <span>{fruit.label}</span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    </div>
  );
}
