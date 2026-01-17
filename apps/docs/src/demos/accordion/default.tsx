"use client";

import { Accordion } from "@adn-ui/react";

const items = [
  {
    content: "Content for section 1. Lorem ipsum dolor sit amet, consecteturadipiscing elit.",
    id: "item-1",
    trigger: "Section 1",
  },
  {
    content:
      "Content for section 2. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    id: "item-2",
    trigger: "Section 2",
  },
  {
    content:
      "Content for section 3. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
    id: "item-3",
    trigger: "Section 3",
  },
];

export default function Default() {
  return (
    <Accordion.Root>
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Header>
            <Accordion.Trigger>
              {item.trigger}
              <Accordion.TriggerIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
