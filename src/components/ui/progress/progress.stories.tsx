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
      <ProgressTrack className="bg-muted h-2 w-full overflow-hidden rounded-full">
        <ProgressIndicator
          className="bg-primary h-full transition-all duration-300"
          style={{ width: "65%" }}
        />
      </ProgressTrack>
    </ProgressRoot>
  </div>
);
