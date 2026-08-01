"use client";

import React from "react";

import {
  AutocompleteRoot,
  AutocompleteInput,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
} from "./autocomplete";

export default {
  title: "Components/Autocomplete",
  component: AutocompleteRoot,
};

export const Default = () => (
  <AutocompleteRoot className="w-full max-w-xs">
    <AutocompleteInput placeholder="Search framework..." />
    <AutocompletePortal>
      <AutocompletePositioner>
        <AutocompletePopup>
          <AutocompleteList>
            <AutocompleteItem value="next">Next.js</AutocompleteItem>
            <AutocompleteItem value="astro">Astro</AutocompleteItem>
            <AutocompleteItem value="react">React</AutocompleteItem>
          </AutocompleteList>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
        </AutocompletePopup>
      </AutocompletePositioner>
    </AutocompletePortal>
  </AutocompleteRoot>
);

export const Sizes = () => (
  <div className="flex max-w-xs flex-col gap-4">
    <AutocompleteRoot size="sm">
      <AutocompleteInput placeholder="Small search..." />
    </AutocompleteRoot>
    <AutocompleteRoot size="md">
      <AutocompleteInput placeholder="Medium search..." />
    </AutocompleteRoot>
    <AutocompleteRoot size="lg">
      <AutocompleteInput placeholder="Large search..." />
    </AutocompleteRoot>
  </div>
);
