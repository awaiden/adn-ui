"use client";

import { Combobox, Label } from "@adn-ui/react";

const fruits: string[] = [
  "Apple",
  "Apricot",
  "Banana",
  "Blueberry",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
];

export default function Default() {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <Combobox.Root items={fruits}>
        <Label className="flex-col items-start gap-2">
          Select a fruit
          <Combobox.Input placeholder="e.g Apple" />
        </Label>

        <Combobox.Portal>
          <Combobox.Positioner sideOffset={4}>
            <Combobox.Popup>
              <Combobox.Empty>Nothing found</Combobox.Empty>
              <Combobox.List>
                {(fruit: string) => (
                  <Combobox.Item key={fruit} value={fruit}>
                    <Combobox.ItemIndicator />
                    {fruit}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  );
}
