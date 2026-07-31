"use client";

// @ts-nocheck
import {
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
} from "./autocomplete";

interface Tag {
  id: string;
  value: string;
}

const defaultTags: Tag[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert-dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-button", value: "component: button" },
  { id: "c-card", value: "component: card" },
];

export function AutocompleteDemo({
  placeholder = "Search tags...",
  size = "md",
  variant = "default",
}: {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
}) {
  return (
    <div className="w-72">
      <AutocompleteRoot items={defaultTags} size={size} variant={variant}>
        <AutocompleteInput placeholder={placeholder} />
        <AutocompletePortal>
          <AutocompletePositioner sideOffset={4}>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </div>
  );
}
