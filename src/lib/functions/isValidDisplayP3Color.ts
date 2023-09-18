import convert from 'color-convert';
import { isValidOklchColor } from '$lib/functions/isValidOklchColor';
import type { LCH } from '$lib/types';

export function isValidDisplayP3Color(color: LCH): boolean {
	if (!isValidOklchColor(color)) {
		return false;
	}

	const { lightness, chroma, hue } = color;

	const [r, g, b] = convert.lch.rgb([lightness, chroma, hue]);
	const [p3r, p3g, p3b] = convert.rgb.xyz([r, g, b]);
	const [p3r2, p3g2, p3b2] = convert.xyz.rgb([p3r, p3g, p3b]);

	if (
		isNaN(p3r2) ||
		isNaN(p3g2) ||
		isNaN(p3b2) ||
		p3r2 < 0 ||
		p3r2 > 255 ||
		p3g2 < 0 ||
		p3g2 > 255 ||
		p3b2 < 0 ||
		p3b2 > 255
	) {
		return false;
	}

	return true;
}
