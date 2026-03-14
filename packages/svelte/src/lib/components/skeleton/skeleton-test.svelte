<script lang="ts">
import { Skeleton } from "./index";

let { ...rest } = $props();
</script>

<Skeleton data-testid="skeleton" {...rest} />
