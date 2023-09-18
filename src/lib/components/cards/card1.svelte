<script lang="ts">
	import { Card } from '$lib/components';
	import type { CardContent } from '$lib/types';

	const cardContent: CardContent = {
		heading: "What is okLCH?",
		small: 'A colour space!',
		content:
		`OKLCH is a colour space that offers up to 50% more colours than sRGB - <a href="https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/" target="_blank">more at Smashing Magazine here</a>.  <br />
		There\'s an amazing colour picker at <a href="https://oklch.com">oklch.com</a>.<br />And a great contrast checker at <a href="https://www.oddcontrast.com">oddcontrast.com</a>`

	};
</script>

<Card {...cardContent} />
