<!-- script -->
<script lang="ts">
	import { swatches } from '$lib/stores/swatches';

	export let hue = 360;


// update all swatches
        const updateAllSwatches = () => {
            $swatches.forEach(swatch => {
                swatch.hue = hue;
            })
            $swatches = $swatches;
        }
</script>

<!-- html -->
<input type="range" min="0" max="360" bind:value={hue} on:change={updateAllSwatches} />
{hue}

<h2>{$swatches[0].hue}</h2>
<h2>{$swatches[3].hue}</h2>
