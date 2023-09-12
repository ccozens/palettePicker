import type { SwatchType } from '$lib/types';
export function singleSwatchToVariable(swatch: SwatchType): string {
	return `--swatch: oklch(${swatch.lightness}% ${swatch.chroma} ${swatch.hue});`;
}
