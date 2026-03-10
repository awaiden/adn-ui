"use client";

import { Skeleton } from "@adn-ui/react";

const Default = () => <Skeleton className="h-4 w-[250px]" />;

const Circular = () => <Skeleton variant="circular" className="size-12" />;

const Card = () => (
	<div className="flex items-center space-x-4">
		<Skeleton variant="circular" className="size-12" />
		<div className="space-y-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	</div>
);

const Form = () => (
	<div className="space-y-4 w-[350px]">
		<div className="space-y-2">
			<Skeleton className="h-4 w-[80px]" />
			<Skeleton className="h-10 w-full" />
		</div>
		<div className="space-y-2">
			<Skeleton className="h-4 w-[120px]" />
			<Skeleton className="h-10 w-full" />
		</div>
		<Skeleton className="h-10 w-[100px]" />
	</div>
);

export const SkeletonExample = {
	Default,
	Circular,
	Card,
	Form,
};
