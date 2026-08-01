"use client";

import React from "react";

import { TextareaRoot } from "./textarea";

export default {
  title: "Components/Textarea",
  component: TextareaRoot,
};

export const Default = () => (
  <TextareaRoot className="w-full max-w-sm" placeholder="Type your message here..." rows={4} />
);
