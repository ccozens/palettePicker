<script lang="ts">
	import { Card } from '$lib/components';
	import type { CardContent } from '$lib/types';

	const output = `--swatch-1: oklch(99% 0.05 320); <br />
...etc...<br />
--swatch-9: oklch(5% 0.1 320); <br />
`;

	const cardContent: CardContent = {
		heading: "What's the output?",
		small: 'CSS variables',
		content: `Copy an individual colour and you get: <br /> oklch(99% 0.05 320) <br />. Copy the whole palette and you get: <br />${output}`
	};
</script>

<Card {...cardContent} />
