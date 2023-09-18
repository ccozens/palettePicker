import { writable, derived } from 'svelte/store';

export const swatches = writable([
	{ name: 'swatch1', lightness: 99, chroma: 0.05, hue: 320 },
	{ name: 'swatch2', lightness: 90, chroma: 0.1, hue: 320 },
	{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 320 },
	{ name: 'swatch4', lightness: 72, chroma: 0.25, hue: 320 },
	{ name: 'swatch5', lightness: 67, chroma: 0.31, hue: 320 },
	{ name: 'swatch6', lightness: 50, chroma: 0.27, hue: 320 },
	{ name: 'swatch7', lightness: 35, chroma: 0.25, hue: 320 },
	{ name: 'swatch8', lightness: 25, chroma: 0.2, hue: 320 },
	{ name: 'swatch9', lightness: 25, chroma: 0.1, hue: 320 },
	{ name: 'swatch10', lightness: 20, chroma: 0.1, hue: 320 }
]);

export const derivedSwatches = derived(swatches, ($swatches) =>
	$swatches.map((swatch) => {
		const { lightness, chroma, hue } = swatch;
		const colour = `oklch(${lightness}% ${chroma} ${hue})`;
		return { ...swatch, colour };
	})
);


export const formattedSwatches = derived(derivedSwatches, ($derivedSwatches) =>
	$derivedSwatches.map((swatch, index) => `--swatch-${index+1}: ${swatch.colour};`)
);
