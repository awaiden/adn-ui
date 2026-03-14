"use client";

import { Label, Textarea } from "@adn-ui/react";

const Default = () => <Textarea placeholder="Type your message here." className="max-w-sm" />;

const WithLabel = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="message">Your Message</Label>
    <Textarea id="message" placeholder="Type your message here." />
  </div>
);

const Sizes = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Textarea size="sm" placeholder="Small textarea" />
    <Textarea size="md" placeholder="Medium textarea" />
    <Textarea size="lg" placeholder="Large textarea" />
  </div>
);

export const TextareaExample = {
  Default,
  Sizes,
  WithLabel,
};
