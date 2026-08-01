"use client";

import React from "react";
import { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "../button";

export default {
  title: "Components/Card",
  component: CardRoot,
};

export const Default = () => (
  <CardRoot variant="default" className="max-w-md">
    <CardHeader>
      <CardTitle>Account Security</CardTitle>
      <CardDescription>Manage your password and security preferences.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">Two-factor authentication is currently enabled on your account.</p>
    </CardContent>
    <CardFooter>
      <Button size="sm" variant="primary">
        Update Settings
      </Button>
    </CardFooter>
  </CardRoot>
);

export const Outline = () => (
  <CardRoot variant="outline" className="max-w-md">
    <CardHeader>
      <CardTitle>Outline Card</CardTitle>
      <CardDescription>Card variant without shadow.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">Card content goes here.</p>
    </CardContent>
  </CardRoot>
);
