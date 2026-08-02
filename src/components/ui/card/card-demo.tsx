"use client";

import { Button } from "@/components/ui/button";

import { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from "./card";

export function CardDemo() {
  return (
    <CardRoot className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Your team subscription has been renewed successfully for another month.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm">View Messages</Button>
      </CardFooter>
    </CardRoot>
  );
}
