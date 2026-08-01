"use client";

import React from "react";

import { Toggle } from "./toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default = () => (
  <div className="flex gap-2">
    <Toggle aria-label="Toggle bold">B</Toggle>
    <Toggle aria-label="Toggle italic">I</Toggle>
  </div>
);
