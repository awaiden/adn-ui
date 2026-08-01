"use client";

import React from "react";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerPortal,
  DrawerBackdrop,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerViewport,
  DrawerContent,
} from "./drawer";
import { Button } from "../button";

export default {
  title: "Components/Drawer",
  component: DrawerRoot,
};

export const SideBottom = () => (
  <DrawerRoot side="bottom">
    <DrawerTrigger>
      <Button variant="outline">Open Bottom Drawer</Button>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerContent className="p-4">
            <DrawerTitle>Bottom Drawer</DrawerTitle>
            <DrawerDescription>Slides up from bottom edge.</DrawerDescription>
            <DrawerClose className="mt-4">
              <Button size="sm" variant="secondary">
                Close
              </Button>
            </DrawerClose>
          </DrawerContent>
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  </DrawerRoot>
);

export const SideRight = () => (
  <DrawerRoot side="right">
    <DrawerTrigger>
      <Button variant="outline">Open Right Drawer</Button>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerContent className="p-4">
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerDescription>Slides in from right edge.</DrawerDescription>
            <DrawerClose className="mt-4">
              <Button size="sm" variant="secondary">
                Close
              </Button>
            </DrawerClose>
          </DrawerContent>
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  </DrawerRoot>
);

export const SideLeft = () => (
  <DrawerRoot side="left">
    <DrawerTrigger>
      <Button variant="outline">Open Left Drawer</Button>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerContent className="p-4">
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>Slides in from left edge.</DrawerDescription>
            <DrawerClose className="mt-4">
              <Button size="sm" variant="secondary">
                Close
              </Button>
            </DrawerClose>
          </DrawerContent>
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  </DrawerRoot>
);

export const SideTop = () => (
  <DrawerRoot side="top">
    <DrawerTrigger>
      <Button variant="outline">Open Top Drawer</Button>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerContent className="p-4">
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>Slides down from top edge.</DrawerDescription>
            <DrawerClose className="mt-4">
              <Button size="sm" variant="secondary">
                Close
              </Button>
            </DrawerClose>
          </DrawerContent>
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  </DrawerRoot>
);

export const Default = SideBottom;
