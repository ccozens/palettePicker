import type { SwatchesType } from '$lib/types';

export function allSwatchesToVariables(swatches: SwatchesType): string {
	const swatchesString = Object.entries(swatches)
		.map(([key, value]) => `--${key}: oklch(${value.lightness}% ${value.chroma} ${value.hue});`)
		.join('\n');

	const cssVariables = `
  ${swatchesString}

  --text-1: var(--swatch-1);
  --text-2: var(--swatch-2);
  --link: var(--swatch-3);
  --surface-1: var(--swatch-10);
  --surface-2: var(--swatch-9);
  --surface-3: var(--swatch-8);
`;
	return cssVariables;
}
