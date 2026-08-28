"use client";

import { Calculator, Calendar, CreditCard, Search, Settings, User, Smile } from "lucide-react";
import React, { useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandRoot,
  CommandSeparator,
  CommandShortcut,
} from "./index";

export function CommandDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm border rounded-lg border-border bg-background text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors shadow-xs"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Search commands...
        </span>
        <kbd className="px-1.5 py-0.5 text-xs font-mono rounded bg-muted border border-border">⌘K</kbd>
      </button>

      {/* Embedded Command Palette */}
      <div className="w-full">
        <CommandRoot className="rounded-xl border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
                <CommandShortcut>⌘E</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandRoot>
      </div>

      {/* Modal Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setOpen(false)}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => setOpen(false)}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
