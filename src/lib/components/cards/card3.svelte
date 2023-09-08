<script>
	import { Card } from '$lib/components';

	const cardContent = {
		heading: "I'm another card",
		small: 'I have more resources',
		content:
			'There\'s an amazing colour picker at <a href="https://oklch.com">oklch.com</a><br />And another with a great contrast checker at <a href="https://www.oddcontrast.com">oddcontrast.com</a>'
	};
</script>

<Card {...cardContent} />
