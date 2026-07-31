"use client";

import { useEffect, useState } from "react";

import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from "./progress";

export function ProgressDemo({
  initialValue = 45,
  label = "Exporting Data",
}: {
  initialValue?: number;
  label?: string;
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <ProgressRoot value={value}>
      <ProgressLabel>{label}</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
}
