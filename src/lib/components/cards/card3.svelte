<script>
	import { Card } from '$lib/components';

	const output = `--swatch-0: oklch(99% 0.05 320); <br />
--swatch-1: oklch(90% 0.1 320); <br />
--swatch-2: oklch(80% 0.2 320); <br />
--swatch-3: oklch(72% 0.25 320); <br />
--swatch-4: oklch(67% 0.31 320); <br />
--swatch-5: oklch(50% 0.27 320); <br />
--swatch-6: oklch(35% 0.25 320); <br />
--swatch-7: oklch(25% 0.2 320); <br />
--swatch-8: oklch(13% 0.2 320); <br />
--swatch-9: oklch(5% 0.1 320); <br />
<br />
--text-1: var(--swatch-1); <br />
--text-2: var(--swatch-2); <br />
--link: var(--swatch-3); <br />
--surface-1: var(--swatch-10); <br />
--surface-2: var(--swatch-9); <br />
--surface-3: var(--swatch-8);`

	const cardContent = {
		heading: "What's the output?",
		small: 'CSS variables',
		content: `Copy an individual colour and you get: <br /> oklch(99% 0.05 320) <br />. Copy the whole palette and you get: <br />${output}`
	};
</script>

<Card {...cardContent} />
