"use client";

import React from "react";
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./dialog";
import { Button } from "../button";

export default {
  title: "Components/Dialog",
  component: DialogRoot,
};

export const Default = () => (
  <DialogRoot>
    <DialogTrigger>
      <Button variant="outline">Open Modal</Button>
    </DialogTrigger>
    <DialogPortal>
      <DialogBackdrop />
      <DialogPopup>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>Make changes to your profile here.</DialogDescription>
        <div className="py-4 text-sm">Profile form controls go here...</div>
        <DialogClose>
          <Button variant="primary" size="sm">
            Save Changes
          </Button>
        </DialogClose>
      </DialogPopup>
    </DialogPortal>
  </DialogRoot>
);
