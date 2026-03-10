"use client";

import { Card } from "@adn-ui/react";

const Default = () => (
	<Card.Root className="w-87.5">
		<Card.Header>
			<Card.Title>Project Alpha</Card.Title>
			<Card.Description>Deploy your new project in seconds.</Card.Description>
		</Card.Header>
		<Card.Content>
			<p className="text-sm text-neutral-600">
				This is a simple card component that you can use to display content in a
				structured way.
			</p>
		</Card.Content>
	</Card.Root>
);

export const CardExample = {
	Default,
};
