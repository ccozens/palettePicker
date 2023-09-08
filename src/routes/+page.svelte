<script lang="ts">
	import Picker from '$lib/components/Picker.svelte';
	import { Header, Card1, Card2, Card3 } from '$lib/components/cards';

	export let hue: number = 320;
</script>

<head>
	<title>okLCH Color Palettes Picker</title>

</head>

<div class="wrapper" style="--hue: {hue}">
	<Picker bind:hue />
	<div class="contentGrid">
		<div class="palette">
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
			<div class="swatch" />
		</div>

		<article>
			<Header />
			<Card1 />
			<Card2 />
			<Card3 />
		</article>
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
		--surface-1: var(--swatch-10);
		--surface-2: var(--swatch-9);
		--surface-3: var(--swatch-8);

		display: flex;
		flex-direction: column;
		gap: 1em;
		background: var(--surface-1);
		padding: 2em 1em 1em 1em;
		color: var(--text-1);
		max-height: 80vh;
		font-family: system-ui, sans-serif;
	}

	.contentGrid {
		display: grid;
		place-content: center;
		gap: 5vmin;
		grid-auto-flow: column;
	}

	.swatch {
		box-shadow: inset 0 0 0 1px oklch(50% 0 0 / 20%);
	}

	.swatch:nth-of-type(1) {
		background: var(--swatch-1);
	}
	.swatch:nth-of-type(2) {
		background: var(--swatch-2);
	}
	.swatch:nth-of-type(3) {
		background: var(--swatch-3);
	}
	.swatch:nth-of-type(4) {
		background: var(--swatch-4);
	}
	.swatch:nth-of-type(5) {
		background: var(--swatch-5);
	}
	.swatch:nth-of-type(6) {
		background: var(--swatch-6);
	}
	.swatch:nth-of-type(7) {
		background: var(--swatch-7);
	}
	.swatch:nth-of-type(8) {
		background: var(--swatch-8);
	}
	.swatch:nth-of-type(9) {
		background: var(--swatch-9);
	}
	.swatch:nth-of-type(10) {
		background: var(--swatch-10);
	}

	.palette {
		display: grid;
		grid-auto-rows: 7vh;
		grid-template-columns: 20vw;
	}

	* {
		box-sizing: border-box;
		margin: 0;
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
</style>
