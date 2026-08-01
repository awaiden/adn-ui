"use client";

import React from "react";
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from "./accordion";

export default {
  title: "Components/Accordion",
  component: AccordionRoot,
};

export const Default = () => (
  <AccordionRoot className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger>What is Base UI?</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        Base UI is a library of high-quality unstyled React components for design systems and web
        apps.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionHeader>
        <AccordionTrigger>How do I get started?</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        Head to the Quick Start guide in the docs. If you have used unstyled libraries before, you
        will feel right at home.
      </AccordionPanel>
    </AccordionItem>
  </AccordionRoot>
);

export const Outline = () => (
  <AccordionRoot variant="outline" className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger>Outline Variant</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>Custom bordered appearance with OKLCH design tokens.</AccordionPanel>
    </AccordionItem>
  </AccordionRoot>
);

export const Multiple = () => (
  <AccordionRoot multiple className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger>First Item</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>First panel content.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionHeader>
        <AccordionTrigger>Second Item</AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>Second panel content.</AccordionPanel>
    </AccordionItem>
  </AccordionRoot>
);
