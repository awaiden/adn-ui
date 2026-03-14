<script lang="ts">
import { Switch } from "./index.js";

let { checked = $bindable(false), ...rest } = $props();
</script>

<Switch bind:checked data-testid="switch" {...rest} />
