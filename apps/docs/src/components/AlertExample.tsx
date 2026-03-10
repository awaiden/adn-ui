"use client";

import { Alert } from "@adn-ui/react";
import { AlertCircle, Info, Terminal } from "lucide-react";

const Default = () => (
	<Alert.Root>
		<Terminal className="size-4" />
		<Alert.Title>Heads up!</Alert.Title>
		<Alert.Description>
			You can add components to your app using the CLI.
		</Alert.Description>
	</Alert.Root>
);

const Destructive = () => (
	<Alert.Root variant="destructive">
		<AlertCircle className="size-4" />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>
			Your session has expired. Please log in again.
		</Alert.Description>
	</Alert.Root>
);

const WithIcon = () => (
	<Alert.Root>
		<Info className="size-4" />
		<Alert.Title>Information</Alert.Title>
		<Alert.Description>
			This is an informational alert with an icon.
		</Alert.Description>
	</Alert.Root>
);

export const AlertExample = {
	Default,
	Destructive,
	WithIcon,
};
