<script>
	import { Card } from '$lib/components';

	const cardContent = {
		heading: "I'm a card",
		small: 'I give credit',
		content:
			'This was inspired by <a href="https://www.youtube.com/watch?v=6aCsAMgwnjE">Adam Argyle\'s colour palette with OKLCH gui challenge</a>'
	};
</script>

<Card {...cardContent} />
