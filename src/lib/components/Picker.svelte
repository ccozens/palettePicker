<!-- script -->
<script lang="ts">
	import { swatches } from '$lib/stores/swatches';

	export let hue = 320;

	// update all swatches
	function updateAllSwatches() {
		$swatches.forEach((swatch) => {
			swatch.hue = hue;
		});
		$swatches = $swatches;
	}
</script>

<!-- html -->
<div class="picker">
	<label for="hue">Hue</label>
	<input type="range" min="0" max="360" step="1" bind:value={hue} on:input={updateAllSwatches} />
</div>

<style>
	.picker {
		display: flex;
		padding: 1em;
		gap: 1em;
		border-radius: 10px;
		background: var(--surface-2);
		border: 1px solid var(--surface-3);
		margin: 1rem;
	}

	.picker:hover {
		box-shadow: inset 0 0 0 1px var(--swatch-6), 0 0 0 2px var(--surface-3);
	}

	.picker > input {
		flex-grow: 1;
	}

	/* style range slider and thumb */
	/* remove original styles */
	.picker > input[type='range'] {
		-webkit-appearance: none;
		outline: none;
		background-color: transparent;
	}

	.picker > input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 0.75em;
		height: 0.75em;
		/* to centre on track, margin-top = (track height in pixels / 2) - (thumb height in pixels /2) */
		margin-top: calc((1em / 2) - (0.75em / 2));
		background-color: var(--text-1);
		border-radius: 50%;
		cursor: pointer;
	}

	.picker > input[type='range']::-webkit-slider-runnable-track {
		height: 1em;
		border-radius: 0.5em;
		background-color: var(--swatch-4);
	}
</style>
