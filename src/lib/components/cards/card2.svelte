<script lang="ts">
	import { Card } from '$lib/components';
	import type { CardContent } from '$lib/types';

	const cardContent: CardContent = {
		heading: "What's this site then?",
		small: 'An okLCH palette picker!',
		content:
			'Inspired by <a href="https://www.youtube.com/watch?v=6aCsAMgwnjE">Adam Argyle\'s colour palette with OKLCH gui challenge</a>, I developed a whole paletter designer - slide the slider, tweak the individual values, copy the swatch, copy the whole palette, and have fun!'
	};
</script>

<Card {...cardContent} />
