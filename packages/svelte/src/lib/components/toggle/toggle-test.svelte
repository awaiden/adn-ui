<script lang="ts">
import { Toggle } from "./index.js";

let { pressed = $bindable(false), ...rest } = $props();
</script>

<Toggle bind:pressed data-testid="toggle" {...rest}>
	Toggle Me
</Toggle>
