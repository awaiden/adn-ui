<script lang="ts">
import { Label } from "./index";

let { children, ...rest } = $props();
</script>

<Label data-testid="label" {...rest}>
	{@render children?.()}
</Label>
