"use client";

import { Link, PreviewCard } from "@adn-ui/react";

export default function Default() {
  return (
    <PreviewCard.Root>
      <PreviewCard.Trigger>
        <Link className="font-semibold" href="#" variant="no-underline">
          @adn-ui
        </Link>
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8}>
          <PreviewCard.Popup>
            <PreviewCard.Arrow />
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <h4 className="text-sm font-semibold">@adn-ui</h4>
                <p className="text-muted-foreground text-sm">
                  Base UI is a library of unstyled, accessible components for building high-quality
                  design systems and web apps.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-muted-foreground text-xs">Joined January 2024</span>
                </div>
              </div>
            </div>
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
}
