import { readable } from 'svelte/store';

export const themes = readable([
	{
		name: 'pink',
		swatches: [
			{ name: 'swatch1', lightness: 94, chroma: 0.04, hue: 320 },
			{ name: 'swatch2', lightness: 89, chroma: 0.09, hue: 320 },
			{ name: 'swatch3', lightness: 74, chroma: 0.24, hue: 320 },
			{ name: 'swatch4', lightness: 65, chroma: 0.33, hue: 320 },
			{ name: 'swatch5', lightness: 60, chroma: 0.3, hue: 320 },
			{ name: 'swatch6', lightness: 50, chroma: 0.255, hue: 320 },
			{ name: 'swatch7', lightness: 35, chroma: 0.18, hue: 320 },
			{ name: 'swatch8', lightness: 25, chroma: 0.12, hue: 320 },
			{ name: 'swatch9', lightness: 20, chroma: 0.06, hue: 320 },
			{ name: 'swatch10', lightness: 13, chroma: 0.06, hue: 320 }
		]
	},
	{
		name: 'green',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.2, hue: 147 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 147 },
			{ name: 'swatch3', lightness: 88, chroma: 0.24, hue: 147 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 147 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 147 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 147 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 147 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 147 },
			{ name: 'swatch9', lightness: 20, chroma: 0.08, hue: 147 },
			{ name: 'swatch10', lightness: 16, chroma: 0.06, hue: 147 }
		]
	},
	{
		name: 'blue',
		swatches: [
			{ name: 'swatch1', lightness: 95, chroma: 0.02, hue: 250 },
			{ name: 'swatch2', lightness: 87, chroma: 0.06, hue: 250 },
			{ name: 'swatch3', lightness: 80, chroma: 0.1, hue: 250 },
			{ name: 'swatch4', lightness: 76, chroma: 0.13, hue: 250 },
			{ name: 'swatch5', lightness: 62, chroma: 0.22, hue: 250 },
			{ name: 'swatch6', lightness: 51, chroma: 0.15, hue: 250 },
			{ name: 'swatch7', lightness: 42, chroma: 0.15, hue: 250 },
			{ name: 'swatch8', lightness: 22, chroma: 0.05, hue: 250 },
			{ name: 'swatch9', lightness: 17, chroma: 0.03, hue: 250 },
			{ name: 'swatch10', lightness: 14, chroma: 0.02, hue: 250 }
		]
	},
	{
		name: 'purple',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.02, hue: 295 },
			{ name: 'swatch2', lightness: 89, chroma: 0.06, hue: 295 },
			{ name: 'swatch3', lightness: 80, chroma: 0.12, hue: 295 },
			{ name: 'swatch4', lightness: 75, chroma: 0.15, hue: 295 },
			{ name: 'swatch5', lightness: 70, chroma: 0.19, hue: 295 },
			{ name: 'swatch6', lightness: 62, chroma: 0.24, hue: 295 },
			{ name: 'swatch7', lightness: 43, chroma: 0.24, hue: 295 },
			{ name: 'swatch8', lightness: 25, chroma: 0.14, hue: 295 },
			{ name: 'swatch9', lightness: 20, chroma: 0.11, hue: 295 },
			{ name: 'swatch10', lightness: 9, chroma: 0.05, hue: 295 }
		]
	},
	{
		name: 'yellow',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.06, hue: 90 },
			{ name: 'swatch2', lightness: 90, chroma: 0.12, hue: 90 },
			{ name: 'swatch3', lightness: 90, chroma: 0.15, hue: 90 },
			{ name: 'swatch4', lightness: 87, chroma: 0.2, hue: 90 },
			{ name: 'swatch5', lightness: 82, chroma: 0.19, hue: 90 },
			{ name: 'swatch6', lightness: 76, chroma: 0.17, hue: 90 },
			{ name: 'swatch7', lightness: 64, chroma: 0.15, hue: 90 },
			{ name: 'swatch8', lightness: 38, chroma: 0.01, hue: 90 },
			{ name: 'swatch9', lightness: 30, chroma: 0.06, hue: 90 },
			{ name: 'swatch10', lightness: 22, chroma: 0.04, hue: 90 }
		]
	},
	{
		name: 'orange',
		swatches: [
			{ name: 'swatch1', lightness: 88, chroma: 0.075, hue: 27 },
			{ name: 'swatch2', lightness: 82, chroma: 0.12, hue: 27 },
			{ name: 'swatch3', lightness: 75, chroma: 0.19, hue: 27 },
			{ name: 'swatch4', lightness: 70, chroma: 0.24, hue: 27 },
			{ name: 'swatch5', lightness: 65, chroma: 0.29, hue: 27 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 27 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 27 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 27 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 27 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 27 }
		]
	},
	{
		name: 'red',
		swatches: [
			{ name: 'swatch1', lightness: 90, chroma: 0.066, hue: 7 },
			{ name: 'swatch2', lightness: 82, chroma: 0.12, hue: 7 },
			{ name: 'swatch3', lightness: 76, chroma: 0.19, hue: 7 },
			{ name: 'swatch4', lightness: 69, chroma: 0.26, hue: 7 },
			{ name: 'swatch5', lightness: 66, chroma: 0.294, hue: 7 },
			{ name: 'swatch6', lightness: 53, chroma: 0.23, hue: 7 },
			{ name: 'swatch7', lightness: 40, chroma: 0.18, hue: 7 },
			{ name: 'swatch8', lightness: 25, chroma: 0.11, hue: 7 },
			{ name: 'swatch9', lightness: 16, chroma: 0.07, hue: 7 },
			{ name: 'swatch10', lightness: 13, chroma: 0.05, hue: 7 }
		]
	},
	{
		name: 'grey',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0, hue: 0 },
			{ name: 'swatch2', lightness: 90, chroma: 0, hue: 0 },
			{ name: 'swatch3', lightness: 80, chroma: 0, hue: 0 },
			{ name: 'swatch4', lightness: 86, chroma: 0, hue: 0 },
			{ name: 'swatch5', lightness: 77, chroma: 0, hue: 0 },
			{ name: 'swatch6', lightness: 51, chroma: 0, hue: 0 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0, hue: 0 },
			{ name: 'swatch8', lightness: 25, chroma: 0, hue: 0 },
			{ name: 'swatch9', lightness: 16, chroma: 0, hue: 0 },
			{ name: 'swatch10', lightness: 17, chroma: 0, hue: 0 }
		]
	}
]);
