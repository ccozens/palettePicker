<!-- script -->
<script lang="ts">
	import type { SwatchType } from '$lib/types';

	export let swatch: SwatchType = { lightness: 50, chroma: 0.27, hue: 320 };
	let { lightness, chroma, hue } = swatch;

	$: ({ lightness, chroma, hue } = swatch);
	$: background = `oklch(${lightness}% ${chroma} ${hue})`;
</script>

<!-- html -->

<div class="swatch" style:background />
<div class="values">
	<div>{lightness}</div>
	<div>{chroma}</div>
	<div>{hue}</div>
</div>

<style>
	.swatch {
		box-shadow: inset 0 0 0 1px oklch(50% 0 0 / 20%);
		transition: transform 0.2s ease-in-out, border 0.2s ease-in-out;
	}

	.swatch:hover {
		transform: scale(1.05);
		border: solid 1px var(--swatch-1);
	}

	.values {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border: solid 1px var(--swatch-1);
		place-items: center;
	}
</style>
