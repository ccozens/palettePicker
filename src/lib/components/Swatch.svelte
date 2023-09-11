<!-- script -->
<script lang="ts">
	import type { SwatchType } from '$lib/types';

	export let swatch: SwatchType = { lightness: 50, chroma: 0.27, hue: 320 };
	let { lightness, chroma, hue } = swatch;

	$:	({ lightness, chroma, hue } = swatch);
	$: background = `oklch(${lightness}% ${chroma} ${hue})`;
</script>

<!-- html -->

<div class="swatch" style:background />

<style>
	.swatch {
		box-shadow: inset 0 0 0 1px oklch(50% 0 0 / 20%);
	}
</style>
