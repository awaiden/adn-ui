<script lang="ts">
import { ScrollArea } from "./index.js";

let { type = "always" }: { type?: "hover" | "scroll" | "auto" | "always" } =
	$props();
</script>

<ScrollArea.Root {type} class="h-48 w-48 border" data-testid="scroll-area">
	<ScrollArea.Viewport class="h-full w-full" data-testid="viewport">
		<div class="h-96 w-96 bg-linear-to-br from-red-500 to-blue-500"></div>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="w-2.5"
		data-testid="scrollbar-y"
	>
		<ScrollArea.Thumb class="bg-gray-500" data-testid="thumb-y" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Scrollbar
		orientation="horizontal"
		class="h-2.5"
		data-testid="scrollbar-x"
	>
		<ScrollArea.Thumb class="bg-gray-500" data-testid="thumb-x" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner data-testid="corner" />
</ScrollArea.Root>
