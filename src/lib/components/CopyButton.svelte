<!-- script -->
<script lang="ts">
	import { copy } from 'svelte-copy';
	import type { SwatchType } from '$lib/types';
	export let swatch: SwatchType = { lightness: 50, chroma: 0.27, hue: 320 };

	// convert swatch object to string
	$: swatchString = JSON.stringify(swatch);
</script>

<!-- html -->
<button use:copy={swatchString}>Copy</button>

<style>
    button {
        border: none;
		background: var(--surface-3);
		text-align: center;
		color: inherit;
		width: 80%;
		height: 70%;
		font-size: 1rem;
		padding: 0.5rem;
		border-radius: 0.25rem;
		box-shadow: inset 0 0 0 1px var(--surface-2);
		transition: box-shadow 0.2s ease-in-out;
    }
</style>
