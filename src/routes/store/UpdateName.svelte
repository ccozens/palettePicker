<!-- script -->
<script lang="ts">
import { firstName, lastName } from '$lib/stores/values';


</script>

<!-- html -->
<input type="text" bind:value={$firstName} />
<input type="text" bind:value={$lastName} />
