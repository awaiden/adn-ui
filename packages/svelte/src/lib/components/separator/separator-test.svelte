<script lang="ts">
import { Separator } from "./index.js";

let {
	orientation = "horizontal",
}: { orientation?: "horizontal" | "vertical" } = $props();
</script>

<div class="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator {orientation} data-testid="separator" />
  <div>Docs</div>
  <Separator {orientation} />
  <div>Source</div>
</div>
