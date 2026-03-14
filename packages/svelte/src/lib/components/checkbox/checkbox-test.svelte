<script lang="ts">
import { Checkbox } from "./index.js";

let { checked = $bindable(false), ...rest } = $props();
</script>

<Checkbox bind:checked data-testid="checkbox" {...rest} />
