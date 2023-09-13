<script lang="ts">
	import { Picker, Swatch } from '$lib/components';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import GithubCorner from '$lib/components/GithubCorner.svelte';
	import { Header, Card1, Card2, Card3 } from '$lib/components/cards';
	import { derivedSwatches, formattedSwatches } from '$lib/stores/swatches';
	export let hue: 320;

	$: swatch1 = $derivedSwatches[0].colour;
	$: swatch2 = $derivedSwatches[1].colour;
	$: swatch3 = $derivedSwatches[2].colour;
	$: swatch4 = $derivedSwatches[3].colour;
	$: swatch5 = $derivedSwatches[4].colour;
	$: swatch6 = $derivedSwatches[5].colour;
	$: swatch7 = $derivedSwatches[6].colour;
	$: swatch8 = $derivedSwatches[7].colour;
	$: swatch9 = $derivedSwatches[8].colour;
	$: swatch10 = $derivedSwatches[9].colour;
	$: swatchSetup =
		'--text-1: var(--swatch-1);\n--text-2: var(--swatch-2);\n--link: var(--swatch-3);\n--surface-1: var(--swatch-10);\n--surface-2: var(--swatch-9);\n--surface-3: var(--swatch-8);';

	$: swatchesString = $formattedSwatches.join('\n') + '\n' + '\n' + swatchSetup;
</script>


<GithubCorner />

<div
	class="wrapper"
	style="
					--swatch-1:{swatch1};
					--swatch-2:{swatch2};
					--swatch-3:{swatch3};
					--swatch-4:{swatch4};
					--swatch-5:{swatch5};
					--swatch-6:{swatch6};
					--swatch-7:{swatch7};
					--swatch-8:{swatch8};
					--swatch-9:{swatch9};
					--swatch-10:{swatch10};"
>
	<div class="contentGrid">
		<Header />
		<Card1 />
		<Card2 />
		<Card3 />

		<Picker bind:hue />

		<div class="palette">
			<div class="gridHeader">
				<div>lightness</div>
				<div>chroma</div>
				<div>hue</div>
			</div>
			<Swatch />
		</div>
		<CopyButton
			buttonWidth="100%"
			buttonHeight="100%"
			displayText="Copy whole palette"
			bind:copyText={swatchesString}
		/>
	</div>
</div>

<style>
	.wrapper {
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

	.gridHeader div:nth-child(1) {
		grid-column: 2 / 3;
	}
	.gridHeader div:nth-child(2) {
		grid-column: 3 / 4;
	}
	.gridHeader div:nth-child(3) {
		grid-column: 4 / 5;
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

	@media (min-width: 1000px) {
		.wrapper {
			min-height: 100vh;
		}
		.contentGrid {
			columns: 2;
			margin: auto;
		}

		.gridHeader {
			grid-template-columns: 2fr repeat(4, 1fr);
		}
	}
</style>
