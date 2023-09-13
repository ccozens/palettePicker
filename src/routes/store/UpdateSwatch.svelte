<!-- script -->
<script lang="ts">
	import { swatches } from '$lib/stores/swatches';
</script>

<!-- html -->

{#each $swatches as swatch}
<div style="display:flex">

    <input style="width: 120px;" type="text" bind:value={swatch.name} />
	<input style="width: 60px;" type="number" bind:value={swatch.lightness} />
    <input style="width: 60px;" type="number" bind:value={swatch.chroma} />
    <input style="width: 60px;" type="number" bind:value={swatch.hue} />
</div>
{/each}
