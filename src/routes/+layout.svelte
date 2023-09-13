<script lang="ts">
	import { Analytics } from '$lib/components';
</script>

<Analytics />

<slot />

<style>
	/* reset from https://www.joshwcomeau.com/css/custom-css-reset/ */
	/*
  1. Use a more-intuitive box-sizing model.
*/
	:global(*),
	:global(*)::before,
	:global(*)::after {
		box-sizing: border-box;
	}
	/*
  2. Remove default margin
*/
	:global(*) {
		margin: 0;
		padding: 0;
	}
	/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
	:global(body) {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		font-family: 'Inter', sans-serif;
	}
	/*
  5. Improve media defaults
*/
	:global(img),
	:global(picture),
	:global(video),
	:global(canvas),
	:global(svg) {
		display: block;
		max-width: 100%;
	}
	/*
  6. Remove built-in form typography styles
*/
	:global(input),
	:global(button),
	:global(textarea),
	:global(select) {
		font: inherit;
	}
	/*
  7. Avoid text overflows
*/
	:global(p),
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		overflow-wrap: break-word;
	}
</style>
