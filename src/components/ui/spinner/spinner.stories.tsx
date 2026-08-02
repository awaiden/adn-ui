"use client";

import React from "react";

import { Spinner } from "./spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

export const Default = () => (
  <div className="flex items-center gap-4">
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </div>
);
