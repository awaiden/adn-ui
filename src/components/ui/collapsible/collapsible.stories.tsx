"use client";

import React from "react";
import { CollapsibleRoot, CollapsibleTrigger, CollapsiblePanel } from "./collapsible";
import { Button } from "../button";

export default {
  title: "Components/Collapsible",
  component: CollapsibleRoot,
};

export const Default = () => (
  <CollapsibleRoot className="w-full max-w-sm space-y-2">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold">Starred Repositories</h4>
      <CollapsibleTrigger>
        <Button variant="ghost" size="sm">Toggle</Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-3 text-sm">adn-ui</div>
    <CollapsiblePanel className="space-y-2">
      <div className="rounded-md border px-4 py-3 text-sm">base-ui</div>
      <div className="rounded-md border px-4 py-3 text-sm">fumadocs</div>
    </CollapsiblePanel>
  </CollapsibleRoot>
);
