<script lang="ts">
import { Avatar } from "./index";

let { src = "", alt = "", fallback = "", size = "md", ...rest } = $props();
</script>

<Avatar.Root {size} data-testid="avatar" {...rest}>
	<Avatar.Image {src} {alt} />
	<Avatar.Fallback>{fallback}</Avatar.Fallback>
</Avatar.Root>
