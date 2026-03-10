"use client";

import type React from "react";

export function ComponentPreview({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center justify-center p-6 border rounded-lg bg-neutral-50/50 min-h-50">
			{children}
		</div>
	);
}
