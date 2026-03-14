<script lang="ts">
import { Input } from "./index.js";

let { value = $bindable(""), ...rest } = $props();
</script>

<Input bind:value data-testid="input" {...rest} />
