<script lang="ts">
	import { Picker, Swatch } from '$lib/components';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import GithubCorner from '$lib/components/GithubCorner.svelte';
	import { Header, Card1, Card2, Card3 } from '$lib/components/cards';
	import { derivedSwatches } from '$lib/stores/swatches';
	export let hue: 320;

	function formatDerivedSwatches() {
		let formattedSwatches = '';
		$derivedSwatches.forEach((swatch, index) => {
			formattedSwatches += `--swatch-${index}: ${swatch.colour}\n`;
		});
		return formattedSwatches;
	}

	$: formattedSwatches = formatDerivedSwatches();
</script>

<GithubCorner />

<div class="wrapper" style="--hue: {hue}">
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
			bind:copyText={formattedSwatches}
		/>
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
