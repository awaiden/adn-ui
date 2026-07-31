"use client";

import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from "./accordion";

export function AccordionDemo({
  multiple = false,
  variant = "default",
}: {
  multiple?: boolean;
  variant?: "default" | "outline" | "ghost";
}) {
// @ts-nocheck
  return (
    <AccordionRoot multiple={multiple} variant={variant}>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>What is Base UI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Base UI is a library of high-quality unstyled React components for design systems and web
          apps.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>How do I get started?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Head to the Quick Start guide in the docs. If you have used unstyled libraries before, you
          will feel right at home.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Of course! Base UI and adn-ui are free and open source.</AccordionPanel>
      </AccordionItem>
    </AccordionRoot>
  );
}
