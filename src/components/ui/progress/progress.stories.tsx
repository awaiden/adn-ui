"use client";

import React from "react";
import { ProgressRoot, ProgressTrack, ProgressIndicator } from "./progress";

export default {
  title: "Components/Progress",
  component: ProgressRoot,
};

export const Default = () => (
  <div className="w-full max-w-xs">
    <ProgressRoot value={65}>
      <ProgressTrack className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <ProgressIndicator
          className="h-full bg-primary transition-all duration-300"
          style={{ width: "65%" }}
        />
      </ProgressTrack>
    </ProgressRoot>
  </div>
);
