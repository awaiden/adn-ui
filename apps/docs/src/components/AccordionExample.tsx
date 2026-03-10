"use client";

import { Accordion } from "@adn-ui/react";

const Single = () => (
	<Accordion.Root type="single" collapsible className="w-full">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
			<Accordion.Content>
				Yes. It adheres to the WAI-ARIA design pattern.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Is it styled?</Accordion.Trigger>
			<Accordion.Content>
				Yes. It comes with default styles that match the other components'
				aesthetic.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

const Multiple = () => (
	<Accordion.Root type="multiple" className="w-full">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Section 1</Accordion.Trigger>
			<Accordion.Content>You can open this section...</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Section 2</Accordion.Trigger>
			<Accordion.Content>...and this one at the same time.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

export const AccordionExample = {
	Single,
	Multiple,
};
