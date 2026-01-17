"use client";

import { Autocomplete, Label } from "@adn-ui/react";

interface Fruit {
  id: string;
  value: string;
}
const fruits: Fruit[] = [
  { id: "apple", value: "Apple" },
  { id: "banana", value: "Banana" },
  { id: "cherry", value: "Cherry" },
  { id: "date", value: "Date" },
  { id: "elderberry", value: "Elderberry" },
  { id: "fig", value: "Fig" },
  { id: "grape", value: "Grape" },
  { id: "honeydew", value: "Honeydew" },
  { id: "kiwi", value: "Kiwi" },
  { id: "lemon", value: "Lemon" },
  { id: "mango", value: "Mango" },
  { id: "nectarine", value: "Nectarine" },
  { id: "orange", value: "Orange" },
  { id: "papaya", value: "Papaya" },
];

export default function Default() {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <Autocomplete items={fruits}>
        <Label className="flex-col items-start">
          Select a fruit
          <Autocomplete.Input placeholder="e.g Apple" />
        </Label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.Arrow />
              <Autocomplete.Empty>Nothing found</Autocomplete.Empty>
              <Autocomplete.List>
                {(fruit: Fruit) => (
                  <Autocomplete.Item key={fruit.id} value={fruit.value}>
                    {fruit.value}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete>
    </div>
  );
}
