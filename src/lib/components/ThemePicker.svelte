<!-- script -->
<script lang="ts">
	import { themes, swatches } from '$lib/stores';
	import type { SwatchType, ThemeType } from '$lib/types';

	const swatchAsColour = (swatch: SwatchType) => {
		const { lightness, chroma, hue } = swatch;
		const colour = `oklch(${lightness}% ${chroma} ${hue})`;
		return colour;
	};

	function changeTheme(theme: ThemeType) {
		const newSwatches = theme.swatches;
		swatches.set(newSwatches);
	}
</script>

<!-- html -->

<div class="themeBlock">
	<h2>Themes</h2>
	{#each $themes as theme}
		<button
			on:click={() => {
				changeTheme(theme);
			}}
			class="themeName"
			style="color:{swatchAsColour(theme.swatches[0])}; background-color:{swatchAsColour(
				theme.swatches[5]
			)};"
			>{theme.name}
		</button>
	{/each}
</div>

<style>
	.themeBlock {
		display: grid;
		padding: 1rem;
		grid-auto-rows: 1fr;
		height: 100%;
	}

	.themeName {
		border-radius: 0.25rem;
		border: none;
		/* box-shadow: inset 0 0 0 1px var(--surface-2); */
		transition: box-shadow 0.2s ease-in-out;
		cursor: pointer;
	}

	.themeName:hover {
		box-shadow: inset 0 0 0 1px var(--surface-1);
		transform: scale(1.05);
	}
</style>
