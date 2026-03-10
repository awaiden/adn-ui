"use client";

import { Tabs } from "@adn-ui/react";

const Underline = () => (
	<Tabs.Root defaultValue="account" className="w-[400px]">
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
			<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account" className="p-4 border rounded-b-md">
			<p className="text-sm">Make changes to your account here.</p>
		</Tabs.Content>
		<Tabs.Content value="password" className="p-4 border rounded-b-md">
			<p className="text-sm">Change your password here.</p>
		</Tabs.Content>
		<Tabs.Content value="settings" className="p-4 border rounded-b-md">
			<p className="text-sm">Update your preferences.</p>
		</Tabs.Content>
	</Tabs.Root>
);

const Outline = () => (
	<Tabs.Root defaultValue="overview" variant="outline" className="w-[400px]">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
			<Tabs.Trigger value="reports">Reports</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="overview" className="mt-4">
			<div className="h-[100px] flex items-center justify-center border-2 border-dashed rounded-md">
				Overview Dashboard
			</div>
		</Tabs.Content>
		<Tabs.Content value="analytics" className="mt-4">
			<div className="h-[100px] flex items-center justify-center border-2 border-dashed rounded-md">
				Analytics Charts
			</div>
		</Tabs.Content>
		<Tabs.Content value="reports" className="mt-4">
			<div className="h-[100px] flex items-center justify-center border-2 border-dashed rounded-md">
				Generated Reports
			</div>
		</Tabs.Content>
	</Tabs.Root>
);

export const TabsExample = {
	Underline,
	Outline,
};
