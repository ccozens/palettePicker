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

<h2>Themes</h2>
<div class="themeBlock">
	{#each $themes as theme}
		<button
			on:click={() => {
				changeTheme(theme);
			}}
			class="themeName"
			style="color:{swatchAsColour(theme.swatches[0])}; background-color:{swatchAsColour(
				theme.swatches[5]
			)};"
			><span class="themeText">{theme.name}</span>
		</button>
	{/each}
</div>

<style>
	h2 {
		margin-top: 1rem;
	}
	.themeBlock {
		display: flex;
	}

	.themeName {
		border-radius: 0.25rem;
		border: none;
		/* box-shadow: inset 0 0 0 1px var(--surface-2); */
		transition: box-shadow 0.2s ease-in-out;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
		margin: 0 auto;
	}

	.themeName:hover {
		box-shadow: inset 0 0 0 1px var(--surface-1);
		transform: scale(1.05);
	}

	.themeText {
		visibility: hidden;
		display: none;
	}

	@media (min-width: 1000px) {
		.themeBlock {
			flex-direction: column;
		}
		.themeName {
			height: 3rem;
			width: 5rem;
			margin: 0.5rem auto;
		}
		h2 {
			text-align: center;
			margin: 1rem ;
		}

		.themeText {
			visibility: visible;
			display: block;
		}

	}
</style>
