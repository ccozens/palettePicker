<script lang="ts">
	export let hue: number = 320;
</script>

<head>
	<title>okLCH Color Palettes | GUI Challenges</title>
	<meta charset="utf-8" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="theme-color" content="Canvas" />
	<meta name="description" content="🙂" />
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="stylesheet" href="/style.css" />
	<script type="module" src="/index.js"></script>
</head>

<div class="wrapper" style="--hue: {hue}">
	<div class="picker">
		<label for="hue">Hue</label>
		<input type="range" min="0" max="360" step="1" bind:value={hue} />
		{hue}
	</div>
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
			<header>
				<h2>Text Usage</h2>
				<small>Lorem ipsum dolor</small>
			</header>
			<div class="card">
				<h2>I'm a card</h2>
				<small>I give credit</small>
				<p>
					This is based very heavily on <a
						href="https://github.com/argyleink/gui-challenges/tree/main/color-palettes"
						>Adam Argyle's colour palette with OKLCH gui challenge</a
					>
				</p>
			</div>
			<div class="card">
				<h2>I've got a link</h2>
				<small>You should go here</small>
				<p>
					Here is <a href="https://www.youtube.com/watch?v=6aCsAMgwnjE"
						>Adam's tutorial on youtube</a
					>
				</p>
			</div>
			<div class="card">
				<h2>I'm another card</h2>
				<small>I'm colourful!</small>
				<p />
				<p>There's an amazing colour picker at <a href="https://oklch.com">oklch.com</a></p>
				<p>And another with a great contrast checker at <a href="https://www.oddcontrast.com/">oddcontrast.com</a></p>
			</div>
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

	.picker {
		display: flex;
		padding: 1em;
		gap: 1em;
		background: var(--surface-3);
	}

	.picker > input {
		flex-grow: 1;
	}

	/* style range slider and thumb */
	/* remove original styles */
	.picker > input[type='range'] {
		-webkit-appearance: none;
		outline: none;
		background-color: transparent;
	}

	.picker > input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 0.75em;
		height: 0.75em;
		/* to centre on track, margin-top = (track height in pixels / 2) - (thumb height in pixels /2) */
		margin-top: calc((1em / 2) - (0.75em / 2));
		background-color: var(--text-1);
		border-radius: 50%;
		cursor: pointer;
	}

	.picker > input[type='range']::-webkit-slider-runnable-track {
		height: 1em;
		border-radius: 0.5em;
		background-color: var(--swatch-4);
	}

	.contentGrid {
		display: grid;
		place-content: center;
		gap: 5vmin;
		grid-auto-flow: column;
	}

	small {
		color: var(--text-2);
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

	.card {
		display: grid;
		gap: 1ch;
		border-radius: 10px;
		background: var(--surface-2);
		border: 1px solid var(--surface-3);
		padding: 1rem;
	}

	* {
		box-sizing: border-box;
		margin: 0;
	}

	p {
		max-inline-size: 40ch;
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
