<script>
	import { Card } from '$lib/components';

	const cardContent = {
		heading: "I've got a link",
		small: 'You should go here',
		content:
			'Here is <a href="https://www.youtube.com/watch?v=6aCsAMgwnjE">Adam\'s tutorial on youtube</a>'
	};
</script>

<Card {...cardContent} />
