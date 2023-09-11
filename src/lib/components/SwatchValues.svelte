<!-- script -->
<script lang="ts">
	import type { SwatchType } from '$lib/types';

	export let swatch: SwatchType = { lightness: 50, chroma: 0.27, hue: 320 };
	let { lightness, chroma, hue } = swatch;

	$: ({ lightness, chroma, hue } = swatch);
	$: background = `oklch(${lightness}% ${chroma} ${hue})`;
</script>

<!-- html -->

<div class="values">
	{#each Object.entries(swatch) as [key, value]}
		<p>{key}: {value}</p>
	{/each}
</div>

<style>
	.values {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
	}
</style>
