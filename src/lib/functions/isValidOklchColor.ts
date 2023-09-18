import type { LCH } from '$lib/types';
export function isValidOklchColor(color: LCH): boolean {
	if (typeof color !== 'object') {
		return false;
	}

	const { lightness, chroma, hue } = color;

	if (
		typeof lightness !== 'number' ||
		lightness < 0 ||
		lightness > 100 ||
		typeof chroma !== 'number' ||
		chroma < 0 ||
		chroma > 1 ||
		typeof hue !== 'number' ||
		hue < 0 ||
		hue > 360
	) {
		return false;
	}

	return true;
}
