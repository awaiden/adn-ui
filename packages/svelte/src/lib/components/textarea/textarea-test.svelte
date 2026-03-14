<script lang="ts">
import { Textarea } from "./index.js";

let { value = $bindable(""), ...rest } = $props();
</script>

<Textarea bind:value data-testid="textarea" {...rest} />
