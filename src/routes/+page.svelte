<script lang="ts">
	import { Picker, Swatch } from '$lib/components';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import GithubCorner from '$lib/components/GithubCorner.svelte';
	import { Header, Card1, Card2, Card3 } from '$lib/components/cards';
	import type { SwatchType, SwatchesType } from '$lib/types';

	export let hue: number = 320;

	// create array of 10 swatches storing lightness, chroma, and hue
	let swatches: SwatchesType = {
		swatch1: { lightness: 99, chroma: 0.05, hue: hue },
		swatch2: { lightness: 90, chroma: 0.1, hue: hue },
		swatch3: { lightness: 80, chroma: 0.2, hue: hue },
		swatch4: { lightness: 72, chroma: 0.25, hue: hue },
		swatch5: { lightness: 67, chroma: 0.31, hue: hue },
		swatch6: { lightness: 50, chroma: 0.27, hue: hue },
		swatch7: { lightness: 35, chroma: 0.25, hue: hue },
		swatch8: { lightness: 25, chroma: 0.2, hue: hue },
		swatch9: { lightness: 13, chroma: 0.2, hue: hue },
		swatch10: { lightness: 5, chroma: 0.1, hue: hue }
	};

	// update swatches when hue updates
	$: hue,
		Object.values(swatches).forEach((swatch) => {
			swatch.hue = hue;
			// needed to reassign updated swatches to original swatches object
			swatches = swatches;
		});

	// stringify swatches object
	$: swatchesString = JSON.stringify(swatches);
</script>

<GithubCorner fillProp={swatches.swatch5} colorProp={swatches.swatch9} />
<div class="wrapper" style="--hue: {hue}">
	<div class="contentGrid">
			<Header />
			<Card1 />
			<Card2 />
			<Card3 />
			<Picker bind:hue />

		<div class="palette">
			<div class="gridHeader">
				<div />
				<div>lightness</div>
				<div>chroma</div>
				<div>hue</div>
				<div />
			</div>
			{#each Object.values(swatches) as swatch}
				<Swatch bind:swatch />
			{/each}
		</div>
		<div class="copyHighlight">
			<CopyButton
				buttonWidth="100%"
				buttonHeight="100%"
				shadow1="0"
				shadow2="0"
				displayText="Copy whole palette"
				bind:copyText={swatchesString}
			/>
		</div>
	</div>
</div>

<style>
	.wrapper {
		--swatch-1: oklch(99% 0.05 var(--hue));
		--swatch-2: oklch(90% 0.1 var(--hue));
		--swatch-3: oklch(80% 0.2 var(--hue));
		--swatch-4: oklch(72% 0.25 var(--hue));
		--swatch-5: oklch(67% 0.31 var(--hue));
		--swatch-6: oklch(50% 0.27 var(--hue));
		--swatch-7: oklch(35% 0.25 var(--hue));
		--swatch-8: oklch(25% 0.2 var(--hue));
		--swatch-9: oklch(13% 0.2 var(--hue));
		--swatch-10: oklch(5% 0.1 var(--hue));

		--text-1: var(--swatch-1);
		--text-2: var(--swatch-2);
		--link: var(--swatch-3);
		--surface-1: var(--swatch-10);
		--surface-2: var(--swatch-9);
		--surface-3: var(--swatch-8);

		display: flex;
		flex-direction: column;
		gap: 1em;
		background: var(--surface-1);
		padding: 2em 1em 1em 1em;
		color: var(--text-1);
	}

	.contentGrid {
		box-shadow: inset 0 0 0 1px var(--swatch-1), 0 0 2px 2px var(--swatch-1);
		width: fit-content;
		margin: 0 auto;
		padding: 1em;
		border-radius: 0.25rem;
	}

	.palette {
		margin: 1em auto;
	}

	.gridHeader {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}


	article {
		display: grid;
		gap: 2ch;
		align-content: start;
	}

	@media (prefers-color-scheme: light) {
		.wrapper {
			--text-1: var(--swatch-10);
			--text-2: var(--swatch-9);
			--surface-1: var(--swatch-1);
			--surface-2: var(--swatch-2);
			--surface-3: var(--swatch-3);
		}
	}

	.copyHighlight {
		border-radius: 0.25rem;
		box-shadow: 0px 0px 5px 5px var(--swatch-6), 0px 0px 4px var(--swatch-6),
			0px 0px 8px var(--swatch-6);
	}

	@media (min-width: 1000px) {
		.wrapper {
			min-height: 100vh;
		}
		.contentGrid {
			columns: 2;
			margin: auto;
		}
	}
</style>
