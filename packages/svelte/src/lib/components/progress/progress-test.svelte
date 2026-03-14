<script lang="ts">
import { Progress } from "./index";

let { value = 0, max = 100, size = "md", ...rest } = $props();
</script>

<Progress.Root {value} {max} {size} data-testid="progress" {...rest}>
	<Progress.Indicator data-testid="indicator" />
</Progress.Root>
