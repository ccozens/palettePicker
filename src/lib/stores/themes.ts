import { readable } from 'svelte/store';

export const themes = readable([
	{
		name: 'pink',
		swatches: [
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
		]
	},
	{
		name: 'green',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 147 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 147 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 147 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 147 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 147 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 147 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 147 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 147 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 147 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 147 }
		]
	},
	{
		name: 'blue',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 207 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 207 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 207 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 207 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 207 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 207 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 207 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 207 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 207 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 207 }
		]
	},
	{
		name: 'purple',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 267 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 267 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 267 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 267 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 267 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 267 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 267 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 267 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 267 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 267 }
		]
	},
	{
		name: 'yellow',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 47 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 47 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 47 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 47 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 47 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 47 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 47 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 47 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 47 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 47 }
		]
	},
	{
		name: 'orange',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 27 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 27 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 27 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 27 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 27 },
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
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 7 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 7 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 7 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 7 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 7 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 7 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 7 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 7 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 7 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 7 }
		]
	},
	{
		name: 'grey',
		swatches: [
			{ name: 'swatch1', lightness: 96, chroma: 0.75, hue: 0 },
			{ name: 'swatch2', lightness: 90, chroma: 0.2, hue: 0 },
			{ name: 'swatch3', lightness: 80, chroma: 0.2, hue: 0 },
			{ name: 'swatch4', lightness: 86, chroma: 0.32, hue: 0 },
			{ name: 'swatch5', lightness: 77, chroma: 0.31, hue: 0 },
			{ name: 'swatch6', lightness: 51, chroma: 0.2, hue: 0 },
			{ name: 'swatch7', lightness: 39.5, chroma: 0.16, hue: 0 },
			{ name: 'swatch8', lightness: 25, chroma: 0.1, hue: 0 },
			{ name: 'swatch9', lightness: 16, chroma: 0.06, hue: 0 },
			{ name: 'swatch10', lightness: 17, chroma: 0.03, hue: 0 }
		]
	}
]);
