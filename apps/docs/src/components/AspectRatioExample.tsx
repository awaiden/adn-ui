"use client";

import { AspectRatio } from "@adn-ui/react";

const Default = () => (
  <div className="w-[300px] overflow-hidden rounded-md border">
    <AspectRatio ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  </div>
);

const Square = () => (
  <div className="w-[200px] overflow-hidden rounded-md border">
    <AspectRatio ratio={1}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  </div>
);

export const AspectRatioExample = {
  Default,
  Square,
};
