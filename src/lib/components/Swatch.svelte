<!-- script -->
<script lang="ts">
	import { derivedSwatches } from '$lib/stores/swatches';
	import { singleSwatchToVariable } from '$lib/functions';
	import CopyButton from './CopyButton.svelte';


	// $: swatchString = singleSwatchToVariable(swatch);
	// $: link = `https://oklch.com/#${lightness},${chroma},${hue},100`;
	const link = 'beep'
</script>

<!-- html -->
<div class="values">
	{#each $derivedSwatches as derivedSwatch}
	<a
		data-sveltekit-preload-data="hover"
		href={link}
		target="_blank"
		class="swatch"
		style="background:{derivedSwatch.colour}"
	>
		<span class="screen-reader-only">Link to OKLCH.com colour viewer</span>
	</a>
	<!-- bind:value={swatch.lightness} as this passes  the swatch prop by reference, so that changes to the hue value in the input element will update the original hue value in the swatch object -->
	<input type="number" bind:value={derivedSwatch.lightness} min="0" max="100" />
	<input type="number" bind:value={derivedSwatch.chroma} min="0" max="1" step="0.01" />
	<input type="number" bind:value={derivedSwatch.hue} min="0" max="360" />
	<!-- <CopyButton bind:copyText={derivedSwatch} /> -->
	<p>copy</p>
	{/each}
</div>

<style>
	.swatch {
		box-shadow: inset 0 0 0 1px oklch(50% 0 0 / 20%);
		transition: transform 0.2s ease-in-out, border 0.2s ease-in-out;
		width: 100%;
		height: 100%;
	}

	.swatch:hover {
		transform: scale(1.05);
		border: solid 1px var(--swatch-1);
	}

	.values {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}

	input {
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

	input:hover {
		box-shadow: inset 0 0 0 1px var(--swatch-6), 0 0 0 2px var(--surface-3);
	}
	input:focus {
		outline: none;
		box-shadow: inset 0 0 0 1px var(--swatch-6), 0 0 0 2px var(--surface-3);
	}

	/* hide arrows in input elements */
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	/* screen reader class from https://ionic.io/docs/accessibility/visibility */
	.screen-reader-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		position: absolute;
		white-space: nowrap;
		overflow: hidden;
		width: 1px;
	}

	@media (min-width: 1000px) {
		.values {
			grid-template-columns: 2fr repeat(4, 1fr);
		}
	}
</style>
