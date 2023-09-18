import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { SwatchType } from '$lib/types';

export const swatches: Writable<SwatchType[]> = writable([
	{ name: 'swatch1', lightness: 94, chroma: 0.04, hue: 320 },
	{ name: 'swatch2', lightness: 89, chroma: 0.09, hue: 320 },
	{ name: 'swatch3', lightness: 74, chroma: 0.24, hue: 320 },
	{ name: 'swatch4', lightness: 67, chroma: 0.31, hue: 320 },
	{ name: 'swatch5', lightness: 60, chroma: 0.3, hue: 320 },
	{ name: 'swatch6', lightness: 50, chroma: 0.255, hue: 320 },
	{ name: 'swatch7', lightness: 35, chroma: 0.18, hue: 320 },
	{ name: 'swatch8', lightness: 25, chroma: 0.12, hue: 320 },
	{ name: 'swatch9', lightness: 20, chroma: 0.06, hue: 320 },
	{ name: 'swatch10', lightness: 13, chroma: 0.06, hue: 320 }
]);

export const derivedSwatches = derived(swatches, ($swatches) =>
	$swatches.map((swatch) => {
		const { lightness, chroma, hue } = swatch;
		const colour = `oklch(${lightness}% ${chroma} ${hue})`;
		return { ...swatch, colour };
	})
);

export const formattedSwatches = derived(derivedSwatches, ($derivedSwatches) =>
	$derivedSwatches.map((swatch, index) => `--swatch-${index + 1}: ${swatch.colour};`)
);
