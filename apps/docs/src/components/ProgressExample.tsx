"use client";

import { Progress } from "@adn-ui/react";

const Default = () => (
  <Progress.Root value={60} className="w-64">
    <Progress.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
  </Progress.Root>
);

const Sizes = () => (
  <div className="flex w-64 flex-col gap-4">
    <div className="flex flex-col gap-1">
      <span className="text-sm">Small</span>
      <Progress.Root size="sm" value={33}>
        <Progress.Indicator style={{ transform: `translateX(-${100 - 33}%)` }} />
      </Progress.Root>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-sm">Medium</span>
      <Progress.Root size="md" value={66}>
        <Progress.Indicator style={{ transform: `translateX(-${100 - 66}%)` }} />
      </Progress.Root>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-sm">Large</span>
      <Progress.Root size="lg" value={100}>
        <Progress.Indicator style={{ transform: "translateX(0%)" }} />
      </Progress.Root>
    </div>
  </div>
);

const Complete = () => (
  <Progress.Root value={100} className="w-64">
    <Progress.Indicator style={{ transform: "translateX(0%)" }} />
  </Progress.Root>
);

const Indeterminate = () => (
  <Progress.Root value={null} className="w-64">
    <Progress.Indicator />
  </Progress.Root>
);

export const ProgressExample = {
  Complete,
  Default,
  Indeterminate,
  Sizes,
};
