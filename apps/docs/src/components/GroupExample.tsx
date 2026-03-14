"use client";

import { Group, Input } from "@adn-ui/react";

const WithPrefix = () => (
	<Group.Root className="w-full max-w-sm">
		<Group.Prefix>
			<span className="pl-3 text-muted-foreground">@</span>
		</Group.Prefix>
		<Input className="pl-8" placeholder="username" />
	</Group.Root>
);

const WithSuffix = () => (
	<Group.Root className="w-full max-w-sm">
		<Input className="pr-12" placeholder="Search..." />
		<Group.Suffix>
			<span className="pr-3 text-muted-foreground">⌘K</span>
		</Group.Suffix>
	</Group.Root>
);

const WithPrefixAndSuffix = () => (
	<Group.Root className="w-full max-w-sm">
		<Group.Prefix>
			<span className="pl-3 text-muted-foreground">$</span>
		</Group.Prefix>
		<Input className="px-8" placeholder="0.00" type="number" />
		<Group.Suffix>
			<span className="pr-3 text-muted-foreground">USD</span>
		</Group.Suffix>
	</Group.Root>
);

export const GroupExample = {
	WithPrefix,
	WithPrefixAndSuffix,
	WithSuffix,
};
