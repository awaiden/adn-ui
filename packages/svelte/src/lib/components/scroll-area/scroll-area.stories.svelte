<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { ScrollArea, ScrollAreaRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/ScrollArea",
	tags: ["autodocs"],
	component: ScrollAreaRoot,
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["hover", "scroll", "auto", "always"],
		},
	},
});
</script>

<Story name="Default" args={{ class: "h-72 w-48 rounded-md border" }}>
	{#snippet children()}
		<ScrollArea.Viewport class="h-full w-full p-4">
			<h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
			<div class="flex flex-col gap-2">
				{#each Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`) as tag}
					<div class="text-sm">
						{tag}
					</div>
					<div class="h-px w-full bg-border"></div>
				{/each}
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar
			orientation="vertical"
			class="flex touch-none select-none bg-black/5 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-black/10 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
		>
			<ScrollArea.Thumb
				class="relative flex-1 rounded-[10px] bg-border before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
			/>
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner />
	{/snippet}
</Story>

<Story name="Horizontal" args={{ class: "h-48 w-72 rounded-md border" }}>
	{#snippet children()}
		<ScrollArea.Viewport class="h-full w-full p-4">
			<div class="flex w-[600px] flex-col gap-4">
				<h4 class="mb-4 text-sm font-medium leading-none">
					Horizontal Scrolling
				</h4>
				<p class="text-sm text-muted-foreground">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar
			orientation="horizontal"
			class="flex touch-none select-none bg-black/5 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-black/10 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
		>
			<ScrollArea.Thumb
				class="relative flex-1 rounded-[10px] bg-border before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
			/>
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner />
	{/snippet}
</Story>
