"use client";

import { Card } from "@adn-ui/react";

export default function Default() {
  return (
    <div>
      <Card className="w-full max-w-md">
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos doloremque ex
            cumque aspernatur provident nemo, sint eius eveniet animi, velit inventore, repudiandae
            doloribus ut perspiciatis suscipit. Veritatis, ducimus numquam.
          </p>
        </Card.Content>
      </Card>
    </div>
  );
}
