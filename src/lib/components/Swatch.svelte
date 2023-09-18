<!-- script -->
<script lang="ts">
	import { swatches, derivedSwatches } from '$lib/stores/swatches';
	import CopyButton from './CopyButton.svelte';
	import { isValidDisplayP3Color } from '$lib/functions';
</script>

<!-- html -->
{#each $swatches as swatch, index}
	<div class="values {isValidDisplayP3Color($derivedSwatches[index].colour) ? '' : 'invalid'}">
		<a
			data-sveltekit-preload-data="hover"
			href="https://oklch.com/#{swatch.lightness},{swatch.chroma},{swatch.hue},100"
			target="_blank"
			class="swatch"
			style="background:{isValidDisplayP3Color($derivedSwatches[index].colour)
				? $derivedSwatches[index].colour
				: 'var(--text-1)'}"
		>
			<span class="screen-reader-only">Link to OKLCH.com colour viewer</span>
		</a>
		<!-- bind:value={swatch.lightness} as this passes the swatch prop by reference, so that changes to the hue value in the input element will update the original hue value in the swatch object -->
		<input type="number" bind:value={swatch.lightness} min="0" max="100" />
		<input type="number" bind:value={swatch.chroma} min="0" max="1" step="0.01" />
		<input type="number" bind:value={swatch.hue} min="0" max="360" />
		<CopyButton bind:copyText={$derivedSwatches[index].colour} />
	</div>
{/each}

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
		grid-template-columns: 2fr repeat(4, 1fr);
		place-items: center;
	}

	input {
		border: none;
		background: var(--surface-3);
		text-align: center;
		color: inherit;
		width: 95%;
		height: 95%;
		font-size: 1rem;
		padding: 0.5rem;
		border-radius: 0.25rem;
		box-shadow: inset 0 0 0 1px var(--surface-2);
		transition: box-shadow 0.2s ease-in-out;
	}

	.invalid > input {
		background: var(--text-1);
		color: var(--surface-3);
	}

	.invalid > .swatch {
		background: var(--text-1);
	}

	.invalid > a::before {
		color: var(--surface-3);
		content: 'Colour not in P3 gamut. Click for picker.';
		font-size: 0.8rem;
		padding: 0.3rem;
		display: block;
		text-align: center;
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
</style>
