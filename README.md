# OKLCH palette picker

## --->  [Live site here](https://palette-picker-beta.vercel.app/)  <--

## What's OKLCH?
OKLCH is a color space with a few advantages over the more common RGB and HSL color spaces. It's a perceptually uniform color space, meaning that the distance between two colors is proportional to the difference in their perceived brightness. This makes it easier to create palettes that look good together. It also has a lightness channel that's more intuitive than the one in HSL, and it's more suitable for color blending than RGB.

### OKLCH values

- L: Lightness percentage, 0-100%, where 0 corresponds to black and 100 to white.
- C: Chroma, a measure of colour saturation, where 0 is completely desaturated and 100% is 0.4.
- H: Hue angle, 0-360, where 0 is red, 120 is green, 240 is blue, and 360 is red again.

### OKLCH usage

The [CSS syntax for OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch#syntax) is `oklch(L% C H)`, where L, C, and H are replaced by the values you want. For example, `oklch(85% 0.3 220)` is a dark blue, [as per this pen](https://codepen.io/ccozens/pen/zYyzewW).

```html

<div class="oklch" />

<style>
.oklch {
  width: 100px;
  height: 100px;
  background-color: oklch(85% 0.3 220);
}
</style>
```
## What's the site?
This palette picker generates a range of 10 swatches, initially around a fixed hue and pre-set lightness and chroma. All the values can be tweaked individually and the swatches will update in real time. The swatches can be copied to the clipboard as CSS variables individually or as a whole palette.

![site preview](https://github.com/ccozens/palettePicker/blob/main/src/lib/assets/pickerDemo.gif)

The output of copying an individual swatch is: `oklch(99% 0.05 320)`.
And the output of copying the whole palette is:
```
--swatch-1: oklch(99% 0.05 320);
--swatch-2: oklch(90% 0.1 320);
--swatch-3: oklch(80% 0.2 320);
--swatch-4: oklch(72% 0.25 320);
--swatch-5: oklch(67% 0.31 320);
--swatch-6: oklch(50% 0.27 320);
--swatch-7: oklch(35% 0.25 320);
--swatch-8: oklch(25% 0.2 320);
--swatch-9: oklch(13% 0.2 320);
--swatch-10: oklch(5% 0.1 320);

--text-1: var(--swatch-1);
--text-2: var(--swatch-2);
--link: var(--swatch-3);
--surface-1: var(--swatch-10);
--surface-2: var(--swatch-9);
--surface-3: var(--swatch-8);
```

## What's the tech?
This is a [svelte app](https://svelte.dev/), hosted at Vercel. It has fairly few dependencies:
- [svelte-copy](https://www.npmjs.com/package/svelte-copy) is lovely and simple for copying to the clipboard.
- [colorsjs.io](https://colorsjs.io/) is used for checking whether colours are valid in the [Display P3 colour space](https://en.wikipedia.org/wiki/DCI-P3).

## What's next?
Ideally, I'd like to add a number of features inspired by the [evil martians OKLCH picker](https://oklch.com/) and [oddbird's oddcontrast](oddcontrast.com). For now, I'm not letting perfect be the enemy of good enough and moving on to other projects, as this is functional. If you have any suggestions, please let me know!

My list of nice-to-haves includes:
| Feature |  Done ? |
|:-------:|:------:|
|Conversion to other color spaces ||
|Add preset palettes (eg pinks / greens / blues) |added in [commit f3dde1c](https://github.com/ccozens/palettePicker/commit/f3dde1c30507771f1f36b3ddc7807cd9a4e94ce5)|
|Color blindness simulation ||
|Accessibility contrast checks ||
|Check each colour exists in P3 gamut (e.g. oklch(82% 0.155 228) is an invalid colour in any colour space) |added in [commit cfbfd0a](https://github.com/ccozens/palettePicker/commit/cfbfd0a6f5e7773b484c0ec50bc1bef486f22521)|