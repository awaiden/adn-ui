"use client";

import { Select } from "@adn-ui/react";

export default function Default() {
  return (
    <Select>
      <Select.Trigger className="w-45">
        <Select.Value>Select a fruit</Select.Value>
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner align="start" side="bottom">
          <Select.Popup>
            <Select.List>
              <Select.Group>
                <Select.GroupLabel>Fruits</Select.GroupLabel>
                <Select.Item value="apple">
                  <Select.ItemText>Apple</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="banana">
                  <Select.ItemText>Banana</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="blueberry">
                  <Select.ItemText>Blueberry</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="grapes">
                  <Select.ItemText>Grapes</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="pineapple">
                  <Select.ItemText>Pineapple</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select>
  );
}
